import React, { useState, useEffect, useRef } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  Linking,
  Platform,
  BackHandler,
} from 'react-native'
import { WebView, type WebViewMessageEvent } from 'react-native-webview'
import messaging from '@react-native-firebase/messaging'
import SplashScreen from 'react-native-splash-screen'
import { getDeviceId, getModel, getUniqueId } from 'react-native-device-info'
import notifee from '@notifee/react-native'
import { request, PERMISSIONS } from 'react-native-permissions'
import NetInfo from '@react-native-community/netinfo'
import Offline from './screens/Offline'

// 앱이 최초 실행될 때 푸시메세지 권한 확인
async function requestUserPermission() {
  const authStatus = await messaging().requestPermission()
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL

  if (enabled) {
    console.log('Authorization status:', authStatus)
  }
}

// 추후 변경
const URI = 'https://ahhachul-com.vercel.app/'

const App = () => {
  const [isOffline, setIsOffline] = useState(false)
  const webviewRef = useRef<WebView | null>(null)
  const backAction = () => {
    webviewRef.current?.postMessage(
      JSON.stringify({
        name: 'backAction',
      }),
    )
    return true
  }

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction)

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction)
  }, [])

  useEffect(() => {
    requestUserPermission()
    if (Platform.OS === 'ios') {
      request(PERMISSIONS.IOS.CAMERA)
      request(PERMISSIONS.IOS.MICROPHONE)
    } else if (Platform.OS === 'android') {
      request(PERMISSIONS.ANDROID.CAMERA)
    }

    // Foreground 상태에서 알림 오면 실행
    messaging().onMessage(async remoteMessage => {
      const notiCount =
        Platform.OS === 'ios'
          ? remoteMessage?.notification?.ios?.badge || 0
          : remoteMessage?.data?.badge || 0

      if (notiCount === 0) {
        notifee.setBadgeCount(0)
        notifee.cancelAllNotifications()
      } else if (+notiCount > 0) {
        const channelId = await notifee.createChannel({
          id: remoteMessage.messageId as string,
          name: 'ahhachul.today.app',
        })
        await notifee.displayNotification({
          title: remoteMessage?.notification?.title,
          body: remoteMessage?.notification?.body,
          ios: {
            foregroundPresentationOptions: {
              sound: true,
            },
          },
          android: {
            channelId,
            pressAction: {
              id: 'default',
            },
            smallIcon: '@drawable/ic_push_icon',
            showTimestamp: true,
          },
        })
        webviewRef.current?.postMessage(
          JSON.stringify({
            name: 'notification',
            target: remoteMessage?.data?.target,
            isNavi: true,
            notiCount: notiCount,
          }),
        )
        notifee.setBadgeCount(+notiCount)
      }
    })

    // 알림 클릭시 실행
    messaging().onNotificationOpenedApp(remoteMessage => {
      if (remoteMessage) {
        webviewRef.current?.postMessage(
          JSON.stringify({
            name: 'notification',
            isNavi: true,
            target: remoteMessage?.data?.target,
            notiCount:
              Platform.OS === 'ios'
                ? remoteMessage?.notification?.ios?.badge || 0
                : remoteMessage?.data?.badge || 0,
          }),
        )
      }
    })

    NetInfo.fetch().then(state => {
      if (!state.isConnected) {
        setIsOffline(true)
      }
    })

    setTimeout(() => {
      SplashScreen.hide()
    }, 1000)
  }, [])

  const getDataFromWeb = async (event: WebViewMessageEvent) => {
    if (event.nativeEvent.data === 'getDeviceInfo') {
      const deviceId = Platform.OS === 'android' ? getModel() : getDeviceId() // https://gist.github.com/adamawolf/3048717
      const uniqueId = getUniqueId()
      const fcmToken = await messaging().getToken()
      webviewRef.current?.postMessage(
        JSON.stringify({
          name: 'deviceInfo',
          token: fcmToken,
          deviceId: deviceId,
          uniqueId: uniqueId,
        }),
      )
      return
    }
    if (event.nativeEvent.data.includes('callPhone')) {
      const data = JSON.parse(event.nativeEvent.data)
      Linking.openURL(`tel:${data.number}`)
      return
    }
    if (event.nativeEvent.data.includes('sendTextMessage')) {
      const data = JSON.parse(event.nativeEvent.data)
      Linking.openURL(`sms:${data.number}`)
      return
    }
    if (event.nativeEvent.data.includes('openExternalLink')) {
      const data = JSON.parse(event.nativeEvent.data)
      Linking.openURL(data.link)
      return
    }
    if (event.nativeEvent.data === 'getNetworkType') {
      NetInfo.fetch().then(state => {
        webviewRef.current?.postMessage(
          JSON.stringify({
            name: 'networkType',
            type: state.type,
          }),
        )
      })
    }
    if (event.nativeEvent.data === 'exitApp') {
      BackHandler.exitApp()
      return
    }
  }

  if (isOffline) {
    return <Offline />
  }

  return (
    <SafeAreaView style={styles.container}>
      <WebView
        onMessage={getDataFromWeb}
        ref={webviewRef}
        source={{ uri: URI }}
        bounces={false}
        onShouldStartLoadWithRequest={request => {
          if (
            request.url.includes('youtube.com/watch') ||
            request.url.includes('youtube.com/shorts') ||
            request.url.includes('pf.kakao.com')
          ) {
            Linking.openURL(request.url)
            return false
          }
          return true
        }}
        onContentProcessDidTerminate={() => webviewRef.current?.reload()} // https://github.com/react-native-webview/react-native-webview/issues/2298
        allowsFullscreenVideo={true}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default App

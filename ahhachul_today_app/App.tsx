import React, {useEffect, useRef} from 'react';
import {SafeAreaView, StyleSheet, Linking, BackHandler} from 'react-native';
import WebView, {WebViewMessageEvent} from 'react-native-webview';
// import {getDeviceId, getModel, getUniqueId} from 'react-native-device-info';

const URI = 'https://ahhachul-com.vercel.app';

function App(): JSX.Element {
  const webviewRef = useRef<WebView | null>(null);

  const backAction = () => {
    webviewRef.current?.postMessage(
      JSON.stringify({
        name: 'backAction',
      }),
    );
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, []);

  const getDataFromWeb = async (event: WebViewMessageEvent) => {
    if (event.nativeEvent.data === 'getDeviceInfo') {
      // const deviceId = Platform.OS === 'android' ? getModel() : getDeviceId(); // https://gist.github.com/adamawolf/3048717
      // const uniqueId = getUniqueId();
      // const fcmToken = await messaging().getToken();
      webviewRef.current?.postMessage(
        JSON.stringify({
          name: 'deviceInfo',
          // token: fcmToken,
          // deviceId: deviceId,
          // uniqueId: uniqueId,
        }),
      );
      return;
    }
    if (event.nativeEvent.data.includes('callPhone')) {
      const data = JSON.parse(event.nativeEvent.data);
      Linking.openURL(`tel:${data.number}`);
      return;
    }
    if (event.nativeEvent.data.includes('sendTextMessage')) {
      const data = JSON.parse(event.nativeEvent.data);
      Linking.openURL(`sms:${data.number}`);
      return;
    }
    if (event.nativeEvent.data.includes('openExternalLink')) {
      const data = JSON.parse(event.nativeEvent.data);
      Linking.openURL(data.link);
      return;
    }
    if (event.nativeEvent.data === 'getNetworkType') {
      // NetInfo.fetch().then(state => {
      //   webviewRef.current?.postMessage(
      //     JSON.stringify({
      //       name: 'networkType',
      //       type: state.type,
      //     }),
      //   );
      // });
    }
    if (event.nativeEvent.data === 'exitApp') {
      BackHandler.exitApp();
      return;
    }
  };

  // if (isOffline) {
  //   return <Offline />;
  // }

  return (
    <>
      <SafeAreaView style={styles.statusBar} />
      <WebView
        style={styles.container}
        bounces={false}
        ref={webviewRef}
        source={{uri: URI}}
        allowsFullscreenVideo
        onMessage={getDataFromWeb}
        onContentProcessDidTerminate={() => webviewRef.current?.reload()} // https://github.com/react-native-webview/react-native-webview/issues/2298
        onShouldStartLoadWithRequest={request => {
          if (
            request.url.includes('youtube.com/watch') ||
            request.url.includes('pf.kakao.com')
          ) {
            Linking.openURL(request.url);
            return false;
          }
          return true;
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: '#141517',
  },
  container: {
    flex: 1,
  },
});

export default App;

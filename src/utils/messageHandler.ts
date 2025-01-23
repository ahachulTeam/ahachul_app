import {Linking, BackHandler} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import type {WebView, WebViewMessageEvent} from 'react-native-webview';
import HapticFeedback from 'react-native-haptic-feedback';
import Share from 'react-native-share';

import {getDeviceInformation} from './deviceInfo';
import type {WebViewMessage} from '../types/webview';

export const createMessageHandler = (webviewRef: React.RefObject<WebView>) => {
  return async (event: WebViewMessageEvent) => {
    const {data} = event.nativeEvent;

    if (data === 'getDeviceInfo') {
      const {deviceId, uniqueId} = await getDeviceInformation();
      webviewRef.current?.postMessage(
        JSON.stringify({
          name: 'deviceInfo',
          deviceId,
          uniqueId,
        }),
      );
      return;
    }

    if (data === 'getNetworkType') {
      const state = await NetInfo.fetch();
      webviewRef.current?.postMessage(
        JSON.stringify({
          name: 'networkType',
          type: state.type,
        }),
      );
      return;
    }

    if (data === 'exitApp') {
      BackHandler.exitApp();
      return;
    }

    try {
      const message: WebViewMessage = JSON.parse(data);

      switch (message.name) {
        case 'callPhone':
          await Linking.openURL(`tel:${message.number}`);
          break;
        case 'sendTextMessage':
          await Linking.openURL(`sms:${message.number}`);
          break;
        case 'openExternalLink':
          await Linking.openURL(message.link);
          break;
        case 'haptic':
          HapticFeedback.trigger('impactLight', {
            enableVibrateFallback: true,
            ignoreAndroidSystemSettings: false,
          });
          break;
        case 'share':
          try {
            await Share.open({url: message.link});
          } catch (err) {
            console.error('Error sharing:', err);
          }
          break;
      }
    } catch (error) {
      console.error('Failed to parse message:', error);
    }
  };
};

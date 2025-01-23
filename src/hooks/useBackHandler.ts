import {useEffect} from 'react';
import {BackHandler} from 'react-native';
import type WebView from 'react-native-webview';

export const useBackHandler = (webviewRef: React.RefObject<WebView>) => {
  useEffect(() => {
    const backAction = () => {
      webviewRef.current?.postMessage(
        JSON.stringify({
          name: 'backAction',
        }),
      );
      return true;
    };

    BackHandler.addEventListener('hardwareBackPress', backAction);
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, [webviewRef]);
};

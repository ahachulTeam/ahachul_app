import {useRef, useEffect, useState} from 'react';
import {Linking} from 'react-native';
import type WebView from 'react-native-webview';
import NetInfo from '@react-native-community/netinfo';
import {createMessageHandler} from '../utils/messageHandler';
import {useBackHandler} from './useBackHandler';
import SplashScreen from 'react-native-splash-screen';

const SPLASH_SCREEN_DELAY = 1000;

export const useWebView = () => {
  const webviewRef = useRef<WebView | null>(null);
  const [isOffline, setIsOffline] = useState(false);

  useBackHandler(webviewRef);

  const messageHandler = createMessageHandler(webviewRef);

  const handleLoadRequest = (request: {url: string}) => {
    if (
      request.url.includes('youtube.com/watch') ||
      request.url.includes('pf.kakao.com')
    ) {
      Linking.openURL(request.url);
      return false;
    }
    return true;
  };

  const handleProcessTerminate = () => {
    webviewRef.current?.reload();
  };

  useEffect(() => {
    NetInfo.fetch().then(state => {
      if (!state.isConnected) {
        setIsOffline(true);
      }
    });

    const splashTimer = setTimeout(() => {
      SplashScreen.hide();
    }, SPLASH_SCREEN_DELAY);

    return () => {
      clearTimeout(splashTimer);
    };
  }, []);

  return {
    isOffline,
    webviewRef,
    messageHandler,
    handleLoadRequest,
    handleProcessTerminate,
  };
};

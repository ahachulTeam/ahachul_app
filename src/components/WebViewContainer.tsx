import type React from 'react';
import {StyleSheet} from 'react-native';
import WebView, {type WebViewMessageEvent} from 'react-native-webview';
import {URI, STYLES, APP_AGENT} from '../constants/config';

interface WebViewContainerProps {
  webviewRef: React.RefObject<WebView>;
  onMessage: (event: WebViewMessageEvent) => void;
  onShouldStartLoadWithRequest: (request: {url: string}) => boolean;
  onContentProcessDidTerminate: () => void;
}

export const WebViewContainer: React.FC<WebViewContainerProps> = ({
  webviewRef,
  onMessage,
  onShouldStartLoadWithRequest,
  onContentProcessDidTerminate,
}) => {
  return (
    <WebView
      style={styles.container}
      bounces={false}
      ref={webviewRef}
      source={{uri: URI}}
      userAgent={APP_AGENT}
      allowsFullscreenVideo
      hideKeyboardAccessoryView
      onMessage={onMessage}
      onContentProcessDidTerminate={onContentProcessDidTerminate}
      onShouldStartLoadWithRequest={onShouldStartLoadWithRequest}
    />
  );
};

const styles = StyleSheet.create({
  container: STYLES.CONTAINER,
});

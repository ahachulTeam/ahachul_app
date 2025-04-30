import type React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import WebView, {type WebViewMessageEvent} from 'react-native-webview';
import {uri, userAgent, STYLES} from '../constants/config';

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
      source={{uri}}
      ref={webviewRef}
      userAgent={userAgent}
      onMessage={onMessage}
      onContentProcessDidTerminate={onContentProcessDidTerminate}
      onShouldStartLoadWithRequest={onShouldStartLoadWithRequest}
      style={styles.container}
      bounces={false}
      hideKeyboardAccessoryView
      allowsFullscreenVideo
      startInLoadingState
      renderLoading={() => (
        <View style={styles.loadingSpinner}>
          <ActivityIndicator size="small" color="#d1d1d1" />
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: STYLES.CONTAINER,
  loadingSpinner: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    marginTop: -84,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
});

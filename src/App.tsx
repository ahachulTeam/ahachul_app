import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {useWebView} from './hooks/useWebView';
import {WebViewContainer} from './components/WebViewContainer';
import {Offline} from './screens/Offline';
import {STYLES} from './constants/config';

function App(): JSX.Element {
  const {
    webviewRef,
    isOffline,
    messageHandler,
    handleLoadRequest,
    handleProcessTerminate,
  } = useWebView();

  if (isOffline) {
    return <Offline />;
  }

  return (
    <>
      <SafeAreaView style={styles.statusBar} />
      <WebViewContainer
        webviewRef={webviewRef}
        onMessage={messageHandler}
        onShouldStartLoadWithRequest={handleLoadRequest}
        onContentProcessDidTerminate={handleProcessTerminate}
      />
    </>
  );
}

const styles = StyleSheet.create({
  statusBar: STYLES.STATUS_BAR,
});

export default App;

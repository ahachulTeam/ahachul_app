import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {useWebView} from './hooks/useWebView';
import {WebViewContainer} from './components/WebViewContainer';
import {Offline} from './screens/Offline';
import {STYLES} from './constants/config';
import {usePermission} from './hooks/usePermission';
import PermissionDialog from './components/PermissionModal';

function App(): JSX.Element {
  const {visible, handlePermissionConfirm} = usePermission();
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
      <PermissionDialog visible={visible} onConfirm={handlePermissionConfirm} />
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

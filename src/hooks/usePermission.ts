import {Platform} from 'react-native';
import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import messaging from '@react-native-firebase/messaging';
import {request, PERMISSIONS} from 'react-native-permissions';

// async function requestUserPermission() {
//   const authStatus = await messaging().requestPermission();
//   const enabled =
//     authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
//     authStatus === messaging.AuthorizationStatus.PROVISIONAL;

//   if (enabled) {
//     console.log('Authorization status:', authStatus);
//   }
// }

const FIRST_LAUNCH_KEY = 'AHHACHUL_FIRST_LAUNCH_KEY';

export const usePermission = () => {
  const [visible, setShowPermissionModal] = useState(false);

  const checkFirstLaunch = async () => {
    try {
      const hasLaunched = await AsyncStorage.getItem(FIRST_LAUNCH_KEY);
      if (hasLaunched === null) {
        setShowPermissionModal(true);
        return true;
      }
      return false;
    } catch (error) {
      console.log('Error checking first launch:', error);
      return false;
    }
  };

  const handlePermissionConfirm = async () => {
    setShowPermissionModal(false);
    // await requestUserPermission();

    if (Platform.OS === 'ios') {
      await request(PERMISSIONS.IOS.CAMERA);
      await request(PERMISSIONS.IOS.MICROPHONE);
      await request(PERMISSIONS.IOS.SPEECH_RECOGNITION);
    } else if (Platform.OS === 'android') {
      await request(PERMISSIONS.ANDROID.CAMERA);
      await request(PERMISSIONS.ANDROID.CALL_PHONE);
      await request(PERMISSIONS.ANDROID.RECORD_AUDIO);
    }

    try {
      await AsyncStorage.setItem(FIRST_LAUNCH_KEY, 'true');
    } catch (error) {
      console.log('Error saving first launch status:', error);
    }
  };

  useEffect(() => {
    checkFirstLaunch();
  }, []);

  return {
    visible,
    handlePermissionConfirm,
  };
};

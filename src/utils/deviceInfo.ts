import {Platform} from 'react-native';
import {getDeviceId, getModel, getUniqueId} from 'react-native-device-info';

export const getDeviceInformation = async () => {
  const deviceId = Platform.OS === 'android' ? getModel() : getDeviceId();
  const uniqueId = getUniqueId();

  return {
    deviceId,
    uniqueId,
  };
};

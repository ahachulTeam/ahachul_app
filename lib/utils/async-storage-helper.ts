import AsyncStorage from '@react-native-async-storage/async-storage'

/**
 * AsyncStorage에서 key의 값을 불러옵니다.
 * @param key AsyncStorage의 key
 * @returns key에 해당하는 value
 */
export const getAsyncData = async (key: string) => {
  const data = await AsyncStorage.getItem(key)

  if (data) {
    return JSON.parse(data)
  }
}

/**
 * AsyncStorage에 데이터를 저장합니다.
 * @param key AsyncStorage의 key
 * @param value
 */
export const storeAsyncData = async (key: string, value: object | string) => {
  const valueString = JSON.stringify(value)

  await AsyncStorage.setItem(key, valueString)
}

/**
 * AsyncStorage에 key에 해당하는 데이터를 제거합니다.
 * @param key AsyncStorage의 key
 */
export const removeAsyncData = async (key: string) => {
  await AsyncStorage.removeItem(key)
}

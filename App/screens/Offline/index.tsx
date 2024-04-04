import React from 'react'
import { Text, SafeAreaView, View, Image, StyleSheet } from 'react-native'

function Offline() {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.img}
        source={require('../../assets/icon_offline.png')}
      />
      <View style={styles.textBox}>
        <Text style={styles.title}>인터넷 연결이 불안해요.</Text>
        <Text style={styles.desc}>
          wifi나 데이터 사용이 가능한 곳으로 이동해서 다시 앱을 실행해 주세요.
        </Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: '75%',
  },
  img: {
    width: 56,
    height: 56,
  },
  textBox: {
    paddingLeft: 45.5,
    paddingRight: 45.5,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 16,
    marginBottom: 12,
    textAlign: 'center',
    color: '#3C3F44',
  },
  desc: {
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    color: '#727B8E',
  },
})

export default Offline

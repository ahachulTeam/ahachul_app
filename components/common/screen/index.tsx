import React, { ReactNode } from 'react'
import { SafeAreaView, StatusBar, View } from 'react-native'
import { colors, globalStyle } from '../../../App/config/globalStyle'

interface Props {
  type?: string
  bgColor?: string // 전체 배경색F
  sbColor?: string // 스테이터스바 색
  children?: ReactNode
  style?: object
}

const CSScreen = ({
  type = 'safe',
  bgColor = colors.white,
  sbColor,
  style,
  children,
}: Props) => {
  const Container = type === 'safe' ? SafeAreaView : View

  return (
    <>
      <SafeAreaView
        style={{ flex: 0, backgroundColor: sbColor ? sbColor : bgColor }}
      />
      <Container
        style={[globalStyle.flexOne, { backgroundColor: bgColor }, style]}>
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor={sbColor ? sbColor : bgColor}
        />
        <View style={[globalStyle.flexOne, { backgroundColor: bgColor }]}>
          {children}
        </View>
      </Container>
    </>
  )
}

export default CSScreen

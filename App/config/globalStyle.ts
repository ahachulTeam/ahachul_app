import { Dimensions, StyleSheet } from 'react-native'

export const colors = {
  gray10: '#F2F2F2',
  gray20: '#E3E3E3',
  gray30: '#CFCFCF',
  gray40: '#ADADAD',
  gray50: '#676767',
  gray60: '#575757',
  gray70: '#474747',
  gray80: '#373737',
  black: '#272727',

  white: '#FFF',
  gray: '#8B8B8B',
  blue: '#00BAF6',
  yellow: '#FEE102',
  red: '#EE4D4D',

  ColorBCBCBC: '#BCBCBC',
  ColorE2E2E2: '#E2E2E2',
  ColorCOCOCO: '#COCOCO',
  ColorE9E9E9: '#E9E9E9',
  ColorC2C2C2: '#C2C2C2',
  ColorD0EEFF: '#D0EEFF',
  ColorDFDFDF: '#DFDFDF',
  Color8C8C8C: '#8C8C8C',
}

export const fonts = {
  Pretendard_Bold: 'Pretendard-Bold',
  Pretendard_Medium: 'Pretendard-Medium',
  Pretendard_Regular: 'Pretendard-Regular',
  Pretendard_SemiBold: 'Pretendard-SemiBold',
  PretendardVariable: 'PretendardVariable',
}

export const images = {
  googleIcon: require('../../images/google.svg'),
  kakaoIcon: require('../../images/kakao.svg'),
}

export const globalStyle = StyleSheet.create({
  flexOne: {
    flex: 1,
  },
  flexRowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textAlignCenter: {
    textAlign: 'center',
  },
})

export const screenHeight = Dimensions.get('screen').height
export const screenWidth = Dimensions.get('screen').width
export const windowHeight = Dimensions.get('window').height

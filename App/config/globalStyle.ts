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
  ColorE7E7E7: '#E7E7E7',
}

export const fonts = {
  Pretendard_Bold: 'Pretendard-Bold',
  Pretendard_Medium: 'Pretendard-Medium',
  Pretendard_Regular: 'Pretendard-Regular',
  Pretendard_SemiBold: 'Pretendard-SemiBold',
  PretendardVariable: 'PretendardVariable',
}

export const images = {
  OnboardingGirl: require('../../images/onboarding-girl.png'),
  OnboardingInconvenient: require('../../images/onboarding-inconvenient.png'),
  OnboardingWalking: require('../../images/onboarding-walking.png'),
  OnboardingSearching: require('../../images/onboarding-searching.png'),
}

export const icons = {
  GoogleIcon: require('../assets/svg/ic_google.svg'),
  KakaoIcon: require('../assets/svg/ic_kakao.svg'),

  AlarmIcon: require('../assets/svg/ic_alarm.svg'),
  AlarmFillIcon: require('../assets/svg/ic_alarm_fill.svg'),
  ArrowBackIcon: require('../assets/svg/ic_arrow_back.svg'),
  ArrowDownIcon: require('../assets/svg/ic_arrow_down.svg'),

  BellIcon: require('../assets/svg/ic_bell.svg'),

  CategoryIcon: require('../assets/svg/ic_category.svg'),
  CategoryFillIcon: require('../assets/svg/ic_category_fill.svg'),
  CheckIcon: require('../assets/svg/ic_check.svg'),
  CheckFillIcon: require('../assets/svg/ic_check_fill.svg'),
  CloseIcon: require('../assets/svg/ic_close.svg'),
  CloseFillIcon: require('../assets/svg/ic_close_fill.svg'),

  GridIcon: require('../assets/svg/ic_grid.svg'),
  HomeIcon: require('../assets/svg/ic_home.svg'),
  HomeFillIcon: require('../assets/svg/ic_home_fill.svg'),

  Information16Icon: require('../assets/svg/ic_information_16.svg'),
  Information24Icon: require('../assets/svg/ic_information_24.svg'),

  LocationIcon: require('../assets/svg/ic_location.svg'),
  LoveIcon: require('../assets/svg/ic_love.svg'),
  MailIcon: require('../assets/svg/ic_mail.svg'),
  MenuIcon: require('../assets/svg/ic_menu.svg'),

  MiniHamburgerIcon: require('../assets/svg/ic_mini_hamburger.svg'),
  NetworkUnconnectedIcon: require('../assets/svg/ic_network_unconnected.svg'),
  NotificationIcon: require('../assets/svg/ic_notification.svg'),

  ProfileIcon: require('../assets/svg/ic_profile.svg'),
  RandomBoxIcon: require('../assets/svg/ic_random_box.svg'),
  RandomBoxFillIcon: require('../assets/svg/ic_random_box_fill.svg'),
  RefetchIcon: require('../assets/svg/ic_refetch.svg'),

  SearchIcon: require('../assets/svg/ic_search.svg'),
  ShareIcon: require('../assets/svg/ic_share.svg'),
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

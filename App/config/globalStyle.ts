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
  OnboardingGirl: require('../../images/onboarding-girl.png'),
  OnboardingShiver: require('../../images/onboarding-shiver.png'),
}

export const icons = {
  GoogleIcon: require('../asset/icons/ic_google.svg'),
  KakaoIcon: require('../asset/icons/ic_kakao.svg'),

  AlarmIcon: require('../asset/icons/ic_alarm.svg'),
  AlarmFillIcon: require('../asset/icons/ic_alarm_fill.svg'),
  ArrowIcon: require('../asset/icons/ic_arrow.svg'),
  ArrowDownIcon: require('../asset/icons/ic_arrow_down.svg'),

  BellIcon: require('../asset/icons/ic_bell.svg'),

  CategoryIcon: require('../asset/icons/ic_category.svg'),
  CategoryFillIcon: require('../asset/icons/ic_category_fill.svg'),
  CheckIcon: require('../asset/icons/ic_check.svg'),
  CheckFillIcon: require('../asset/icons/ic_check_fill.svg'),
  CloseIcon: require('../asset/icons/ic_close.svg'),
  CloseFillIcon: require('../asset/icons/ic_close_fill.svg'),

  GridIcon: require('../asset/icons/ic_grid.svg'),
  HomeIcon: require('../asset/icons/ic_home.svg'),
  HomeFillIcon: require('../asset/icons/ic_home_fill.svg'),

  Information16Icon: require('../asset/icons/ic_information_16.svg'),
  Information24Icon: require('../asset/icons/ic_information_24.svg'),

  LocationIcon: require('../asset/icons/ic_location.svg'),
  LoveIcon: require('../asset/icons/ic_love.svg'),
  MailIcon: require('../asset/icons/ic_mail.svg'),
  MenuIcon: require('../asset/icons/ic_menu.svg'),

  MiniHamburgerIcon: require('../asset/icons/ic_mini_hamburger.svg'),
  NetworkUnconnectedIcon: require('../asset/icons/ic_network_unconnected.svg'),
  NotificationIcon: require('../asset/icons/ic_notification.svg'),

  ProfileIcon: require('../asset/icons/ic_profile.svg'),
  RandowBoxIcon: require('../asset/icons/ic_random_box.svg'),
  RandowBoxFillIcon: require('../asset/icons/ic_random_box_fill.svg'),
  RefetchIcon: require('../asset/icons/ic_refetch.svg'),

  SearchIcon: require('../asset/icons/ic_search.svg'),
  ShareIcon: require('../asset/icons/ic_share.svg'),
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

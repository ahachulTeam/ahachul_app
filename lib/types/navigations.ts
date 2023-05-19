import { NavigatorScreenParams } from '@react-navigation/native'

export type RootStackScreenList = {
  AuthStack: NavigatorScreenParams<AuthStackScreenList>
  MainStack: NavigatorScreenParams<MainStackScreenList>
}

export type AuthStackScreenList = {
  OnBoarding: undefined
  Login: undefined
  SignUp: undefined
}

export type TabStackScreenList = {
  HomeTab: undefined
  LostFoundTab: undefined
  BoardTab: undefined
  ComplaintsTab: undefined
}

export type MainStackScreenList = {
  TabStack: NavigatorScreenParams<TabStackScreenList>
  LostDetail: undefined
}

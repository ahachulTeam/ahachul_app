import { NavigatorScreenParams } from '@react-navigation/native'

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

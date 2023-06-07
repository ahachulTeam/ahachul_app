import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { TabStackScreenList } from '../../lib/types/navigations'
import BoardMainScreen from '../../screens/Board/MainScreen'
import ComplaintsMainScreen from '../../screens/Complaints/MainScreen'
import HomeMainScreen from '../../screens/Home/MainScreen'
import LostFoundMainScreen from '../../screens/LostFound/MainScreen'
import AlarmIcon from '../assets/svg/ic_alarm.svg'
import AlarmFillIcon from '../assets/svg/ic_alarm_fill.svg'
import CategoryIcon from '../assets/svg/ic_category.svg'
import CategoryFillIcon from '../assets/svg/ic_category_fill.svg'
import HomeIcon from '../assets/svg/ic_home.svg'
import HomeFillIcon from '../assets/svg/ic_home_fill.svg'
import LostIcon from '../assets/svg/ic_random_box.svg'
import LostFillIcon from '../assets/svg/ic_random_box_fill.svg'
import { colors, fonts } from '../config/globalStyle'

const Tab = createBottomTabNavigator<TabStackScreenList>()

const TabStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 10,
          fontFamily: fonts.Pretendard_Medium,
        },
        tabBarActiveTintColor: colors.blue,
        tabBarInactiveTintColor: colors.gray30,
      }}>
      <Tab.Screen
        name="HomeTab"
        component={HomeMainScreen}
        options={{
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <HomeFillIcon color={color} />
            ) : (
              <HomeIcon color={color} />
            ),
          tabBarLabel: '홈',
        }}
      />
      <Tab.Screen
        name="LostFoundTab"
        component={LostFoundMainScreen}
        options={{
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <LostFillIcon color={color} />
            ) : (
              <LostIcon color={color} />
            ),
          tabBarLabel: '유실물',
        }}
      />

      <Tab.Screen
        name="BoardTab"
        component={BoardMainScreen}
        options={{
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <AlarmFillIcon color={color} />
            ) : (
              <AlarmIcon color={color} />
            ),
          tabBarLabel: '게시판',
        }}
      />

      <Tab.Screen
        name="ComplaintsTab"
        component={ComplaintsMainScreen}
        options={{
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <CategoryFillIcon color={color} />
            ) : (
              <CategoryIcon color={color} />
            ),
          tabBarLabel: '민원접수',
        }}
      />
    </Tab.Navigator>
  )
}

export default TabStack

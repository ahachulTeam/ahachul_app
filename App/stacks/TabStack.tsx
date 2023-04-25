import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import LostFoundMainScreen from '../../screens/LostFound/MainScreen'
import HomeMainScreen from '../../screens/Home/MainScreen'
import BoardMainScreen from '../../screens/Board/MainScreen'
import ComplaintsMainScreen from '../../screens/Complaints/MainScreen'
import { colors, fonts, icons } from '../config/globalStyle'
import { WithLocalSvg } from 'react-native-svg'
import styled from '@emotion/native'

const Tab = createBottomTabNavigator()

const TabStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
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
        name="Home"
        component={HomeMainScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              color={color}
              asset={focused ? icons.HomeFillIcon : icons.HomeIcon}
            />
          ),
          tabBarLabel: '홈',
        }}
      />
      <Tab.Screen
        name="LostFound"
        component={LostFoundMainScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              color={color}
              asset={focused ? icons.RandowBoxFillIcon : icons.RandowBoxIcon}
            />
          ),
          tabBarLabel: '유실물',
        }}
      />

      <Tab.Screen
        name="Board"
        component={BoardMainScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              color={color}
              asset={focused ? icons.AlarmFillIcon : icons.AlarmIcon}
            />
          ),
          tabBarLabel: '게시판',
        }}
      />

      <Tab.Screen
        name="Complaints"
        component={ComplaintsMainScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              color={color}
              asset={focused ? icons.CategoryFillIcon : icons.CategoryIcon}
            />
          ),
          tabBarLabel: '민원접수',
        }}
      />
    </Tab.Navigator>
  )
}

export default TabStack

const TabIcon = styled(WithLocalSvg)`
  width: 24px;
  height: 24px;
`

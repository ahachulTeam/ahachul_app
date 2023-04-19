import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import LostFoundMainScreen from '../../screens/LostFound/MainScreen'
import AhIcon from '../config/Icon-font'
import HomeMainScreen from '../../screens/Home/MainScreen'
import BoardMainScreen from '../../screens/Board/MainScreen'
import ComplaintsMainScreen from '../../screens/Complaints/MainScreen'
import { colors, fonts } from '../config/globalStyle'

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
          tabBarIcon: ({ color }) => (
            <AhIcon size={24} name={'ic_home'} color={color} />
          ),
          tabBarLabel: '홈',
        }}
      />
      <Tab.Screen
        name="LostFound"
        component={LostFoundMainScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <AhIcon size={24} name={'ic_random_box_fill'} color={color} />
          ),
          tabBarLabel: '유실물',
        }}
      />

      <Tab.Screen
        name="Board"
        component={BoardMainScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <AhIcon size={24} name={'ic_alarm'} color={color} />
          ),
          tabBarLabel: '게시판',
        }}
      />

      <Tab.Screen
        name="Complaints"
        component={ComplaintsMainScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <AhIcon size={24} name={'ic_category'} color={color} />
          ),
          tabBarLabel: '민원접수',
        }}
      />
    </Tab.Navigator>
  )
}

export default TabStack

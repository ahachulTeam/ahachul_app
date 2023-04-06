import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../../screens/Home'

const Tab = createBottomTabNavigator()

const TabStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}>
      <Tab.Screen name="HomeTab" component={Home} />
    </Tab.Navigator>
  )
}

export default TabStack

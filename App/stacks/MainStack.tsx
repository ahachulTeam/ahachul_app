import { createStackNavigator } from '@react-navigation/stack'
import WithAuth from '../../components/public/WithAuth'
import TabStack from './TabStack'
import LostFoundWriteScreen from '../../screens/LostFound/WriteScreen'

const Stack = createStackNavigator()

const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="TabStack"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="TabStack" component={TabStack} />
      <Stack.Screen
        name="LostFoundWriteScreen"
        component={LostFoundWriteScreen}
      />
    </Stack.Navigator>
  )
}

export default WithAuth(MainStack)

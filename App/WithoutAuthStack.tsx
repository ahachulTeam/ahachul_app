import { createStackNavigator } from '@react-navigation/stack'
import Login from '../screens/Login'
import Signup from '../screens/Signup'

const Stack = createStackNavigator()

const WithoutAuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={Signup} />
    </Stack.Navigator>
  )
}

export default WithoutAuthStack

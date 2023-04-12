import { createStackNavigator } from '@react-navigation/stack'
import Login from '../../screens/Login'
import Onboarding from '../../screens/Onboarding'
import Signup from '../../screens/Signup'

const Stack = createStackNavigator()

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="OnBoarding"
        component={Onboarding}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={Signup} />
    </Stack.Navigator>
  )
}

export default AuthStack

import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack'
import Login from '../../screens/Login'
import Onboarding from '../../screens/Onboarding'
import Signup from '../../screens/Signup'

const Stack = createStackNavigator()

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={'OnBoarding'}
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen name="OnBoarding" component={Onboarding} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={Signup} />
    </Stack.Navigator>
  )
}

export default AuthStack

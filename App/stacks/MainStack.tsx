import { createStackNavigator } from '@react-navigation/stack'
import WithAuth from '../../components/public/WithAuth'
import TabStack from './TabStack'

const Stack = createStackNavigator()

const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="TabStack">
      <Stack.Screen
        name="TabStack"
        component={TabStack}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default MainStack

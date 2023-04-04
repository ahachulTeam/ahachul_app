import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import MainStack from './MainStack'
import AuthStack from './AuthStack'

const RootStack = () => {
  const RootStack = createStackNavigator()

  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="MainStack" component={MainStack} />
        <RootStack.Screen name="AuthStack" component={AuthStack} />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

export default RootStack

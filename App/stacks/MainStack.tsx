import { createStackNavigator } from '@react-navigation/stack'
import WithAuth from '../../components/public/WithAuth'
import TabStack from './TabStack'
import LostDetail from '../../screens/LostFound/LostDetail'
import { MainStackScreenList } from '../../lib/types/navigations'
import { colors } from '../config/globalStyle'

const Stack = createStackNavigator()

export const Main = createStackNavigator<MainStackScreenList>()

const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="TabStack"
      screenOptions={{ cardStyle: { backgroundColor: colors.white } }}>
      <Stack.Screen
        name="TabStack"
        component={TabStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LostDetail"
        component={LostDetail}
        options={{ title: '' }}
      />
    </Stack.Navigator>
  )
}

export default MainStack

import { createStackNavigator, StackScreenProps } from '@react-navigation/stack'
import {
  MainStackScreenList,
  RootStackScreenList,
} from '../../lib/types/navigations'
import { getStackScreenOptions } from '../../lib/utils/navigation'
import LostDetail from '../../screens/LostFound/LostDetail'
import { colors } from '../config/globalStyle'
import TabStack from './TabStack'
<<<<<<< HEAD
import LostDetail from '../../screens/LostFound/LostDetail'
=======
import LostFoundWriteScreen from '../../screens/LostFound/WriteScreen'
>>>>>>> main

const Stack = createStackNavigator()

export const Main = createStackNavigator<MainStackScreenList>()

const MainStack = ({
  navigation,
}: StackScreenProps<RootStackScreenList, 'MainStack'>) => {
  return (
    <Stack.Navigator
      initialRouteName="TabStack"
       screenOptions={({ navigation: nav }) => getStackScreenOptions(nav)}>
      <Stack.Screen name="TabStack" component={TabStack} />
      <Stack.Screen
        name="LostFoundWriteScreen"
        component={LostFoundWriteScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LostDetail"
        component={LostDetail}
<<<<<<< HEAD
        options={{ title: '' }}
=======
        options={{ headerShown: false }}
>>>>>>> cb8c55641c3ea2a28ca15e7570111ddc6db046a4
      />
    </Stack.Navigator>
  )
}

export default MainStack

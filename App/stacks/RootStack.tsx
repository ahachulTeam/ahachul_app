import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import MainStack from './MainStack'
import AuthStack from './AuthStack'
import { useRecoilValue } from 'recoil'
import { isPopupModalVisibleState } from '../../stores/global'
import PopupModal from '../../components/common/PopupModal'

const RootStack = () => {
  const RootStack = createStackNavigator()
  const isPopupModalVisible = useRecoilValue(isPopupModalVisibleState)

  return (
    <>
      {isPopupModalVisible && <PopupModal />}

      <NavigationContainer>
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
          <RootStack.Screen name="MainStack" component={MainStack} />
          <RootStack.Screen name="AuthStack" component={AuthStack} />
        </RootStack.Navigator>
      </NavigationContainer>
    </>
  )
}

export default RootStack

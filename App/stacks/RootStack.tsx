import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { useRecoilValue } from 'recoil'
import BottomSheet from '../../components/common/BottomSheet'
import PopupModal from '../../components/common/PopupModal'
import { isBottomSheetVisibleState } from '../../stores/bottom-sheet'
import { isPopupModalVisibleState } from '../../stores/global'
import AuthStack from './AuthStack'
import MainStack from './MainStack'

const RootStack = () => {
  const RootStack = createStackNavigator()
  const isPopupModalVisible = useRecoilValue<boolean>(isPopupModalVisibleState)
  const isBottomSheetVisible = useRecoilValue<boolean>(
    isBottomSheetVisibleState,
  )

  return (
    <>
      {isPopupModalVisible && <PopupModal />}
      {isBottomSheetVisible && <BottomSheet />}

      <NavigationContainer>
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
          <RootStack.Screen name="AuthStack" component={AuthStack} />
          <RootStack.Screen name="MainStack" component={MainStack} />
        </RootStack.Navigator>
      </NavigationContainer>
    </>
  )
}

export default RootStack

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { useRecoilValue } from 'recoil'
import BottomSheet from '../../components/common/BottomSheet'
import PopupModal from '../../components/common/PopupModal'
import { RootStackScreenList } from '../../lib/types/navigations'
import { isBottomSheetVisibleState } from '../../stores/bottom-sheet'
import { isPopupModalVisibleState } from '../../stores/global'
import AuthStack from './AuthStack'
import MainStack from './MainStack'

const Root = createStackNavigator<RootStackScreenList>()

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
        <Root.Navigator screenOptions={{ headerShown: false }}>
          <Root.Screen name="AuthStack" component={AuthStack} />
          <Root.Screen name="MainStack" component={MainStack} />
        </Root.Navigator>
      </NavigationContainer>
    </>
  )
}

export default RootStack

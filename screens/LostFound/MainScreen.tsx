import React from 'react'
import CSScreen from '../../components/common/screen'
import CSHeader from '../../components/common/header'
import MenuIcon from '../../App/assets/svg/ic_menu.svg'
import BellIcon from '../../App/assets/svg/ic_bell.svg'
import { colors } from '../../App/config/globalStyle'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { MainStackScreenList } from '../../lib/types/navigations'

const LostFoundMainScreen = () => {
  const navigation = useNavigation<StackNavigationProp<MainStackScreenList>>()

  const handleMenuClick = () => {}
  const handleAlarmClick = () => {
    navigation.navigate('LostDetail')
  }

  return (
    <CSScreen>
      <CSHeader
        leftIcon={<MenuIcon width={24} height={24} color={colors.black} />}
        leftIconPress={handleMenuClick}
        rightIcon={<BellIcon width={24} height={24} color={colors.black} />}
        rightIconPress={handleAlarmClick}
        border
      />
    </CSScreen>
  )
}

export default LostFoundMainScreen

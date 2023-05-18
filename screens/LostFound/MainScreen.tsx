import React from 'react'
import CSScreen from '../../components/common/screen'
import CSHeader from '../../components/common/header'
import styled from '@emotion/native'
import { WithLocalSvg } from 'react-native-svg'
import { colors, icons } from '../../App/config/globalStyle'

const LostFoundMainScreen = () => {
  const handleMenuClick = () => {}
  const handleAlarmClick = () => {}
  return (
    <CSScreen>
      <CSHeader
        leftIcon={<Icon asset={icons.MenuIcon} />}
        leftIconPress={handleMenuClick}
        rightIcon={<Icon asset={icons.BellIcon} />}
        rightIconPress={handleAlarmClick}
        border
      />
    </CSScreen>
  )
}

export default LostFoundMainScreen

const Icon = styled(WithLocalSvg)`
  width: 24px;
  height: 24px;
  color: ${colors.black};
`

import React from 'react'
import CSScreen from '../../components/common/screen'
import CSHeader from '../../components/common/header'
import styled from '@emotion/native'
import { WithLocalSvg } from 'react-native-svg'
import { colors, icons } from '../../App/config/globalStyle'
import { Text, View } from 'react-native'

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
      <View>
        <Text>유실물 상세보기 </Text>
      </View>
    </CSScreen>
  )
}

export default LostFoundMainScreen

const Icon = styled(WithLocalSvg)`
  width: 24;
  height: 24;
  color: ${colors.black};
`

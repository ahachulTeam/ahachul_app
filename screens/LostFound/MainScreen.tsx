import React from 'react'
import CSScreen from '../../components/common/screen'
import CSHeader from '../../components/common/header'
<<<<<<< HEAD
import MenuIcon from '../../App/assets/svg/ic_menu.svg'
import BellIcon from '../../App/assets/svg/ic_bell.svg'
import { colors } from '../../App/config/globalStyle'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { MainStackScreenList } from '../../lib/types/navigations'
=======
import styled from '@emotion/native'
import { WithLocalSvg } from 'react-native-svg'
import { colors, icons } from '../../App/config/globalStyle'
import CustomSwitch from '../../components/LostFound/CustomSwitch'
import LostPostList from './LostPostList'
import Navbar from '../../components/LostFound/Navbar'
import LostFoundComplete from '../../components/LostFound/LostFoundComplete'
>>>>>>> cb8c55641c3ea2a28ca15e7570111ddc6db046a4


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
<<<<<<< HEAD
=======
      {/*  습득물 조회 / 분실물 찾기 */}
      <SwitchButtonWrapper>
        <SwitchButton>
          <CustomSwitch
            selectionMode={1}
            option1={'습득물 조회'}
            option2={'분실물 찾기'}
            selectionColor={'blue'}
          />
        </SwitchButton>
      </SwitchButtonWrapper>

      {/* 정렬버튼? / 정렬 / 호선 / 출처 */}
      <ToggleButtonWrapper>
        <ToggleButton>
          <GridIcon asset={icons.GridIcon} />
          <Navbar text="정렬" />
          <Navbar text="호선" />
          <Navbar text="출처" />
        </ToggleButton>

        {/* 찾이 완료 제외 버튼 */}
        <LostFoundComplete />
      </ToggleButtonWrapper>

      {/* 유실물 리스트 보여주기 */}
      {lostPosts && <LostPostList posts={lostPosts} />}
>>>>>>> cb8c55641c3ea2a28ca15e7570111ddc6db046a4
    </CSScreen>
  )
}

export default LostFoundMainScreen
<<<<<<< HEAD
=======

const Icon = styled(WithLocalSvg)`
  width: 24;
  height: 24;
  color: ${colors.black};
`
const GridIcon = styled(WithLocalSvg)`
  width: 17;
  height: 13;
  color: ${colors.ColorBEBEBE};
`
const SwitchButtonWrapper = styled.View`
  align-items: center;
`

const SwitchButton = styled.View`
  align-items: center;
  margin: 20px;
`

const ToggleButtonWrapper = styled.View`
  display: flex;
  flex-direction: column;
  flex: 1;
  /* height: 231; */
  flex: none;
  order: 0;
  flex-grow: 0;
`

const ToggleButton = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: 37px;
  /* background: red; */
`
const LostFoundWrapper = styled.View`
  position: absolute;
  height: 29px;
  background: blue;
`
>>>>>>> cb8c55641c3ea2a28ca15e7570111ddc6db046a4

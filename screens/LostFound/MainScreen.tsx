import React from 'react'
import CSScreen from '../../components/common/screen'
import CSHeader from '../../components/common/header'
import styled from '@emotion/native'
import { WithLocalSvg } from 'react-native-svg'
import { colors, icons } from '../../App/config/globalStyle'
import CustomSwitch from '../../components/LostFound/CustomSwitch'
import LostPostList from './LostPostList'
import Navbar from '../../components/LostFound/Navbar'
import LostFoundComplete from '../../components/LostFound/LostFoundComplete'

const lostPosts = [
  {
    id: 1,
    title: '검정색 루이비통 지갑 발견했어요',
    content:
      '방금 4호선 당고개행에서 검정색 루이비통 지갑을 발견했어요. 제가 보관하고 있으니 쪽지 주세요.',
    writer: 'seilylook',
    createdBy: '1',
    date: '2023/05/14',
    subwayLine: 4,
    chats: 2,
    imgUrl: '',
    status: 'PROGRESS',
  },
  {
    id: 2,
    title: '에어팟 맥스 발견함',
    content: '방금 2호선 강남역에서 에어팟 맥스를 발견함. 쪽지 주셈.',
    writer: 'kim',
    createdBy: '2',
    date: '2023/05/11',
    subwayLine: 2,
    chats: 9,
    imgUrl: '',
    status: 'COMPLETE',
  },
  {
    id: 3,
    title: '검정색 루이비통 지갑 발견했어요',
    content:
      '방금 4호선 당고개행에서 검정색 루이비통 지갑을 발견했어요. 제가 보관하고 있으니 쪽지 주세요.',
    writer: 'seilylook',
    createdBy: '1',
    date: '2023/05/14',
    subwayLine: 4,
    chats: 2,
    imgUrl: '',
    status: 'PROGRESS',
  },
  {
    id: 4,
    title: '에어팟 맥스 발견함',
    content: '방금 2호선 강남역에서 에어팟 맥스를 발견함. 쪽지 주셈.',
    writer: 'kim',
    createdBy: '2',
    date: '2023/05/11',
    subwayLine: 2,
    chats: 9,
    imgUrl: '',
    status: 'COMPLETE',
  },
  {
    id: 5,
    title: '검정색 루이비통 지갑 발견했어요',
    content:
      '방금 4호선 당고개행에서 검정색 루이비통 지갑을 발견했어요. 제가 보관하고 있으니 쪽지 주세요.',
    writer: 'seilylook',
    createdBy: '1',
    date: '2023/05/14',
    subwayLine: 4,
    chats: 2,
    imgUrl: '',
    status: 'PROGRESS',
  },
  {
    id: 6,
    title: '에어팟 맥스 발견함',
    content: '방금 2호선 강남역에서 에어팟 맥스를 발견함. 쪽지 주셈.',
    writer: 'kim',
    createdBy: '2',
    date: '2023/05/11',
    subwayLine: 2,
    chats: 9,
    imgUrl: '',
    status: 'COMPLETE',
  },
]

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
    </CSScreen>
  )
}

export default LostFoundMainScreen

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

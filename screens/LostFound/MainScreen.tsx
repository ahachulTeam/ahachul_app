import React from 'react'
import CSScreen from '../../components/common/screen'
import CSHeader from '../../components/common/header'
import styled from '@emotion/native'
import { WithLocalSvg } from 'react-native-svg'
import { colors, icons } from '../../App/config/globalStyle'
import { View, Text, StyleSheet, Image } from 'react-native'
import LostPostList from './LostPostList'
import Navbar from './Navbar'

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
    </CSScreen>
  )
}

export default LostFoundMainScreen

const Icon = styled(WithLocalSvg)`
  width: 24;
  height: 24;
  color: ${colors.black};
`

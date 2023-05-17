import React, { useCallback, useState } from 'react'
import CSScreen from '../../components/common/screen'
import CSHeader from '../../components/common/header'
import CSButton from '../../components/common/button'
import styled from '@emotion/native'
import { WithLocalSvg } from 'react-native-svg'
import { colors, icons } from '../../App/config/globalStyle'
import CustomSwitch from './CustomSwitch'
import { View, Text, StyleSheet, Image } from 'react-native'
import LostPostList from './LostPostList'
import CSText from '../../components/common/text'

const LostFoundMainScreen = () => {
  const handleMenuClick = () => {}
  const handleAlarmClick = () => {}
  const [sortSelected, setSortSelected] = useState(false)
  const [lineSelected, setLineSelected] = useState(false)
  const [sourceSelected, setSourceSelected] = useState(false)

  const [lostPosts, setLostPosts] = useState([
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
  ])

  const onClickSortCategory = useCallback(() => {
    setSortSelected(e => !e)
  }, [setSortSelected])

  const onClickLineCategory = useCallback(() => {
    setLineSelected(e => !e)
  }, [setLineSelected])

  const onClickSourceCategory = useCallback(() => {
    setSourceSelected(e => !e)
  }, [setSourceSelected])

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
      <View style={{ alignItems: 'center' }}>
        <View style={{ alignItems: 'center', margin: 20 }}>
          <CustomSwitch
            selectionMode={1}
            roundCorner={40}
            option1={'습득물 조회'}
            option2={'분실물 찾기'}
            selectionColor={'blue'}
          />
        </View>
      </View>

      {/* 정렬버튼? / 정렬 / 호선 / 출처 */}
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
          <Icon asset={icons.GridIcon} />
          {!sortSelected ? (
            <CSButton
              borderRadius={40}
              style={{ width: 80, flexDirection: 'row', height: 29 }}
              bgColor="#D0EEFF"
              onPress={onClickSortCategory}>
              <CSText style={{ marginRight: 10, color: `${colors.blue}` }}>
                정렬
              </CSText>
              <BlueArrowIcon asset={icons.ArrowDownIcon} />
            </CSButton>
          ) : (
            <CSButton
              borderRadius={40}
              style={{ width: 80, flexDirection: 'row', height: 29 }}
              bgColor="#EEEEEE"
              onPress={onClickSortCategory}>
              <CSText
                style={{ marginRight: 10, color: `${colors.Color8C8C8C}` }}>
                정렬
              </CSText>
              <GrayArrowIcon asset={icons.ArrowDownIcon} />
            </CSButton>
          )}
          {!lineSelected ? (
            <CSButton
              borderRadius={40}
              style={{ width: 80, flexDirection: 'row', height: 29 }}
              bgColor="#D0EEFF"
              onPress={onClickLineCategory}>
              <CSText style={{ marginRight: 10, color: `${colors.blue}` }}>
                호선
              </CSText>
              <BlueArrowIcon asset={icons.ArrowDownIcon} />
            </CSButton>
          ) : (
            <CSButton
              borderRadius={40}
              style={{ width: 80, flexDirection: 'row', height: 29 }}
              bgColor="#EEEEEE"
              onPress={onClickLineCategory}>
              <CSText
                style={{ marginRight: 10, color: `${colors.Color8C8C8C}` }}>
                호선
              </CSText>
              <GrayArrowIcon asset={icons.ArrowDownIcon} />
            </CSButton>
          )}
          {!sourceSelected ? (
            <CSButton
              borderRadius={40}
              style={{ width: 80, flexDirection: 'row', height: 29 }}
              bgColor="#D0EEFF"
              onPress={onClickSourceCategory}>
              <CSText style={{ marginRight: 10, color: `${colors.blue}` }}>
                출처
              </CSText>
              <BlueArrowIcon asset={icons.ArrowDownIcon} />
            </CSButton>
          ) : (
            <CSButton
              borderRadius={40}
              style={{ width: 80, flexDirection: 'row', height: 29 }}
              bgColor="#EEEEEE"
              onPress={onClickSourceCategory}>
              <CSText
                style={{ marginRight: 10, color: `${colors.Color8C8C8C}` }}>
                출처
              </CSText>
              <GrayArrowIcon asset={icons.ArrowDownIcon} />
            </CSButton>
          )}
        </View>
        {/* 유실물 리스트 보여주기 */}
        {lostPosts && <LostPostList posts={lostPosts} />}
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

const BlueArrowIcon = styled(WithLocalSvg)`
  color: ${colors.blue};
`

const GrayArrowIcon = styled(WithLocalSvg)`
  color: ${colors.Color8C8C8C};
`

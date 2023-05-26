import styled from '@emotion/native'
import React, { useState } from 'react'
import { colors, screenWidth } from '../../App/config/globalStyle'
import CSText from '../common/text'
import CSButton from '../common/button'
import useBottomSheet from '../../lib/hooks/useBottomSheet'
import { ScrollView } from 'react-native'
import LostFoundSelectedLineItem from '../LostFound/SelectedLineItem'

const subwayLine1 = [
  { id: 1, title: '1호선' },
  { id: 2, title: '2호선' },
  { id: 3, title: '3호선' },
  { id: 4, title: '4호선' },
  { id: 5, title: '5호선' },
  { id: 6, title: '6호선' },
  { id: 7, title: '7호선' },
  { id: 8, title: '8호선' },
  { id: 9, title: '9호선' },
  { id: 10, title: '공항' },
  { id: 11, title: '경의중앙' },
  { id: 12, title: '경춘' },
]

const subwayLine2 = [
  { id: 13, title: '수인분당' },
  { id: 14, title: '신분당' },
  { id: 15, title: '경강' },
  { id: 16, title: '서혜' },
  { id: 17, title: '인천 1호선' },
  { id: 18, title: '인천 2호선' },
  { id: 19, title: '에버라인' },
  { id: 20, title: '의정부' },
  { id: 21, title: '우이신설' },
  { id: 22, title: '김포골드' },
  { id: 23, title: '신림' },
]

const SelectLineBottomSheet = ({
  type,
  value,
  handleChange,
}: {
  type: string
  value: string
  handleChange: (value: string) => void
}) => {
  const { hideBottomSheet } = useBottomSheet()
  const [selectedSubwayLine, setSelectedSubwayLine] = useState<{
    id: number
    title: string
  }>({
    id: 0,
    title: value,
  })
  const [currentPage, setCurrentPage] = useState<number>(0)

  const handleScroll = (event: any) => {
    const offsetX = event.nativeEvent.contentOffset.x
    const page = Math.floor(offsetX / (screenWidth - 20))
    setCurrentPage(page)
  }

  const handleNextPage = () => {
    hideBottomSheet()
    selectedSubwayLine.id !== 0 && handleChange(selectedSubwayLine.title)
  }

  return (
    <Container>
      <TitleView>
        <CSText size={16} weight="700">
          {type} 호선
        </CSText>
        <CSText size={20} weight="300" color={colors.blue}>
          어디서 {type}하셨나요?
        </CSText>
      </TitleView>

      <ScrollView
        horizontal
        pagingEnabled
        onScroll={handleScroll}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}>
        {[subwayLine1, subwayLine2].map(data => {
          return (
            <LostFoundItemRow width={screenWidth}>
              {data.map((item, index) => {
                return (
                  <LostFoundSelectedLineItem
                    item={item}
                    ml={index % 3 !== 0}
                    value={selectedSubwayLine.title}
                    handleChange={setSelectedSubwayLine}
                  />
                )
              })}
            </LostFoundItemRow>
          )
        })}
      </ScrollView>

      <Indicator>
        {currentPage === 0 ? <Activate /> : <Disabled />}
        {currentPage === 1 ? <Activate /> : <Disabled />}
      </Indicator>

      <ButtonContainer>
        <CSButton
          bgColor={colors.blue}
          textWeight={'500'}
          textSize={14}
          text={'선택하기'}
          height={44}
          borderRadius={70}
          onPress={handleNextPage}
        />
      </ButtonContainer>
    </Container>
  )
}

const Container = styled.View`
  flex: 1;
  padding: 17px 0px 24px 0px;
`

const TitleView = styled.View`
  height: 64px;
  margin-bottom: 20px;

  align-items: center;
  justify-content: space-between;
`

const LostFoundItemRow = styled.View<{ width: number }>`
  width: ${({ width }) => `${width}px`};
  padding: 0px 16px;
  flex-direction: row;
  flex-wrap: wrap;
`

const Indicator = styled.View`
  width: 43px;
  margin: auto;
  margin-top: 5px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const Activate = styled.View`
  width: 23px;
  height: 12px;
  border-radius: 37px;
  background-color: ${colors.blue};
`

const Disabled = styled.View`
  width: 12px;
  height: 12px;
  border-radius: 50px;
  background-color: ${colors.ColorD9D9D9};
`

const ButtonContainer = styled.View`
  margin: 48px 15px 0px 15px;
`

export default SelectLineBottomSheet

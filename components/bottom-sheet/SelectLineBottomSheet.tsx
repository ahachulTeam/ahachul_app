import styled from '@emotion/native'
import React, { useState } from 'react'
import { colors } from '../../App/config/globalStyle'
import CSText from '../common/text'
import CSButton from '../common/button'
import useBottomSheet from '../../lib/hooks/useBottomSheet'
import LostFoundItemRow from '../LostFound/ItemRow'

const SelectLineBottomSheet = ({
  value,
  handleChange,
}: {
  value: string
  handleChange: (value: string) => void
}) => {
  const [select, setSelect] = useState<string>(value)
  const data = [
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
  const { hideBottomSheet } = useBottomSheet()

  const handleNextPage = () => {
    hideBottomSheet()
    select !== '' && handleChange(select)
  }

  return (
    <Container>
      <TitleView>
        <CSText size={16} weight="700">
          습득 호선
        </CSText>
        <CSText size={20} weight="300" color={colors.blue}>
          어디서 습득하셨나요?
        </CSText>
      </TitleView>

      <Body
        data={data}
        numColumns={3}
        columnWrapperStyle={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
        keyExtractor={(_, index) => `line${index}`}
        renderItem={({ item }: { item: any }) => (
          <LostFoundItemRow
            item={item}
            value={select}
            handleChange={setSelect}
          />
        )}
      />

      <CSButton
        bgColor={colors.blue}
        textWeight={'500'}
        textSize={14}
        text={'선택하기'}
        height={44}
        borderRadius={70}
        onPress={handleNextPage}
      />
    </Container>
  )
}

const Container = styled.View`
  padding: 17px 16px 24px 16px;
`

const TitleView = styled.View`
  height: 64px;
  margin-bottom: 20px;

  align-items: center;
  justify-content: space-between;
`
const Body = styled.FlatList``

export default SelectLineBottomSheet

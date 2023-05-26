import React from 'react'
import styled from '@emotion/native'
import CSText from '../common/text'
import { colors } from '../../App/config/globalStyle'

interface Props {
  ml: boolean
  item: { id: number; title: string }
  value: string
  handleChange: (value: { id: number; title: string }) => void
}

const LostFoundSelectedLineItem = ({
  item,
  ml,
  value,
  handleChange,
}: Props) => {
  const activity = value === item.title
  return (
    <Container
      ml={ml}
      onPress={() => handleChange(item)}
      bgColorActivity={activity}>
      <MainText size={14} weight="400" textColorActivity={activity}>
        {item.title}
      </MainText>
    </Container>
  )
}

export default LostFoundSelectedLineItem

const Container = styled.TouchableOpacity<{
  bgColorActivity?: boolean
  ml?: boolean
}>`
  width: 109px;
  height: 32px;
  margin-bottom: 15px;
  margin-left: ${({ ml }) => `${ml ? 15 : 0}px`};

  align-items: center;
  justify-content: center;
  border-radius: 20px;

  background-color: ${({ bgColorActivity }) =>
    bgColorActivity ? colors.blue : colors.ColorF7F7F7};
`

const MainText = styled(CSText)<{ textColorActivity?: boolean }>`
  color: ${({ textColorActivity }) =>
    textColorActivity ? colors.white : colors.ColorA1A1A1};
`

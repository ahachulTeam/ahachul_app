import React from 'react'
import styled from '@emotion/native'
import CSText from '../common/text'
import { colors } from '../../App/config/globalStyle'

const LostFoundItemRow = ({
  item,
  value,
  handleChange,
}: {
  item: { [key: string]: any }
  value: string
  handleChange: (value: string) => void
}) => {
  return (
    <Container
      onPress={() => handleChange(item.title)}
      style={{
        backgroundColor:
          value === item.title ? colors.blue : colors.ColorF7F7F7,
      }}>
      <CSText
        size={14}
        weight="400"
        color={value === item.title ? colors.white : colors.ColorA1A1A1}>
        {item.title}
      </CSText>
    </Container>
  )
}

export default LostFoundItemRow

const Container = styled.TouchableOpacity`
  width: 109px;
  height: 32px;
  margin-bottom: 15px;

  align-items: center;
  justify-content: center;

  border-radius: 20px;
`

import React from 'react'
import { TextInputProps } from 'react-native'
import { colors } from '../../../App/config/globalStyle'
import CSTextInput from '../textInput'
import styled from '@emotion/native'

type Props = {
  mb: number
  value: string
  placeholder?: string
  onChangeText: (text: string) => void
  maximumInput?: number
  style?: object
}

const CSTextArea = ({
  mb = 0,
  value,
  placeholder,
  onChangeText,
  maximumInput = 100,
  style,
  ...props
}: Props & TextInputProps) => {
  return (
    <Container mb={mb} style={style}>
      <CSTextInput
        color={colors.black}
        placeholder={placeholder}
        placeholderTextColor={colors.ColorBCBCBC}
        value={value}
        onChangeText={onChangeText}
        multiline={true}
        maxLength={maximumInput}
        style={{ textAlignVertical: 'top' }}
        {...props}
      />
    </Container>
  )
}

export default CSTextArea

const Container = styled.View<{ mb: number }>`
  width: 100%;
  height: 161px;
  padding: 8px 15px 8px 25px;
  margin-bottom: ${({ mb }) => `${mb}px`};

  border-radius: 20px;
  border-width: 1px;
  border-color: ${colors.ColorE6E6E6};
`

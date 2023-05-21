import React, { ReactNode } from 'react'
import { KeyboardTypeOptions } from 'react-native'
import { colors } from '../../App/config/globalStyle'
import CSTextInput from '../common/textInput'
import styled from '@emotion/native'

type Props = {
  mb?: number
  placeholder?: string
  value: string
  onChangeText: (text: string) => void
  style?: object
  right?: ReactNode
  keyboardType?: KeyboardTypeOptions
  maxLength?: number
}

const LostFoundWriteInput = ({
  mb = 0,
  placeholder,
  value,
  onChangeText,
  style,
  right,
  keyboardType = 'default',
  maxLength,
  ...props
}: Props) => {
  return (
    <TextInputView mb={mb}>
      <CSTextInput
        color={colors.black}
        placeholder={placeholder}
        placeholderTextColor={colors.ColorBCBCBC}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        maxLength={maxLength}
        {...props}
      />
      {right && right}
    </TextInputView>
  )
}

export default LostFoundWriteInput

const TextInputView = styled.View<{ mb: number }>`
  width: 100%;
  height: 44px;
  padding: 8px 15px 8px 25px;
  margin-bottom: ${({ mb }) => `${mb}px`};

  border-radius: 110px;
  border-width: 1px;
  border-color: ${colors.ColorE6E6E6};
`

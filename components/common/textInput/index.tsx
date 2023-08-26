import React from 'react'
import { KeyboardTypeOptions, TextInputProps } from 'react-native'
import { colors, fonts } from '../../../App/config/globalStyle'
import styled from '@emotion/native'

interface Props {
  size?: number
  weight?: string
  color?: string
  lineHeight?: number
  letterSpacing?: number
  style?: object
  flex?: number
  keyboardType?: KeyboardTypeOptions
  multiline?: boolean
}

const CSTextInput = ({
  size = 15,
  weight = '400',
  color = colors.black,
  lineHeight = 0,
  letterSpacing = 0,
  placeholder,
  placeholderTextColor = colors.gray30,
  flex = 1,
  style,
  onFocus,
  multiline = false,
  keyboardType,
  ...props
}: Props & TextInputProps) => {
  const fontFamily: { [key: string]: string } = {
    '400': fonts.Pretendard_Regular,
    '500': fonts.Pretendard_Medium,
    '600': fonts.Pretendard_Bold,
    '800': fonts.Pretendard_SemiBold,
  }

  return (
    <TextInputView
      size={size}
      fontFamily={fontFamily[weight]}
      color={color}
      letterSpacing={letterSpacing}
      lineHeight={lineHeight}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      selectionColor={color}
      style={style}
      autoCorrect={false}
      autoCapitalize={'none'}
      onFocus={onFocus}
      keyboardType={keyboardType}
      multiline={multiline}
      {...props}
    />
  )
}

export default CSTextInput

const TextInputView = styled.TextInput<{
  size: number
  fontFamily: string
  color: string
  letterSpacing?: number
  lineHeight?: number
}>`
  flex: 1;
  font-size: ${({ size }) => `${size}px`};
  font-family: ${({ fontFamily }) => `${fontFamily}`};
  color: ${({ color }) => `${color}`};
  letter-spacing: ${({ letterSpacing }) => `${letterSpacing}px`};
  line-height: ${({ lineHeight }) => `${lineHeight}px`};
  padding: 0;
  padding-top: 0;
`

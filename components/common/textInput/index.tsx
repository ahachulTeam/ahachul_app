import React from 'react'
import {
  KeyboardTypeOptions,
  StyleSheet,
  TextInput,
  TextInputProps,
} from 'react-native'
import { colors, fonts } from '../../../App/config/globalStyle'

type Props = {
  size?: number
  weight?: string
  color?: string
  lineHeight?: number | null
  letterSpacing?: number
  style?: object
  inputRef?: React.LegacyRef<TextInput> | undefined
  flex?: number
  keyboardType?: KeyboardTypeOptions
  multiline?: boolean
}

const CSTextInput = ({
  size = 15,
  weight = 'regular',
  color = colors.black,
  lineHeight,
  letterSpacing = -20,
  placeholder,
  placeholderTextColor = colors.gray30,
  inputRef,
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
    <TextInput
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      selectionColor={color}
      style={[
        {
          flex: 1,
          fontSize: size,
          fontFamily: fontFamily[weight],
          color: color,
        },
        styles.textInput,
        style,
      ]}
      ref={inputRef}
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

const styles = StyleSheet.create({
  textInput: {
    includeFontPadding: false, // Android
    padding: 0, // Android
    paddingTop: 0, // iOS
  },
})

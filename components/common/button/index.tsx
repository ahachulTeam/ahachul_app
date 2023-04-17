import React from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native'
import CSText from '../text'
import { colors } from '../../../App/config/globalStyle'

type Props = {
  text?: string
  textSize?: number
  textWeight?: '300' | '400' | '500' | '600' | '700' | '800'
  textColor?: string
  bgColor?: string
  height?: number
  style?: object
  disabledStyle?: object | null
  borderRadius?: number
}

const CSButton = ({
  text,
  textSize = 15,
  textWeight = '700',
  textColor = colors.white,
  bgColor = colors.blue,
  onPress,
  height = 48,
  disabled = false,
  disabledStyle = styles.disabled,
  style,
  borderRadius = 0,
  children,
  ...props
}: Props & TouchableOpacityProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[
        styles.container,
        {
          backgroundColor: bgColor,
          height: height,
          borderRadius: borderRadius,
        },
        disabled && disabledStyle,
        style && style,
      ]}
      disabled={disabled}
      {...props}>
      {text && (
        <CSText
          size={textSize}
          weight={textWeight}
          color={disabled ? textColor : textColor}>
          {text}
        </CSText>
      )}
      {children}
    </TouchableOpacity>
  )
}

export default CSButton

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabled: {
    backgroundColor: colors.gray20,
  },
})

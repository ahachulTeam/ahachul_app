import React, { ReactNode } from 'react'
import { Text, TextProps } from 'react-native'
import { colors, fonts } from '../../../App/config/globalStyle'

type Props = {
  size?: number
  weight?: '300' | '400' | '500' | '600' | '700' | '800'
  color?: string
  lineHeight?: number
  letterSpacing?: number
  style?: object
  children: ReactNode
}

const CSText = ({
  size = 15,
  weight = '500',
  color = colors.black,
  lineHeight = 0,
  letterSpacing = 0,
  style,
  children,
  ...props
}: Props & TextProps) => {
  const fontFamily: { [key: string]: string } = {
    '300': fonts.Pretendard_Regular,
    '400': fonts.Pretendard_Regular,
    '500': fonts.Pretendard_Medium,
    '600': fonts.Pretendard_Bold,
    '700': fonts.Pretendard_Bold,
    '800': fonts.Pretendard_SemiBold,
  }
  return (
    <Text
      style={[
        {
          fontSize: size,
          fontFamily: fontFamily[weight],
          color: color,
          letterSpacing: letterSpacing,
          lineHeight: lineHeight,
        },
        style,
      ]}
      {...props}>
      {children && children}
    </Text>
  )
}

export default CSText

import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import CSText from '../text'
import { colors } from '../../../App/config/globalStyle'
import styled from '@emotion/native'

interface Props {
  text?: string
  textSize?: number
  textWeight?: '300' | '400' | '500' | '600' | '700' | '800'
  textColor?: string
  bgColor?: string
  height?: number
  style?: object
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
  style,
  borderRadius = 0,
  children,
  ...props
}: Props & TouchableOpacityProps) => {
  return (
    <Container
      activeOpacity={0.7}
      onPress={onPress}
      bgColor={bgColor}
      height={height}
      borderRadius={borderRadius}
      disabled={disabled}
      style={style}
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
    </Container>
  )
}

export default CSButton

const Container = styled.TouchableOpacity<{
  bgColor?: string
  height?: number
  borderRadius?: number
  disabledStyle?: boolean
}>`
  background-color: ${({ bgColor, disabled }) =>
    disabled ? `${colors.gray20}` : `${bgColor}`};
  height: ${({ height }) => `${height}px`};
  border-radius: ${({ borderRadius }) => `${borderRadius}px`};

  align-items: center;
  justify-content: center;
`

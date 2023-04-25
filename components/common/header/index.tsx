import React, { ReactNode } from 'react'
import { TouchableOpacity, View } from 'react-native'
import CSText from '../text'
import { colors } from '../../../App/config/globalStyle'
import styled from '@emotion/native'

type Props = {
  leftIcon?: ReactNode
  leftIconPress?: () => void
  title?: string
  rightIcon?: ReactNode
  rightIconPress?: () => void
  border?: boolean
}

const CSHeader = ({
  leftIcon,
  leftIconPress,
  title,
  rightIcon,
  rightIconPress,
  border = false,
}: Props) => {
  return (
    <Container border={border}>
      {leftIcon && (
        <Icon
          activeOpacity={0.7}
          left={true}
          onPress={leftIconPress}
          disabled={!leftIconPress}>
          {leftIcon}
        </Icon>
      )}

      {title && (
        <TextView>
          <TitleText
            size={20}
            weight={'600'}
            numberOfLines={1}
            ellipsizeMode={'tail'}>
            {title}
          </TitleText>
        </TextView>
      )}

      {rightIcon && (
        <Icon
          left={false}
          activeOpacity={1}
          onPress={rightIconPress}
          disabled={!rightIconPress}>
          {rightIcon}
        </Icon>
      )}
    </Container>
  )
}

export default CSHeader

const Container = styled(View)<{ border: boolean }>`
  background-color: ${colors.white};
  flex-direction: row;
  height: 46px;
  align-items: center;

  border-bottom-width: ${({ border }) => `${border ? 1 : 0}px`};
  border-color: ${colors.ColorE7E7E7};
`
const TextView = styled(View)`
  flex: 1;
  margin: 0px 16px;
`

const TitleText = styled(CSText)`
  text-align: center;
`

const Icon = styled(TouchableOpacity)<{ left: boolean }>`
  position: absolute;
  align-self: center;
  align-items: center;
  justify-content: center;
  z-index: 1;

  padding-left: ${({ left }) => `${left ? 16 : 0}px`};
  padding-right: ${({ left }) => `${left ? 0 : 16}px`};
  right: ${({ left }) => `${left ? null : 0}`};
`

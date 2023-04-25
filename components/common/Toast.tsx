import styled from '@emotion/native'
import React from 'react'
import CSText from './text'
import { colors, icons } from '../../App/config/globalStyle'
import { WithLocalSvg } from 'react-native-svg'

interface ToastProps {
  text1?: string
  isIconMode?: boolean
}

const CSToast = ({ text1, isIconMode = true }: ToastProps) => {
  return (
    <Wrapper>
      {isIconMode && (
        <WithLocalSvg width={24} height={24} asset={icons.NotificationIcon} />
      )}
      <ToastText>{text1}</ToastText>
    </Wrapper>
  )
}

const Wrapper = styled.View`
  width: 90%;
  height: 61px;

  flex-direction: row;
  align-items: center;

  background-color: #d0eeff;

  border-radius: 20px;
`

const ToastText = styled(CSText)`
  font-size: 16px;
  color: ${colors.blue};

  padding: 0px 29px;
`

export default CSToast

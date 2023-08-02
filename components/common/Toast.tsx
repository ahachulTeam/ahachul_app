import styled from '@emotion/native'
import React from 'react'
import NotificationIcon from '../../App/assets/svg/ic_notification.svg'
import { colors } from '../../App/config/globalStyle'
import CSText from './text'

interface ToastProps {
  text1?: string
  isIconMode?: boolean
}

const CSToast = ({ text1, isIconMode = true }: ToastProps) => {
  return (
    <Wrapper>
      {isIconMode && <NotificationIcon width={24} height={24} />}
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

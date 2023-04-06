import styled from '@emotion/native'
import React from 'react'
import CSText from './text'

interface ToastProps {
  text1?: string
  isIconMode?: boolean
}

const CSToast = ({ text1, isIconMode = true }: ToastProps) => {
  return (
    <Wrapper>
      {/* 
        // TODO: Fontello 프로젝트에 적용되면 아이콘 넣을 예정
        {isIconMode && <AhIcon size={24} />} 
        */}
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
  color: #00baf6;

  padding: 0px 29px;
`

export default CSToast

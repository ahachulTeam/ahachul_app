import styled from '@emotion/native'
import React from 'react'
import CSText from './text'

type Props = {
  bgcolor?: string
  text: string
}

const CSLabelHot = ({ bgcolor, text }: Props) => {
  return (
    <Wrapper style={{ backgroundColor: bgcolor }}>
      <CSText>{`${text} HOT`}</CSText>
    </Wrapper>
  )
}

const Wrapper = styled.View`
  padding: 2px 8px;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
`

export default CSLabelHot

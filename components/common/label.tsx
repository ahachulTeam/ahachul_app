import styled from '@emotion/native'
import React from 'react'
import CSText from './text'

interface Props {
  bgcolor?: string
  text: string
  circle?: boolean
}

const CSLabel = ({ bgcolor, text, circle = false }: Props) => {
  return circle ? (
    <Container style={{ backgroundColor: bgcolor }}>
      <CSText size={14} weight={'400'}>
        {text}
      </CSText>
    </Container>
  ) : (
    <Wrapper style={{ backgroundColor: bgcolor }}>
      <CSText size={14} weight={'400'}>
        {text}
      </CSText>
    </Wrapper>
  )
}
const Container = styled.View`
  width: 24px;
  height: 24px;
  border-radius: 500px;
  justify-content: center;
  align-items: center;
`
const Wrapper = styled.View`
  padding: 4px 10px;
  justify-content: center;
  align-items: center;
  border-radius: 120px;
`

export default CSLabel

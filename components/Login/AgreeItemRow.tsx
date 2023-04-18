import styled from '@emotion/native'
import React from 'react'
import { colors } from '../../App/config/globalStyle'
import CSText from '../common/text'
import AhIcon from '../../App/config/Icon-font'

interface AgreeItemRowProps {
  mb?: number
  text: string
  value: boolean
  textStyle?: object
  handleAgreeCheck: () => void
  handleArrowClick: () => void
}

const AgreeItemRow = ({
  mb = 0,
  text,
  value,
  handleAgreeCheck,
  handleArrowClick,
}: AgreeItemRowProps) => {
  return (
    <Wrapper mb={mb}>
      <CheckView onPress={handleAgreeCheck}>
        <AhIcon
          size={20}
          name={'ic_check'}
          color={value ? colors.blue : colors.ColorDFDFDF}
        />
        <CSText
          size={14}
          weight="400"
          color={colors.Color8C8C8C}
          style={{ marginLeft: 18 }}>
          {text}
        </CSText>
      </CheckView>
      <IconView onPress={handleArrowClick}>
        <AhIcon size={20} name={'ic_arrow'} color={colors.ColorBCBCBC} />
      </IconView>
    </Wrapper>
  )
}

const Wrapper = styled.View<{ mb: number }>`
  flex-direction: row;
  margin-bottom: ${({ mb }) => `${mb}px`};
`

const CheckView = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
`

const IconView = styled.TouchableOpacity`
  margin-left: 20px;
  transform: rotate(180deg);
`

export default AgreeItemRow

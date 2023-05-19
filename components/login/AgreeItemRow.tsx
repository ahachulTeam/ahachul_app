import styled from '@emotion/native'
import React from 'react'
import ArrowDownIcon from '../../App/assets/svg/ic_arrow_down.svg'
import CheckIcon from '../../App/assets/svg/ic_check.svg'
import { colors } from '../../App/config/globalStyle'
import CSText from '../common/text'

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
        <CheckIcon
          width={16}
          height={16}
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
        <ArrowDownIcon width={10} height={10} color={colors.ColorBCBCBC} />
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
  transform: rotate(270deg);
`

export default AgreeItemRow

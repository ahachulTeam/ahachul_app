import styled from '@emotion/native'
import React from 'react'
import { colors, icons } from '../../App/config/globalStyle'
import CSText from '../common/text'
import { WithLocalSvg } from 'react-native-svg'

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
        <Icon
          size={16}
          asset={icons.CheckIcon}
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
        <Icon
          size={10}
          asset={icons.ArrowDownIcon}
          color={colors.ColorBCBCBC}
        />
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
const Icon = styled(WithLocalSvg)<{ size: number }>`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
`

export default AgreeItemRow

import React, { useState } from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native'
import { colors } from '../../App/config/globalStyle'
import styled from '@emotion/native'

interface Props {
  text?: string
  textSize?: number
  textWeight?: '300' | '400' | '500' | '600' | '700' | '800'
  textColor?: string
  bgColor?: string
  height?: number
  style?: object
  disabledStyle?: object | null
  borderRadius?: number
  option1?: string
  option2?: string
  selectionMode: number
  selectionColor: string
}

const CustomSwitch = ({
  selectionMode,
  option1,
  option2,
}: Props & TouchableOpacityProps) => {
  const [selected, setSelected] = useState(selectionMode)

  const onClickButton = (val: any | number) => {
    setSelected(val)
  }

  return (
    <View>
      <Container>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => onClickButton(1)}
          style={{
            flex: 1,
            backgroundColor: selected == 1 ? colors.blue : '#EEEEEE',
            borderRadius: 40,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: selected == 1 ? 'white' : colors.ColorBCBCBC,
              fontWeight: '500',
            }}>
            {option1}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={1}
          onPress={() => onClickButton(2)}
          style={{
            flex: 1,
            backgroundColor: selected == 2 ? colors.blue : '#EEEEEE',
            borderRadius: 40,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: selected == 2 ? 'white' : colors.ColorBCBCBC,
              fontWeight: '500',
            }}>
            {option2}
          </Text>
        </TouchableOpacity>
      </Container>
    </View>
  )
}

const Container = styled.View`
  width: 351px;
  height: 36px;
  justify-content: center;
  flex-direction: row;
  background-color: #eeeeee;
  border-radius: 40px;
  border-width: 1px;
  border-color: #eeeeee;
  padding: 2px;
`

export default CustomSwitch

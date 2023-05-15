import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native'
import { colors } from '../../App/config/globalStyle'

type Props = {
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
  roundCorner: number
  selectionColor: string
}

const CustomSwitch = ({
  selectionMode,
  roundCorner,
  option1,
  option2,
}: Props & TouchableOpacityProps) => {
  const [getSelectionMode, setSelectionMode] = useState(selectionMode)
  const [getRoundCorner, setRoundCorner] = useState(roundCorner)

  const updatedSwitchData = (val: any | number) => {
    setSelectionMode(val)
  }

  return (
    <View>
      <View
        style={{
          height: 44,
          width: 215,
          backgroundColor: 'white',
          borderRadius: getRoundCorner ? 25 : 0,
          borderWidth: 1,
          borderColor: colors.blue,
          flexDirection: 'row',
          justifyContent: 'center',
          padding: 2,
        }}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => updatedSwitchData(1)}
          style={{
            flex: 1,

            backgroundColor: getSelectionMode == 1 ? colors.blue : 'white',
            borderRadius: getRoundCorner ? 25 : 0,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: getSelectionMode == 1 ? 'white' : colors.blue,
            }}>
            {option1}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => updatedSwitchData(2)}
          style={{
            flex: 1,

            backgroundColor: getSelectionMode == 2 ? colors.blue : 'white',
            borderRadius: getRoundCorner ? 25 : 0,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: getSelectionMode == 2 ? 'white' : colors.blue,
            }}>
            {option2}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default CustomSwitch

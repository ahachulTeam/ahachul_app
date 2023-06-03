import react, { useState } from 'react'
import { View } from 'react-native'
import styled from '@emotion/native'
import { WithLocalSvg } from 'react-native-svg'
import { colors, icons } from '../../App/config/globalStyle'
import CSButton from '../common/button'
import CSText from '../common/text'

type NavbarProps = {
  text: string
}

const Navbar = ({ text }: NavbarProps) => {
  const [selected, setSelected] = useState(false)
  const onClick = () => {
    setSelected(e => !e)
  }

  return (
    <View>
      {!selected ? (
        <CSButton
          borderRadius={40}
          style={{ width: 80, flexDirection: 'row', height: 29 }}
          bgColor="#D0EEFF"
          onPress={onClick}>
          <CSText style={{ marginRight: 10, color: `${colors.blue}` }}>
            {text}
          </CSText>
          <BlueArrowIcon asset={icons.ArrowDownIcon} />
        </CSButton>
      ) : (
        <CSButton
          borderRadius={40}
          style={{ width: 80, flexDirection: 'row', height: 29 }}
          bgColor="#EEEEEE"
          onPress={onClick}>
          <CSText style={{ marginRight: 10, color: `${colors.Color8C8C8C}` }}>
            {text}
          </CSText>
          <GrayArrowIcon asset={icons.ArrowDownIcon} />
        </CSButton>
      )}
    </View>
  )
}

const BlueArrowIcon = styled(WithLocalSvg)`
  color: ${colors.blue};
`

const GrayArrowIcon = styled(WithLocalSvg)`
  color: ${colors.Color8C8C8C};
`

export default Navbar

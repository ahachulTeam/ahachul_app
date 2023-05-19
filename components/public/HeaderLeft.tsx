import styled from '@emotion/native'
import React from 'react'
import CSButton from '../common/button'
import ArrowBack from '../../App/assets/svg/ic_arrow_back.svg'
import { colors } from '../../App/config/globalStyle'

interface HeaderLeftProps {
  navigation: any
}

const HeaderLeft = ({ navigation }: HeaderLeftProps) => {
  const handlePressBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack()
    } else {
      navigation.replace('TabStack')
    }
  }
  return (
    <BackButton onPress={handlePressBack}>
      <ArrowBack width={24} height={24} color={colors.black} />
    </BackButton>
  )
}

const BackButton = styled(CSButton)`
  margin-left: 15px;
  background-color: transparent;
`

export default HeaderLeft

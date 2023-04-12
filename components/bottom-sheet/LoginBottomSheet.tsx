import styled from '@emotion/native'
import React from 'react'
import { Platform } from 'react-native'
import { colors } from '../../App/config/globalStyle'
import useBottomSheet from '../../lib/hooks/useBottomSheet'
import CSText from '../common/text'

const LoginBottomSheet = () => {
  const { hideBottomSheet } = useBottomSheet()

  const handlePressAppNameLogin = () => {}

  const handlePressKakaoLogin = () => {}

  const handlePressAppleLogin = () => {}

  return (
    <Wrapper>
      <TitleText>로그인</TitleText>

      <ButtonContainer>
        <RoundedButton
          style={{ backgroundColor: colors.blue }}
          onPress={handlePressAppNameLogin}>
          <ButtonText>앱네임 로그인</ButtonText>
        </RoundedButton>

        <RoundedButton
          style={{ backgroundColor: '#fee102' }}
          onPress={handlePressKakaoLogin}>
          <ButtonText style={{ color: colors.black }}>카카오 로그인</ButtonText>
        </RoundedButton>

        {Platform.OS === 'ios' && (
          <RoundedButton
            style={{ backgroundColor: '#000' }}
            onPress={handlePressAppleLogin}>
            <ButtonText>애플 로그인</ButtonText>
          </RoundedButton>
        )}
      </ButtonContainer>

      <LookAroundButton onPress={hideBottomSheet}>
        <LookAroundText>둘러보기</LookAroundText>
      </LookAroundButton>
    </Wrapper>
  )
}

const Wrapper = styled.View`
  padding: 25px 42px;

  flex: 1;
`

const TitleText = styled(CSText)`
  color: ${colors.black};
  font-size: 20px;
  font-weight: 600;

  text-align: center;

  margin-bottom: 20px;
`

const ButtonContainer = styled.View``

const RoundedButton = styled.TouchableOpacity`
  width: 100%;
  max-width: 400px;
  height: 44px;

  align-items: center;
  justify-content: center;

  margin-bottom: 11px;

  border-radius: 30px;
`

const ButtonText = styled(CSText)`
  font-weight: 500;
`

const LookAroundButton = styled.TouchableOpacity`
  align-self: center;

  margin-top: 38px;
  margin-bottom: 20px;
`

const LookAroundText = styled(CSText)`
  color: #c2c2c2;
  text-decoration-line: underline;
`

export default LoginBottomSheet

import styled from '@emotion/native'
import React from 'react'
import GoogleIcon from '../../App/assets/svg/ic_google.svg'
import KakaoIcon from '../../App/assets/svg/ic_kakao.svg'
import { colors } from '../../App/config/globalStyle'
import CSText from '../common/text'

const LoginBottomSheet = () => {
  const handlePressKakaoLogin = () => {}

  const handlePressGoogleLogin = () => {}

  const handleAroundScreen = () => {}

  return (
    <Wrapper>
      <TitleText size={20} weight="600">
        로그인
      </TitleText>

      <RoundedButton
        style={{ backgroundColor: colors.yellow }}
        onPress={handlePressKakaoLogin}>
        <KakaoButtonIcon width={24} height={24} />
        <CSText size={14}>카카오 로그인</CSText>
      </RoundedButton>

      <RoundedButton
        style={{
          backgroundColor: colors.white,
          borderWidth: 1,
        }}
        onPress={handlePressGoogleLogin}>
        <GoogleButtonIcon width={24} height={24} />
        <CSText size={14}>구글 계정으로 로그인</CSText>
      </RoundedButton>

      <LookAroundButton onPress={handleAroundScreen}>
        <LookAroundText color={colors.ColorC2C2C2} weight="400">
          둘러보기
        </LookAroundText>
      </LookAroundButton>
    </Wrapper>
  )
}

const Wrapper = styled.View`
  padding: 25px 42px;
`

const TitleText = styled(CSText)`
  text-align: center;
  margin-bottom: 20px;
`

const RoundedButton = styled.TouchableOpacity`
  height: 44px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 11px;

  border-radius: 30px;
  border-color: ${colors.ColorE9E9E9};
`

const LookAroundButton = styled.TouchableOpacity`
  align-self: center;
  margin: 38px 0px 20px 0px;
`

const KakaoButtonIcon = styled(KakaoIcon)`
  position: absolute;
  left: 12px;
`

const GoogleButtonIcon = styled(GoogleIcon)`
  position: absolute;
  left: 12px;
`

const LookAroundText = styled(CSText)`
  text-decoration-line: underline;
`

export default LoginBottomSheet

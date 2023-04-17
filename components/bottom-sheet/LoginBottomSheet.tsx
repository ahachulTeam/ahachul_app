import styled from '@emotion/native'
import React from 'react'
import { colors, images } from '../../App/config/globalStyle'
import CSText from '../common/text'
import { WithLocalSvg } from 'react-native-svg'

const LoginBottomSheet = () => {
  const handlePressKakaoLogin = () => {}

  const handlePressGoogleLogin = () => {}

  const handleAroundScren = () => {}

  return (
    <Wrapper>
      <TitleText size={20} weight="600">
        로그인
      </TitleText>

      <RoundedButton
        style={{ backgroundColor: colors.yellow }}
        onPress={handlePressKakaoLogin}>
        <ButtonIcon width={24} height={24} asset={images.kakaoIcon} />
        <CSText size={14}>카카오 로그인</CSText>
      </RoundedButton>

      <RoundedButton
        style={{
          backgroundColor: colors.white,
          borderWidth: 1,
        }}
        onPress={handlePressGoogleLogin}>
        <ButtonIcon width={24} height={24} asset={images.googleIcon} />
        <CSText size={14}>구글 계정으로 로그인</CSText>
      </RoundedButton>

      <LookAroundButton onPress={handleAroundScren}>
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

const ButtonIcon = styled(WithLocalSvg)`
  position: absolute;
  left: 12px;
`

const LookAroundText = styled(CSText)`
  text-decoration-line: underline;
`

export default LoginBottomSheet

import styled from '@emotion/native'
import React from 'react'
import { Source } from 'react-native-fast-image'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { colors } from '../App/config/globalStyle'
import LoginBottomSheet from '../components/bottom-sheet/LoginBottomSheet'
import CSText from '../components/common/text'
import OnboardingSection from '../components/onboarding/OnboardingSection'
import useBottomSheet from '../lib/hooks/useBottomSheet'

interface SectionType {
  id: number
  title: string
  body: string
  image: number | Source
}

interface WrapperStyleProps {
  insetTop: number
}

const SECTIONS: SectionType[] = [
  {
    id: 0,
    title: `한 발 빠른\n지하철 소식`,
    body: '알고 싶은 실시간 지하철 정보들을 한 발 빠르게 전해줄게요!',
    image: require('../images/onboarding-girl.png'),
  },
  {
    id: 1,
    title: `쾌적하고 편안한 여정을\n위한 민원 서비스`,
    body: '터치 한 번이면 유저의 의견을 바로 전달할 수 있어요!',
    image: require('../images/onboarding-shiver.png'),
  },
]

const Onboarding = () => {
  const { top: insetTop } = useSafeAreaInsets()
  const { showBottomSheet } = useBottomSheet()

  const handlePressLogin = () => {
    showBottomSheet({ component: <LoginBottomSheet />, height: 326 })
  }

  const handlePressSignUp = () => {}

  const handlePressLookAround = () => {}

  return (
    <Wrapper insetTop={insetTop}>
      <OnboardingCarousel
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled>
        {SECTIONS.map(section => (
          <OnboardingSection
            key={`onboarding-carousel-section-${section.id}`}
            title={section.title}
            body={section.body}
            image={section.image}
          />
        ))}
      </OnboardingCarousel>

      <ButtonContainer>
        <AuthButton onPress={handlePressLogin}>
          <LoginText>로그인</LoginText>
        </AuthButton>
        <GrayDivider />
        <AuthButton onPress={handlePressSignUp}>
          <SingUpText>회원가입</SingUpText>
        </AuthButton>
      </ButtonContainer>

      <LookAroundButton onPress={handlePressLookAround}>
        <LookAroundText>둘러보기</LookAroundText>
      </LookAroundButton>
    </Wrapper>
  )
}

const Wrapper = styled.View<WrapperStyleProps>`
  flex: 1;

  padding-top: ${({ insetTop }) => insetTop + 'px'};
`

const OnboardingCarousel = styled.ScrollView`
  flex-grow: 0;

  padding-top: 55px;
`

const ButtonContainer = styled.View`
  height: 91px;

  flex-direction: row;
  align-items: center;

  margin-bottom: 35px;

  border-top-width: 1px;
  border-top-color: #e7e7e7;
`

const AuthButton = styled.TouchableOpacity`
  width: 50%;
  height: 100%;

  align-items: center;
  justify-content: center;
`

const LoginText = styled(CSText)`
  color: ${colors.blue};
  font-size: 16px;
  font-weight: 600;
`

const SingUpText = styled(CSText)`
  color: ${colors.black};
  font-size: 16px;
`

const GrayDivider = styled.View`
  width: 1px;
  height: 20px;

  background-color: #e7e7e7;
`

const LookAroundButton = styled.TouchableOpacity`
  align-self: center;
`

const LookAroundText = styled(CSText)`
  color: #c2c2c2;
  text-decoration-line: underline;
`

export default Onboarding

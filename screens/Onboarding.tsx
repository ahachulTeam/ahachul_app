import styled from '@emotion/native'
import React from 'react'
import { Source } from 'react-native-fast-image'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { colors, images } from '../App/config/globalStyle'
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
    image: images.OnboardingGirl,
  },
  {
    id: 1,
    title: `쾌적하고 편안한 여정을\n위한 민원 서비스`,
    body: '터치 한 번이면 유저의 의견을 바로 전달할 수 있어요!',
    image: images.OnboardingInconvenient,
  },
  {
    id: 2,
    title: `출퇴근 더이상\n복잡한 지할철 그만!`,
    body: '열차 내 다양한 정보로 쾌적한 지하철 이용 경험을 누리세요!',
    image: images.OnboardingWalking,
  },
  {
    id: 3,
    title: `한 번에 찾아주는\n분실물 보관함`,
    body: '이제 지하철에서 잃어버린 물건도 편리하게 찾을 수 있어요!',
    image: images.OnboardingSearching,
  },
]

const Onboarding = ({ navigation }: { navigation: any }) => {
  const { top: insetTop } = useSafeAreaInsets()
  const { showBottomSheet } = useBottomSheet()

  const handlePressLogin = () => {
    showBottomSheet({ component: <LoginBottomSheet />, height: 270 })
  }

  const handlePressLookAround = () => {
    navigation.navigate('Login')
  }

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

      <ButtonContainer onPress={handlePressLogin}>
        <CSText size={16} weight="600" color={colors.blue}>
          로그인
        </CSText>
      </ButtonContainer>

      <LookAroundButton onPress={handlePressLookAround}>
        <LookAroundText color={colors.ColorC2C2C2}>둘러보기</LookAroundText>
      </LookAroundButton>
    </Wrapper>
  )
}

const Wrapper = styled.View<WrapperStyleProps>`
  flex: 1;
  background-color: ${colors.white};
  padding-top: ${({ insetTop }) => insetTop + 'px'};
`

const OnboardingCarousel = styled.ScrollView`
  flex-grow: 0;

  padding-top: 55px;
`

const ButtonContainer = styled.TouchableOpacity`
  height: 90px;

  justify-content: center;
  align-items: center;

  margin-bottom: 35px;

  border-top-width: 1px;
  border-top-color: #e7e7e7;
`

const LookAroundButton = styled.TouchableOpacity`
  align-self: center;
`

const LookAroundText = styled(CSText)`
  text-decoration-line: underline;
`

export default Onboarding

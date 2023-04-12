import styled from '@emotion/native'
import React from 'react'
import CSText from '../common/text'
import FastImage, { Source } from 'react-native-fast-image'
import { colors, screenWidth } from '../../App/config/globalStyle'

interface OnboardingSectionProps {
  title: string
  body: string
  image: number | Source
}

const OnboardingSection = ({ title, body, image }: OnboardingSectionProps) => {
  return (
    <Wrapper>
      <TitleText>{title}</TitleText>
      <BodyText>{body}</BodyText>
      <SectionImage source={image} resizeMode="contain" />
    </Wrapper>
  )
}

const Wrapper = styled.View``

const TitleText = styled(CSText)`
  color: ${colors.black};
  font-weight: 800;
  font-size: 28.6px;
  line-height: 33px;

  margin-bottom: 5.6px;
  padding: 0px 15px;
`

const BodyText = styled(CSText)`
  color: ${colors.gray};
  line-height: 29px;

  padding: 0px 15px;
  margin-bottom: 20px;
`

const SectionImage = styled(FastImage)`
  width: ${screenWidth + 'px'};
  height: ${screenWidth * 1.06 + 'px'};
`

export default OnboardingSection

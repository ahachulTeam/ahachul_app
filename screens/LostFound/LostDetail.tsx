import styled from '@emotion/native'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import React, { useLayoutEffect } from 'react'
import FastImage from 'react-native-fast-image'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import ShareIcon from '../../App/assets/svg/ic_share.svg'
import { colors } from '../../App/config/globalStyle'
import CSButton from '../../components/common/button'
import CSText from '../../components/common/text'
import { SCREEN_WIDTH } from '../../lib/public/constants'
import { MainStackScreenList } from '../../lib/types/navigations'

const TEMP_LOST_DETAIL_DATA = {
  images: [
    'https://images.unsplash.com/photo-1637486069202-b1163268c240?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=50',
    'https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q50',
    'https://images.unsplash.com/photo-1585401586477-2a671e1cae4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=50',
  ],
  title: '방금 4호선에서 검정색 루이비통 지갑 발견했어요',
  body: '방금 4호선 당고개행에서 검정색 루이비통 지갑을 발견했어요. 제가 보관하고 있으니 쪽지 주세요.',
  subwayInfo: {
    line: 4,
    lineColor: '#509DD8',
  },
  author: {
    name: '홍길동',
  },
  createdAt: '2023-05-19 21:57:06',
  chatCount: 2,
}

interface SubwayLineStyleProps {
  color: string
}

interface BottomContainerStyleProps {
  insetBottom: number
}

const LostDetail = () => {
  const navigation = useNavigation<StackNavigationProp<MainStackScreenList>>()
  const { bottom: insetBottom } = useSafeAreaInsets()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <ShareButton onPress={handlePressShare}>
          <ShareIcon color={colors.black} />
        </ShareButton>
      ),
    })
  }, [])

  const handlePressShare = () => {}

  return (
    <>
      <Wrapper>
        <ImageCarousel
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          style={{
            borderBottomRightRadius: 50,
          }}>
          {TEMP_LOST_DETAIL_DATA.images.map(image => (
            <LostImage key={`lost-image-${image}`} source={{ uri: image }} />
          ))}
        </ImageCarousel>

        <Section>
          <Row>
            <PostTitle>{TEMP_LOST_DETAIL_DATA.title}</PostTitle>
            <AcquisitionContainer>
              <AcquisitionLabel>습득 호선</AcquisitionLabel>
              <SubwayLineNumberContainer
                color={TEMP_LOST_DETAIL_DATA.subwayInfo.lineColor}>
                <SubwayLineNumberText>
                  {TEMP_LOST_DETAIL_DATA.subwayInfo.line}
                </SubwayLineNumberText>
              </SubwayLineNumberContainer>
            </AcquisitionContainer>
          </Row>
          <PostSubInfo>
            <GraySmallText>{`${TEMP_LOST_DETAIL_DATA.author.name} | ${TEMP_LOST_DETAIL_DATA.createdAt}`}</GraySmallText>
          </PostSubInfo>
          <Divider />
        </Section>

        <Section>
          <PostBodyContent>{TEMP_LOST_DETAIL_DATA.body}</PostBodyContent>
          <GraySmallText
            style={{
              marginLeft: 'auto',
            }}>{`채팅 ${TEMP_LOST_DETAIL_DATA.chatCount}`}</GraySmallText>
          <ReportButton>
            <ReportButtonText>이 게시물 신고하기</ReportButtonText>
          </ReportButton>
          <Divider />
        </Section>

        <Section>
          <Row>
            <RelatedPostTitle style={{ color: colors.blue }}>
              {`${TEMP_LOST_DETAIL_DATA.subwayInfo.line}호선`}
            </RelatedPostTitle>
            <RelatedPostTitle>의 다른 습득물도 둘러보세요</RelatedPostTitle>
          </Row>
        </Section>
      </Wrapper>

      <FixedBottomContainer insetBottom={insetBottom}>
        <BottomButton>
          <BottomButtonText>쪽지 보내기</BottomButtonText>
        </BottomButton>
      </FixedBottomContainer>
    </>
  )
}

const Wrapper = styled.ScrollView``

const Section = styled.View`
  padding: 20px 15px 0px 15px;
`

const ImageCarousel = styled.ScrollView`
  width: 100%;
  height: 290px;
`

const LostImage = styled(FastImage)`
  width: ${SCREEN_WIDTH + 'px'};
  height: 100%;
`

const Row = styled.View`
  flex-direction: row;
`

const PostTitle = styled(CSText)`
  flex-basis: 70%;

  font-size: 20px;
  font-weight: 700;

  margin-bottom: 20px;
`

const AcquisitionContainer = styled.View`
  height: 25px;

  flex-direction: row;
  align-items: center;

  margin-left: auto;
`

const AcquisitionLabel = styled(CSText)`
  color: #bcbcbc;

  margin-right: 10px;
`

const SubwayLineNumberContainer = styled.View<SubwayLineStyleProps>`
  width: 25px;
  height: 25px;

  justify-content: center;
  align-items: center;

  background-color: ${({ color }) => color};
  border-radius: 12.5px;
`

const SubwayLineNumberText = styled(CSText)`
  color: ${colors.white};
`

const Divider = styled.View`
  width: 100%;
  height: 1px;

  background-color: #eeeeee;
`

const GrayText = styled(CSText)`
  color: #b1b1b1;
`

const PostBodyContent = styled(CSText)`
  font-size: 16px;
  line-height: 26px;
`

const PostSubInfo = styled(Row)`
  margin-bottom: 15px;
`

const GraySmallText = styled(GrayText)`
  font-size: 12px;
`

const ReportButton = styled(CSButton)`
  width: 100%;
  height: 44px;

  margin-top: 15px;
  margin-bottom: 20px;

  background-color: ${colors.white};
  border: 1px solid #cacaca;
  border-radius: 15px;
`

const ReportButtonText = styled(CSText)`
  color: #686868;
`

const ShareButton = styled(CSButton)`
  margin-right: 15px;
  background-color: transparent;
`

const RelatedPostTitle = styled(CSText)`
  font-size: 16px;
  font-weight: 700;
`

const FixedBottomContainer = styled.View<BottomContainerStyleProps>`
  align-items: flex-end;

  padding: 15px 15px ${({ insetBottom }) => insetBottom + 'px'} 15px;

  border-top-color: #dadada;
  border-top-width: 1px;
`

const BottomButton = styled(CSButton)`
  width: 147px;
  height: 44px;

  border-radius: 70px;
`

const BottomButtonText = styled(CSText)`
  color: ${colors.white};
  font-weight: 500;
`

export default LostDetail

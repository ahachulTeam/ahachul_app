import React from 'react'
import { View } from 'react-native'
import CSText from '../../components/common/text'
import CSScreen from '../../components/common/screen'
import { colors } from '../../App/config/globalStyle'
import styled from '@emotion/native'
import { WithLocalSvg } from 'react-native-svg'

interface PostProp {
  post: {
    id: number
    title: string
    content: string
    writer: string
    createdBy: string
    date: string
    subwayLine: number
    chats: number
    imgUrl: string
    status: string
  }
}

const LostPost = ({ post }: PostProp) => {
  return (
    <CSScreen>
      <MainContainer>
        <ImageWrapper
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        />
        <View>
          <Title weight="700">{post.title}</Title>
          <Content weight="400">{post.content}</Content>
          <SubContainer>
            <SubwayAndTime weight="400">
              {post.subwayLine}호선 | {post.createdBy}분 전
            </SubwayAndTime>
            <Chat weight="400">{post.chats}개의 댓글</Chat>
          </SubContainer>
        </View>
      </MainContainer>
    </CSScreen>
  )
}

const MainContainer = styled.TouchableOpacity`
  flex-direction: row;
  margin-top: 10px;
  margin-left: 10px;
  margin-bottom: 10px;
  width: 280px;
`

const ImageWrapper = styled.Image`
  width: 75px;
  height: 69px;
  border-radius: 5px;
  margin-right: 10px;
`

const Title = styled(CSText)`
  vertical-align: top;
  font-size: 17px;
  line-height: 19px;
  color: ${colors.black};
`

const Content = styled(CSText)`
  vertical-align: top;
  font-size: 12px;
  line-height: 16px;
  color: ${colors.black};
`

const SubContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

const SubwayAndTime = styled(CSText)`
  vertical-align: top;
  font-size: 12px;
  line-height: 14px;
`

const Chat = styled(CSText)`
  vertical-align: top;
  font-size: 12px;
  line-height: 14px;
`

const Icon = styled(WithLocalSvg)`
  width: 24;
  height: 24;
  color: ${colors.black};
`

export default LostPost

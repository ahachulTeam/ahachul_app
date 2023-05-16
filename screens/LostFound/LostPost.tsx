import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import CSText from '../../components/common/text'
import CSScreen from '../../components/common/screen'
import { colors, icons } from '../../App/config/globalStyle'
import styled from '@emotion/native'
import { WithLocalSvg } from 'react-native-svg'

type PostProp = {
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
      <View style={styles.container}>
        <Image
          style={styles.tinyImg}
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        />
        <View>
          <CSText weight="700" style={styles.title}>
            {post.title}
          </CSText>
          <CSText weight="400" style={styles.content}>
            {post.content}
          </CSText>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <CSText weight="400" style={styles.subwayLine}>
              {post.subwayLine}호선 | {post.createdBy}분 전
            </CSText>
            <CSText weight="400" style={styles.chat}>
              {post.chats}개의 댓글
            </CSText>
          </View>
        </View>
      </View>
    </CSScreen>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 10,
    flexDirection: 'row',
    width: 280,
  },

  tinyImg: {
    marginRight: 5,
    width: 75,
    height: 69,
    borderRadius: 5,
  },

  title: {
    verticalAlign: 'top',
    fontSize: 16,
    lineHeight: 19,
    color: '#272727',
  },

  content: {
    verticalAlign: 'top',
    fontSize: 12,
    lineHeight: 16,
    color: '#272727',
  },

  subwayLine: {
    verticalAlign: 'top',
    fontSize: 12,
    lineHeight: 14,
  },

  chat: {
    verticalAlign: 'top',
    fontSize: 12,
    lineHeight: 14,
  },
})

const Icon = styled(WithLocalSvg)`
  width: 24;
  height: 24;
  color: ${colors.black};
`

export default LostPost

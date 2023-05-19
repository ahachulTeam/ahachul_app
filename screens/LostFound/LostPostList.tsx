import React from 'react'
import { FlatList, View, StyleSheet } from 'react-native'
import LostPost from './LostPost'
import styled from '@emotion/native'
import { colors } from '../../App/config/globalStyle'

type LostPostsType = {
  posts: {
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
  }[]
}

const LostPostList = ({ posts }: LostPostsType) => {
  return (
    <Liststyle
      ItemSeparatorComponent={() => <SeperateWrapper />}
      data={posts}
      renderItem={({ item }) => <LostPost post={item} />}
      keyExtractor={item => item.id.toString()}
    />
  )
}

const Liststyle = styled.FlatList`
  flex: 1;
`

const SeperateWrapper = styled.View`
  background-color: '#e0e0e0';
  height: 1;
`

export default LostPostList

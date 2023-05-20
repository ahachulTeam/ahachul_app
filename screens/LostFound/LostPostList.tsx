import React from 'react'
import LostPost from './LostPost'
import styled from '@emotion/native'
import { ListRenderItem } from 'react-native'

interface LostPostsType {
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

interface PostType {
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

const LostPostList = ({ posts }: LostPostsType) => {
  const renderItem: ListRenderItem<PostType | any> = ({ item }) => (
    <LostPost post={item} />
  )

  return (
    <Liststyle
      ItemSeparatorComponent={() => <SeperateWrapper />}
      data={posts}
      renderItem={renderItem}
      keyExtractor={(item: PostType | any) => item.id.toString()}
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

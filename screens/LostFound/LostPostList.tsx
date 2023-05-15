import React from 'react'
import { FlatList, View, StyleSheet } from 'react-native'
import LostPost from './LostPost'

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
    <FlatList
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      style={styles.list}
      data={posts}
      renderItem={({ item }) => <LostPost post={item} />}
      keyExtractor={item => item.id.toString()}
    />
  )
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  separator: {
    backgroundColor: '#e0e0e0',
    height: 1,
  },
})

export default LostPostList

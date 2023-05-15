import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

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
    <>
      <View style={styles.item}>
        <Text style={styles.text}>{post.title}</Text>
      </View>
      <View>
        <Text style={styles.text}>{post.content}</Text>
      </View>
      <View>
        <Text>{post.chats}</Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    padding: 16,
    verticalAlign: 'center',
  },

  text: {
    flex: 1,
    fontSize: 16,
    color: '#212121',
  },
})

export default LostPost

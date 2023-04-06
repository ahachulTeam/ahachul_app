import React, { useEffect } from 'react'
import { View } from 'react-native'
import usePopupModal from '../lib/hooks/usePopupModal'

const Home = () => {
  const { showPopupModal } = usePopupModal()

  useEffect(() => {
    showPopupModal({
      title: '게시물을 임시 저장',
      text: `수정한 내용을 임시 저장하고\n나중에 완료할 수 있습니다`,
      mainButtonText: '임시 저장',
      cancelButtonText: '취소',
    })
  }, [])

  return <View />
}

export default Home

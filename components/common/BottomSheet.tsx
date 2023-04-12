import styled from '@emotion/native'
import React, { useEffect } from 'react'
import { Modal } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import Animated, {
  Layout,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import { useRecoilState, useRecoilValue } from 'recoil'
import { screenHeight, screenWidth } from '../../App/config/globalStyle'
import {
  bottomSheetPropsState,
  isBottomSheetVisibleState,
  isRequestHideBottomSheetState,
} from '../../stores/bottom-sheet'

const BottomSheet = () => {
  const [isVisible, setIsVisible] = useRecoilState(isBottomSheetVisibleState)
  const isRequestHide = useRecoilValue(isRequestHideBottomSheetState)
  const { height = 500, component } = useRecoilValue(bottomSheetPropsState)

  const opacity = useSharedValue(0)
  const translateY = useSharedValue(height)

  const reBackDropStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }))
  const reTranslateYStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }))

  const show = () => {
    opacity.value = withTiming(1, { duration: 150 })
    translateY.value = withTiming(0, { duration: 200 })
  }

  const hide = () => {
    opacity.value = withTiming(0, { duration: 150 })
    translateY.value = withTiming(height, { duration: 200 })

    setTimeout(() => setIsVisible(false), 200)
  }

  useEffect(() => {
    if (isVisible) {
      show()
    }
  }, [isVisible])

  useEffect(() => {
    if (isRequestHide) {
      hide()
    }
  }, [isRequestHide])

  return (
    <Modal animationType="none" onRequestClose={hide} transparent={true}>
      <BackDrop style={[reBackDropStyle]}>
        <BackDropTouchable onPress={hide} />
      </BackDrop>

      <Wrapper layout={Layout} style={[reTranslateYStyle]} height={height}>
        {component}
      </Wrapper>
    </Modal>
  )
}

export default BottomSheet

const BackDrop = styled(Animated.View)`
  width: ${screenWidth + 'px'};
  height: ${screenHeight + 'px'};

  position: absolute;
  top: 0px;
  left: 0px;

  background-color: rgba(10, 9, 14, 0.8);
  z-index: 99;
`

const BackDropTouchable = styled(TouchableWithoutFeedback)`
  width: 100%;
  height: 100%;
`

const Wrapper = styled(Animated.View)<{ height: number }>`
  width: ${screenWidth + 'px'};
  height: ${({ height }) => `${height}px`};

  position: absolute;
  bottom: 0px;
  left: 0px;

  background-color: #fff;

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  z-index: 99;
`

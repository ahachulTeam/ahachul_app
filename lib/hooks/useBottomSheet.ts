import { useSetRecoilState } from 'recoil'
import {
  BottomSheetProps,
  bottomSheetPropsState,
  isBottomSheetVisibleState,
  isRequestHideBottomSheetState,
} from '../../stores/bottom-sheet'

const useBottomSheet = () => {
  const setIsVisible = useSetRecoilState(isBottomSheetVisibleState)
  const setIsRequestHide = useSetRecoilState(isRequestHideBottomSheetState)
  const setProps = useSetRecoilState(bottomSheetPropsState)

  const showBottomSheet = (props: BottomSheetProps) => {
    setIsVisible(true)
    setIsRequestHide(false)

    setProps(props)
  }

  const hideBottomSheet = () => {
    setIsRequestHide(true)
  }

  return { showBottomSheet, hideBottomSheet }
}

export default useBottomSheet

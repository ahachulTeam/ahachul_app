import { useSetRecoilState } from 'recoil'
import {
  PopupModalProps,
  isPopupModalVisibleState,
  popupModalPropsState,
} from '../../stores/global'

const usePopupModal = () => {
  const setIsPopupModalVisible = useSetRecoilState(isPopupModalVisibleState)
  const setPopupModalProps = useSetRecoilState(popupModalPropsState)

  const showPopupModal = (props: PopupModalProps) => {
    setIsPopupModalVisible(true)
    setPopupModalProps(props)
  }

  const hidePopupModal = () => {
    setIsPopupModalVisible(false)
  }

  return { showPopupModal, hidePopupModal }
}

export default usePopupModal

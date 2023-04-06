import Toast, { ToastShowParams } from 'react-native-toast-message'

type ToastShowFunction = (options: ToastShowParams) => void
type ToastHideFunction = () => void

type UseToastHook = () => {
  show: ToastShowFunction
  hide: ToastHideFunction
}

const useToast: UseToastHook = () => {
  const show: ToastShowFunction = options => {
    Toast.show(options)
  }

  const hide: ToastHideFunction = () => {
    Toast.hide()
  }

  return { show, hide }
}

export default useToast

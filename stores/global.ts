import { atom } from 'recoil'
import { Nullable } from '../lib/types'

export interface PopupModalProps {
  title: string
  text?: string
  mainButtonText?: string
  cancelButtonText?: string
  onPressMainButton?: (props?: Partial<Record<string, unknown>>) => void
}

export const tokenState = atom<Nullable<string>>({
  key: 'token',
  default: undefined,
})

export const isPopupModalVisibleState = atom<boolean>({
  key: 'is-popup-modal-visible',
  default: false,
})

export const popupModalPropsState = atom<PopupModalProps>({
  key: 'popup-modal-props',
  default: {
    title: '',
  },
})

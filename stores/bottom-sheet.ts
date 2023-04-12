import { atom } from 'recoil'
import { Nullable } from '../lib/types'

export interface BottomSheetProps {
  component: Nullable<JSX.Element>
  height?: number
}

export const isBottomSheetVisibleState = atom<boolean>({
  key: 'is-bottom-sheet-visible',
  default: false,
})

export const bottomSheetPropsState = atom<BottomSheetProps>({
  key: 'bottom-sheet-props',
  default: {
    component: null,
    height: 500,
  },
})

export const isRequestHideBottomSheetState = atom<boolean>({
  key: 'is-request-hide-bottom-sheet',
  default: false,
})

import { atom } from 'recoil'
import { Nullable } from '../lib/types'

export const tokenState = atom<Nullable<string>>({
  key: 'token',
  default: undefined,
})

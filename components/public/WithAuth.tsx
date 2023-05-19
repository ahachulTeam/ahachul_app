import { NavigationProp } from '@react-navigation/native'
import { useLayoutEffect } from 'react'
import { useRecoilState } from 'recoil'
import { getAsyncData } from '../../lib/utils/async-storage-helper'
import { tokenState } from '../../stores/global'
import AuthStack from '../../App/stacks/AuthStack'

interface WrappedProps {
  navigation: NavigationProp<any>
}

const WithAuth =
  <P extends object>(
    WrappedComponent: React.ComponentType<P>,
  ): React.FC<P & WrappedProps> =>
  props => {
    const [token, setToken] = useRecoilState(tokenState)

    useLayoutEffect(() => {
      if (token) return

      const getAsyncToken = async () => {
        const asyncToken = await getAsyncData('token')

        setToken(asyncToken ?? null)
      }

      getAsyncToken()
    }, [token])

    return !token ? <WrappedComponent {...props} /> : <AuthStack />
  }

export default WithAuth

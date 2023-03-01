import { NavigationProp } from '@react-navigation/native'
import { useLayoutEffect } from 'react'
import { useRecoilState } from 'recoil'
import WithoutAuthStack from '../../App/WithoutAuthStack'
import { getAsyncData } from '../../lib/utils/async-storage-helper'
import { tokenState } from '../../stores/global'

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

    return token ? <WrappedComponent {...props} /> : <WithoutAuthStack />
  }

export default WithAuth

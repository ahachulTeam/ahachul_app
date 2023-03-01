import { NavigationProp } from '@react-navigation/native'
import { useRecoilState } from 'recoil'
import WithoutAuthStack from '../../App/WithoutAuthStack'
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

    return token ? <WrappedComponent {...props} /> : <WithoutAuthStack />
  }

export default WithAuth

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Text } from 'react-native'
import { Toast } from 'react-native-toast-message/lib/src/Toast'
import { RecoilRoot } from 'recoil'
import CSToast from '../components/common/Toast'
import RootStack from './stacks/RootStack'

const App = () => {
  // * 유저가 디바이스에서 수동으로 설정한 폰트 사이즈가 앱 폰트사이즈에 영향을 주지 않도록 방지합니다.
  if ((Text as any).defaultProps == null) (Text as any).defaultProps = {}
  ;(Text as any).defaultProps.allowFontScaling = false

  const queryClient = new QueryClient()

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <RootStack />
        <Toast
          config={{
            ahachulToast: ({ text1 }) => <CSToast text1={text1} />,
          }}
        />
      </QueryClientProvider>
    </RecoilRoot>
  )
}

export default App

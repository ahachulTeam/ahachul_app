import { StackNavigationOptions } from '@react-navigation/stack'
import { colors } from '../../App/config/globalStyle'
import HeaderLeft from '../../components/public/HeaderLeft'

export const getStackScreenOptions = (navigation: any) => {
  const options: StackNavigationOptions = {
    headerBackTitleVisible: false,
    headerTintColor: colors.black,
    headerLeft: () => <HeaderLeft navigation={navigation} />,
    headerStyle: { borderBottomColor: colors.ColorE7E7E7 },
    title: '',
    cardStyle: {
      backgroundColor: '#fff',
    },
  }

  return options
}

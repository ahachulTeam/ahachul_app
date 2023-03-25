import { createIconSetFromFontello } from 'react-native-vector-icons'
import fontelloConfig from './Icon-font.json'

const Icon = createIconSetFromFontello(fontelloConfig, 'fontello')
const AhIcon = ({ size, ...props }) => <Icon size={size} {...props} />
export default AhIcon

import styled from '@emotion/native'
import CSText from '../common/text'
import CSButton from '../common/button'
import { WithLocalSvg } from 'react-native-svg'
import { colors, icons } from '../../App/config/globalStyle'

const LostFoundComplete = () => {
  return (
    <Wrapper>
      <CheckButtonWrapper>
        <CheckButton asset={icons.CheckIcon} />
      </CheckButtonWrapper>
      <TextWrapper>
        <Text>찾기완료버튼</Text>
      </TextWrapper>
    </Wrapper>
  )
}

const Wrapper = styled(CSButton)`
  flex-direction: row;
  align-items: center;
  width: 145px;
  height: 29px;
  margin-top: 10px;
  left: 20px;
  gap: 10px;
  background: white;
`

const CheckButtonWrapper = styled.View`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: ${colors.ColorDFDFDF};
`

const CheckButton = styled(WithLocalSvg)`
  width: 5px;
  height: 5px;
  color: ${colors.white};
`

const TextWrapper = styled.View`
  width: 100px;
  height: 29px;
  background: white;
`

const Text = styled(CSText)`
  font-family: 'Pretendard Variable';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 29px;
  /* identical to box height, or 207% */

  color: #272727;
`

export default LostFoundComplete

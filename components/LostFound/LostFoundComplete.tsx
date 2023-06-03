import styled from '@emotion/native'
import { Button, Text, View } from 'react-native'

const LostFoundComplete = () => {
  return (
    <Wrapper>
      <Check />
      <View>
        <CSText>찾기 완료 제외하기</CSText>
      </View>
    </Wrapper>
  )
}

const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 130px;
  height: 29px;
  margin-top: 10px;
  left: 20px;
`

const CSText = styled.Text`
  font-family: 'Pretendard Variable';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 29px;
  /* identical to box height, or 207% */

  color: #272727;
`

const Check = styled.View`
  position: absolute;
  width: 16px;
  height: 16px;

  background: red;
  /* background: #dfdfdf; */
`

export default LostFoundComplete

import styled from '@emotion/native'
import React, { useState } from 'react'
import CSScreen from '../components/common/screen'
import CSHeader from '../components/common/header'
import AhIcon from '../App/config/Icon-font'
import { colors } from '../App/config/globalStyle'
import CSText from '../components/common/text'
import { View } from 'react-native'
import CSTextInput from '../components/common/textInput'
import CSButton from '../components/common/button'
import useBottomSheet from '../lib/hooks/useBottomSheet'
import AgreeBottomSheet from '../components/bottom-sheet/AgreeBottomSheet'

const Login = ({ navigation }: { navigation: { [key: string]: any } }) => {
  const [nickname, setNickname] = useState<string>('')
  const [overlap, setOverlap] = useState<boolean>(false)
  const { showBottomSheet } = useBottomSheet()
  const handleOverLapCheck = () => {
    setOverlap(!overlap)
  }
  const handleChangeNickName = (value: string) => {
    setNickname(value)
  }

  const handleNextPage = () => {
    showBottomSheet({ component: <AgreeBottomSheet />, height: 530 })
  }
  return (
    <CSScreen>
      <CSHeader
        title={'로그인'}
        leftIcon={<AhIcon size={24} name={'ic_arrow'} color={colors.black} />}
        leftIconPress={() => navigation.goBack()}
      />

      <Body>
        <CSText size={29} weight="300">
          닉네임을 설정해주세요.
        </CSText>

        <NickNameContainer>
          <FlexRowView
            style={{ borderColor: overlap ? colors.red : colors.blue }}>
            <CSTextInput
              placeholder={'닉네임을 설정해 주세요.'}
              value={nickname}
              onChangeText={handleChangeNickName}
              maxLength={20}
            />
            <CSButton
              bgColor={colors.ColorD0EEFF}
              textColor={colors.blue}
              textWeight={'400'}
              textSize={14}
              onPress={handleOverLapCheck}
              text={'중복확인'}
              style={{ paddingHorizontal: 30 }}
              height={32}
              borderRadius={20}
            />
          </FlexRowView>
          <CSText
            size={11}
            weight="400"
            color={overlap ? colors.red : colors.blue}>
            {overlap
              ? '사용불가한 닉네임 입니다.'
              : '사용가능한 닉네임 입니다.'}
          </CSText>
        </NickNameContainer>
      </Body>
      <CSButton
        bgColor={colors.ColorD0EEFF}
        textColor={colors.blue}
        textWeight={'400'}
        textSize={14}
        onPress={handleNextPage}
        text={'확인'}
        height={53}
      />
    </CSScreen>
  )
}

const Body = styled(View)`
  flex: 1;

  margin: 62px 15px 0px 15px;
`

const NickNameContainer = styled(View)`
  margin-top: 26px;
`

const FlexRowView = styled(View)`
  flex-direction: row;
  margin-bottom: 8px;
  padding-bottom: 7px;

  border-bottom-width: 1px;
`

export default Login

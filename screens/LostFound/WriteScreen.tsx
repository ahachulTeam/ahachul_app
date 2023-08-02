import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import styled from '@emotion/native'
import { WithLocalSvg } from 'react-native-svg'
import { colors, icons } from '../../App/config/globalStyle'
import CSScreen from '../../components/common/screen'
import CSHeader from '../../components/common/header'
import CSText from '../../components/common/text'
import CSButton from '../../components/common/button'
import LostFoundWriteInput from '../../components/LostFound/WriteInput'
import CSTextArea from '../../components/common/textArea'
import useBottomSheet from '../../lib/hooks/useBottomSheet'
import SelectLineBottomSheet from '../../components/bottom-sheet/SelectLineBottomSheet'

const LostFoundWriteScreen = ({ navigation }: { navigation: any }) => {
  const { showBottomSheet } = useBottomSheet()
  const [type] = useState<string>('습득')
  const [selectedLine, setSelectedLine] = useState<string>('')
  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')

  const handleSelectedLine = () => {
    showBottomSheet({
      component: (
        <SelectLineBottomSheet
          type={type}
          value={selectedLine}
          handleChange={setSelectedLine}
        />
      ),
      height: 422,
    })
  }

  const handleTemporarySave = () => {}

  const handleUseRuleButton = () => {}

  const handleSave = () => {}

  return (
    <CSScreen>
      <CSHeader
        leftIcon={<Icon asset={icons.ArrowIcon} color={colors.black} />}
        leftIconPress={() => navigation.goBack()}
        title={`${type}물 작성`}
        rightIcon={
          <CSText size={14} color={colors.ColorBCBCBC}>
            임시저장
          </CSText>
        }
        rightIconPress={handleTemporarySave}
      />

      <Container showsVerticalScrollIndicator={false}>
        <MainText>사진 업로드</MainText>
        <PhotoContainer>
          <PhotoAdd>
            <Icon asset={icons.CameraAltIcon} />
            <CSText size={14} color={colors.ColorBCBCBC}>
              <CSText size={14} color={colors.blue}>
                1
              </CSText>
              /3
            </CSText>
          </PhotoAdd>
        </PhotoContainer>

        <MainText>{`${type} 호선`}</MainText>
        <SelectLineView activeOpacity={0.7} onPress={handleSelectedLine}>
          <CSText
            size={14}
            weight="400"
            color={selectedLine === '' ? colors.ColorBCBCBC : colors.blue}>
            {selectedLine === '' ? '습득하신 호선을 추가하세요' : selectedLine}
          </CSText>
          <Icon
            asset={icons.ArrowIcon}
            color={colors.ColorBCBCBC}
            style={{ transform: [{ rotate: '180deg' }] }}
          />
        </SelectLineView>

        <MainText>제목</MainText>
        <LostFoundWriteInput
          mb={16}
          placeholder={'제목을 입력하세요(40자 이내)'}
          value={title}
          onChangeText={setTitle}
          maxLength={40}
        />

        <MainText>내용</MainText>
        <CSTextArea
          mb={16}
          placeholder={'게시물 내용을 작성하세요(100자 이내)'}
          value={content}
          onChangeText={setContent}
        />
        <Left>
          <CSButton
            style={{ width: 125 }}
            bgColor={colors.ColorD0EEFF}
            textColor={colors.blue}
            textWeight={'400'}
            textSize={12}
            onPress={handleUseRuleButton}
            text="게시물 이용 규칙"
            height={30}
            borderRadius={65}
          />
        </Left>

        <CSText
          size={10}
          color={colors.ColorBCBCBC}
          lineHeight={21}
          style={{ marginBottom: 30 }}>
          국회는 상호원조 또는 안전보장에 관한 조약, 중요한 국제조직에 관한
          조약, 우호통상항해조약, 주권의 제약에 관한 조약, 강화조약, 국가나
          국민에게 중대한 재정적 부담을 지우는 조약 또는 입법사항에 관한 조약의
          체결·비준에 대한 동의권을 가진다. 모든 국민은 언론·출판의 자유와
          집회·결사의 자유를 가진다. 대한민국은 민주공화국이다. 국무회의는
          정부의 권한에 속하는 중요한 정책을 심의한다. 근로조건의 기준은 인간의
          존엄성을 보장하도록 법률로 정한다. 대법관은 대법원장의 제청으로 국회의
          동의를 얻어 대통령이 임명한다. 모든 국민은 근로의 권리를 가진다.
          국가는 사회적·경제적 방법으로 근로자의 고용의 증진과 적정임금의 보장에
          노력하여야 하며, 법률이 정하는 바에 의하여 최저임금제를 시행하여야
          한다.
        </CSText>
      </Container>

      <ButtonContainer>
        <CSButton
          bgColor={colors.blue}
          textColor={colors.white}
          textWeight={'500'}
          textSize={14}
          onPress={handleSave}
          text="작성하기"
          height={44}
          borderRadius={70}
        />
      </ButtonContainer>
    </CSScreen>
  )
}

export default LostFoundWriteScreen

const Icon = styled(WithLocalSvg)`
  width: 24px;
  height: 24px;
`
const Container = styled(ScrollView)`
  padding: 20px 15px;
`

const MainText = styled(CSText)`
  font-size: 14px;
  font-weight: 500;
  color: ${colors.black};
  margin-bottom: 5px;
`

const PhotoContainer = styled.View`
  flex-direction: row;
  margin-bottom: 15px;
`

const PhotoAdd = styled.TouchableOpacity`
  width: 60px;
  height: 60px;

  background-color: ${colors.ColorD0EEFF};
  align-items: center;
  justify-content: center;
  border-radius: 15px;
`

const SelectLineView = styled.TouchableOpacity`
  height: 44px;
  padding: 8px 15px 8px 25px;
  margin-bottom: 15px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border-radius: 110px;
  border-width: 1px;
  border-color: ${colors.ColorE6E6E6};
`

const Left = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  margin-bottom: 10px;
`

const ButtonContainer = styled.View`
  width: 100%;
  padding: 14px 15px;

  border-color: ${colors.ColorDADADA};
  border-top-width: 1px;
`

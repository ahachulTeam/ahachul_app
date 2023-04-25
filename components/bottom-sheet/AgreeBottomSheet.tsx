import styled from '@emotion/native'
import React, { useEffect, useState } from 'react'
import { colors, icons } from '../../App/config/globalStyle'
import CSText from '../common/text'
import CSButton from '../common/button'
import useBottomSheet from '../../lib/hooks/useBottomSheet'
import AgreeItemRow from '../Login/AgreeItemRow'
import { View } from 'react-native'
import { WithLocalSvg } from 'react-native-svg'

const AgreeBottomSheet = () => {
  const [allAgree, setAllAgree] = useState<boolean>(false)

  const [subAgree, setSubAgree] = useState<boolean[]>([
    false,
    false,
    false,
    false,
  ])
  const { hideBottomSheet } = useBottomSheet()

  useEffect(() => {
    const length = subAgree.filter(value => value === true).length
    setAllAgree(length === 4)
  })

  const handleAllAgree = () => {
    setSubAgree(
      allAgree ? [false, false, false, false] : [true, true, true, true],
    )
    setAllAgree(!allAgree)
  }

  const handleSubAgree = (num: number) => {
    subAgree[num] = !subAgree[num]
    setSubAgree([...subAgree])
  }

  const handleNextPage = () => {
    hideBottomSheet()
  }

  return (
    <View>
      <Body>
        <TitleView>
          <IconView onPress={hideBottomSheet}>
            <Icon size={24} asset={icons.CloseIcon} color={colors.black} />
          </IconView>
          <CSText size={20} weight="600">
            약관동의
          </CSText>
        </TitleView>

        <CSText size={26} weight="300">
          약관동의 후{'\n'}메인페이지부터 시작됩니다
        </CSText>

        <AgreeTitleView
          style={{ borderColor: allAgree ? colors.blue : colors.gray20 }}
          onPress={handleAllAgree}>
          <Icon
            size={16}
            asset={icons.CheckFillIcon}
            color={allAgree ? colors.blue : colors.ColorDFDFDF}
          />
          <CSText size={16} style={{ marginLeft: 15 }}>
            아하철이형 약관 모두 동의
          </CSText>
        </AgreeTitleView>
        <AgreeView>
          <AgreeItemRow
            mb={30}
            text={'개인정보 수집 이용 동의(필수)'}
            value={subAgree[0]}
            handleAgreeCheck={() => handleSubAgree(0)}
            handleArrowClick={() => console.log('1page')}
          />

          <AgreeItemRow
            mb={30}
            text={'위치정보 이용약관 동의(필수)'}
            value={subAgree[1]}
            handleAgreeCheck={() => handleSubAgree(1)}
            handleArrowClick={() => console.log('2page')}
          />

          <AgreeItemRow
            mb={30}
            text={'마케팅 수신 동의(선택)'}
            value={subAgree[2]}
            handleAgreeCheck={() => handleSubAgree(2)}
            handleArrowClick={() => console.log('3page')}
          />

          <AgreeItemRow
            text={'개인정보 광고활용 동의(선택)'}
            value={subAgree[3]}
            handleAgreeCheck={() => handleSubAgree(3)}
            handleArrowClick={() => console.log('4page')}
          />
        </AgreeView>
      </Body>
      <CSButton
        bgColor={colors.blue}
        textColor={colors.white}
        textWeight={'700'}
        textSize={16}
        onPress={handleNextPage}
        text={'동의'}
        height={53}
        disabled={!allAgree}
      />
    </View>
  )
}

const Body = styled.View`
  padding: 24px 16px;
`
const TitleView = styled.View`
  margin-bottom: 32px;
  align-items: center;
`

const IconView = styled.TouchableOpacity`
  position: absolute;
  left: 0;
`

const AgreeTitleView = styled.TouchableOpacity`
  flex-direction: row;

  height: 44px;
  padding: 0px 17px;
  margin: 19px 0px 15px 0px;

  border-width: 1px;
  border-radius: 110px;
  align-items: center;
`

const AgreeView = styled.View`
  margin: 15px 20px 20px 20px;
`
const Icon = styled(WithLocalSvg)<{ size: number }>`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
`

export default AgreeBottomSheet

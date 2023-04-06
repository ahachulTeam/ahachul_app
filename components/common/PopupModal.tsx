import styled from '@emotion/native'
import React from 'react'
import { Modal } from 'react-native'
import CSText from './text'
import usePopupModal from '../../lib/hooks/usePopupModal'
import { useRecoilValue } from 'recoil'
import {
  isPopupModalVisibleState,
  popupModalPropsState,
} from '../../stores/global'

const PopupModal = () => {
  const { hidePopupModal } = usePopupModal()
  const isVisible = useRecoilValue(isPopupModalVisibleState)
  const props = useRecoilValue(popupModalPropsState)

  const { title, text, mainButtonText, cancelButtonText, onPressMainButton } =
    props

  const handlePressMainButton = () => {
    if (onPressMainButton) {
      onPressMainButton()
    } else {
      hidePopupModal()
    }
  }

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={hidePopupModal}>
      <Wrapper>
        <Container>
          <TextBox>
            <MainText>{title}</MainText>
            {text && <SubText>{text}</SubText>}
          </TextBox>

          <ButtonContainer>
            {cancelButtonText !== undefined && (
              <Button onPress={hidePopupModal}>
                <CancelButtonText>{cancelButtonText}</CancelButtonText>
              </Button>
            )}
            <Button onPress={handlePressMainButton}>
              <MainButtonText>{mainButtonText}</MainButtonText>
            </Button>
          </ButtonContainer>
        </Container>
      </Wrapper>
    </Modal>
  )
}

const Wrapper = styled.View`
  width: 100%;

  position: relative;

  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.15);

  z-index: 10;
`

const Container = styled.View`
  width: 314px;
  height: 158px;

  padding: 16px 12px 12px 12px;

  background-color: #fff;
  border-radius: 12px;

  box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.07);
`

const TextBox = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

const MainText = styled(CSText)`
  color: #272727;
  font-weight: 700;
  font-size: 18px;

  margin-bottom: 2px;
`

const SubText = styled(CSText)`
  font-size: 15px;
  font-weight: 500;
  line-height: 20px;
  text-align: center;
  color: #979797;

  padding: 10px 0px;
`

const ButtonContainer = styled.View`
  height: 35px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const Button = styled.TouchableOpacity`
  height: 100%;

  flex-basis: 50%;
  align-items: center;
  justify-content: center;
`

const MainButtonText = styled(CSText)`
  color: #00baf6;
  font-size: 16px;
  font-weight: 500;
`

const CancelButtonText = styled(CSText)`
  color: #bcbcbc;
  font-size: 16px;
  font-weight: 500;
`

export default PopupModal

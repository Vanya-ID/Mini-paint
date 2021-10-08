import React, {ChangeEvent, KeyboardEvent, RefObject, useCallback, useState} from "react";
import {FormButton} from "../styles";
import {CloseModal, Modal, ModalBackground, ModalContainer} from "./ImageNameModal.module";
import {useDispatch, useSelector} from "react-redux";
import {getUserName} from "../../reselects/reselect";
import {saveImageTC} from "../../store/reducers/imagesReducer";

type ModalProps = {
    closeModal: (value: boolean) => void
    title: string
    canvasRef: RefObject<HTMLCanvasElement>
}

export const ImageNameModal: React.FC<ModalProps> = props => {
    const {closeModal, title, canvasRef} = props
    const [text, setText] = useState<string>('')

    const dispatch = useDispatch()

    const userName = useSelector(getUserName)

    const saveImg = useCallback(() => {
        if (canvasRef.current === null) throw new Error('Could not get сфтмфы');
        const imgURL = canvasRef.current.toDataURL()

        dispatch(saveImageTC(imgURL, text, userName as string))
        closeModal(false)
    }, [canvasRef, closeModal, dispatch, text])

    const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.currentTarget.value)
    }

    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') saveImg()
    }


    return (
        <>
            <ModalBackground onClick={() => closeModal(false)}/>
            <Modal>
                <CloseModal onClick={() => closeModal(false)}>X</CloseModal>
                <ModalContainer>
                    <h2> {title}</h2>
                    <input value={text} onKeyDown={onKeyDownHandler} onChange={inputChangeHandler}
                           placeholder={'image name...'}
                           type="text"/>
                    <FormButton disabled={!text || text.length >= 20} onClick={saveImg} marginRight={'0'}
                                text={'Save'}/>
                </ModalContainer>
            </Modal>
        </>

    )
}

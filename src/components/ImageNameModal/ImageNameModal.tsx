import React, {ChangeEvent, KeyboardEvent, useCallback, useState} from "react";
import {FormButton} from "../../shared/styles";
import {CloseModal, Modal, ModalBackground, ModalContainer} from "./ImageNameModal.style";
import {useDispatch, useSelector} from "react-redux";
import {getUserName} from "../../reselects/reselect";
import {saveImageTC} from "../../store/tasks/thunks/images/saveImageTC/saveImageTC";
import {ModalProps} from "./ImageNameModal.type";

export const ImageNameModal: React.FC<ModalProps> = React.memo(({closeModal, title, canvasRef}) => {
    const [text, setText] = useState<string>('')

    const dispatch = useDispatch()

    const userName = useSelector(getUserName)

    const saveImg = useCallback(() => {
        if (canvasRef.current === null) throw new Error('Could not get сфтмфы');
        const imgURL = canvasRef.current.toDataURL()

        dispatch(saveImageTC(imgURL, text, userName as string))
        closeModal(false)
    }, [canvasRef, closeModal, dispatch, text])

    const inputChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setText(e.currentTarget.value)
    }, [])

    const onKeyDownHandler = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') saveImg()
    }, [saveImg])

    const closeModalHelper = useCallback(() => {
        closeModal(false)
    }, [closeModal])


    return (
        <>
            <ModalBackground onClick={closeModalHelper}/>
            <Modal>
                <CloseModal onClick={closeModalHelper}>X</CloseModal>
                <ModalContainer>
                    <h2> {title}</h2>
                    <input value={text} onKeyDown={onKeyDownHandler} onChange={inputChangeHandler}
                           placeholder='image name...'
                           type="text"/>
                    <FormButton disabled={!text || text.length >= 20} onClick={saveImg} marginRight='0'
                                text='Save'/>
                </ModalContainer>
            </Modal>
        </>

    )
})

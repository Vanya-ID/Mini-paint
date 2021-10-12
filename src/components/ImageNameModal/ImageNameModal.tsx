import React, {ChangeEvent, KeyboardEvent, useCallback, useState} from "react";
import {FormButton} from "../../shared/styles";
import {CloseModal, Modal, ModalBackground, ModalContainer} from "./ImageNameModal.style";
import {useDispatch, useSelector} from "react-redux";
import {getUserName} from "../../reselects/reselect";
import {saveImageTC} from "../../store/tasks/thunks/images/saveImageTC/saveImageTC";
import {ModalProps} from "./ImageNameModal.type";

export const ImageNameModal: React.FC<ModalProps> = React.memo(({closeModal, title, canvasRef}) => {
    const [imageName, setImageName] = useState<string>('')

    const dispatch = useDispatch()

    const userName = useSelector(getUserName)

    const saveImg = useCallback(() => {
        if (canvasRef.current === null) throw new Error('Could not get сфтмфы');
        const imgURL = canvasRef.current.toDataURL()
        if (userName) dispatch(saveImageTC({imgURL, imageName, userName}))
        closeModal(false)
    }, [canvasRef, closeModal, dispatch, imageName])

    const inputChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setImageName(e.currentTarget.value)
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
                    <input value={imageName} onKeyDown={onKeyDownHandler} onChange={inputChangeHandler}
                           placeholder='image name...'
                           type="text"/>
                    <FormButton disabled={!imageName || imageName.length >= 20} onClick={saveImg} marginRight='0'
                                text='Save'/>
                </ModalContainer>
            </Modal>
        </>

    )
})

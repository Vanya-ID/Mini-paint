import React, {ChangeEvent, FC, KeyboardEvent, useCallback, useState} from "react";
import {CollectionsContainer, CollectionsWrapper, SearchWrapper} from "./ImgCollections.style";
import {FormButton} from "../../shared/styles";
import {ImgItem} from "../ImgItem/ImgItem";
import {useDispatch, useSelector} from "react-redux";
import {getImages} from "../../reselects/reselect";
import {getAllImagesRequest} from "../../store/tasks/sagas/images/getAllImagesTC/getAllImagesTC";
import {getCurrentImagesRequest} from "../../store/tasks/sagas/images/getCurrentImagesTC/getCurrentImagesTC";


export const ImgCollections: FC = React.memo(() => {

    const [inputText, setInputText] = useState<string>('')

    const images = useSelector(getImages)
    const dispatch = useDispatch()

    const inputChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setInputText(e.currentTarget.value)
    }, [])


    const searchButtonHandler = useCallback(async () => {
        if (!inputText) {
            await dispatch(getAllImagesRequest())
        } else {
            await dispatch(getCurrentImagesRequest(inputText))
        }
    }, [inputText, dispatch])

    const onKeyDownHandler = useCallback(async (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') await searchButtonHandler()
    }, [searchButtonHandler])

    return (
        <CollectionsContainer>
            <CollectionsWrapper>
                <SearchWrapper>
                    <input value={inputText} onKeyDown={onKeyDownHandler} onChange={inputChangeHandler}
                           placeholder='Enter User name...'
                           type="text"/>
                    <FormButton onClick={searchButtonHandler} text='Search'/>
                </SearchWrapper>
                <ul>
                    {images.map(el => {
                        return (
                            <ImgItem
                                imgURL={el.imgURL}
                                imageName={el.imageName}
                                userName={el.userName}
                            />
                        )
                    })}
                </ul>
            </CollectionsWrapper>
        </CollectionsContainer>
    )
})
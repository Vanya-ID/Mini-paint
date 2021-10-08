import React, {ChangeEvent, FC, KeyboardEvent, useState} from "react";
import {CollectionsContainer, CollectionsWrapper, SearchWrapper} from "./ImgCollections.style";
import {FormButton} from "../styles";
import {ImgItem} from "./ImgItem/ImgItem";
import {useDispatch, useSelector} from "react-redux";
import {getImages} from "../../reselects/reselect";
import {getAllImagesTC, getCurrentImagesTC} from "../../store/reducers/imagesReducer";


export const ImgCollections: FC = React.memo(() => {

    const [inputText, setInputText] = useState<string>('')

    const images = useSelector(getImages)
    const dispatch = useDispatch()

    const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputText(e.currentTarget.value)
        console.log(e)
    }
    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
       if (e.key==='Enter') searchButtonHandler()
    }

    const searchButtonHandler = async () => {
        if (!inputText) {
            await dispatch(getAllImagesTC())
        } else {
            await dispatch(getCurrentImagesTC(inputText))
        }
    }
    return (
        <CollectionsContainer>
            <CollectionsWrapper>
                <SearchWrapper>
                    <input value={inputText} onKeyDown={onKeyDownHandler} onChange={inputChangeHandler} placeholder={'Enter User name...'}
                           type="text"/>
                    <FormButton onClick={searchButtonHandler} text={'Search'}/>
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
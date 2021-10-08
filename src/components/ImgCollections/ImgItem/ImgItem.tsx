import React, {FC} from "react";
import {ImgWrapper, ItemContainer, ItemWrapper, TitleWrapper} from "./ImgItem.style";
import {ImgType} from "../../../store/reducers/imagesReducer";

type ImgItemPropsType = ImgType

export const ImgItem: FC<ImgItemPropsType> = React.memo(({imageName, imgURL, userName}) => {

    return (
        <ItemContainer>
            <ItemWrapper>
                <TitleWrapper>
                    <h1>User name: {userName}</h1>
                    <h1>Title: {imageName}</h1>
                </TitleWrapper>
                <ImgWrapper>
                    <img src={imgURL} alt={imageName}/>
                </ImgWrapper>
            </ItemWrapper>
        </ItemContainer>
    )
})
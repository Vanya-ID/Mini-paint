import {saveImageAC} from "../../tasks/thunks/images/saveImageTC/saveImageTC";
import {setCurrentImagesAC} from "../../tasks/thunks/images/getCurrentImagesTC/getCurrentImagesTC";
import {setAllImagesAC} from "../../tasks/thunks/images/fetchImagesTC/fetchImagesTC";
import {getAllImagesAC} from "../../tasks/thunks/images/getAllImagesTC/getAllImagesTC";

export type ImgType = {
    imgURL: string
    imageName: string
    userName: string
}

export type SaveActionTypes = ReturnType<typeof saveImageAC>
    | ReturnType<typeof setCurrentImagesAC>
    | ReturnType<typeof setAllImagesAC>
    | ReturnType<typeof getAllImagesAC>

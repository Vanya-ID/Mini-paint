import {ImgType} from "../../store/reducers/imagesReducer";

export const setAllImagesAC = (payload: ImgType[]) => ({
    type: 'SET_ALL_IMAGES',
    payload
} as const)

export const getAllImagesAC = (payload: ImgType[]) => ({
    type: 'GET_ALL_IMAGES',
    payload
} as const)

export const setCurrentImagesAC = (payload: ImgType[], userName: string) => ({
    type: 'GET_CURRENT_IMAGES',
    payload,
    userName
} as const)

export const saveImageAC = (imgURL: string, imageName: string, userName: string) => ({
    type: 'SAVE_IMAGE',
    imgURL,
    userName,
    imageName
} as const)

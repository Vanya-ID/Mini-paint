import {Dispatch} from "redux";
import {ImgType} from "../../../../reducers/imagesReducer/imagesType";
import {GET_CURRENT_IMAGES} from "../../../../../constants/constants";
import {storageWorker} from "../../../../../imagesWorker/storageWorker/storageWorker";


export const setCurrentImagesAC = (payload: ImgType[], userName: string) => ({
    type: GET_CURRENT_IMAGES,
    payload,
    userName
} as const)

export const getCurrentImagesTC = (userName: string) => {
    return async (dispatch: Dispatch) => {
        try {
            const response = await storageWorker.getCurrentImages()
            dispatch(setCurrentImagesAC(response, userName))
        } catch (e) {
            console.log(e)
        }
    }
}

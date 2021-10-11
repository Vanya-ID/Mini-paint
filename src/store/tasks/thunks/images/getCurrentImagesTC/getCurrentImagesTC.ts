import {Dispatch} from "redux";
import {ImgType} from "../../../../reducers/imagesReducer/imagesType";
import {GET_CURRENT_IMAGES} from "../../../../../constants/constants";
import {getImagesWorker} from "../../../../../imagesWorker/getImagesWorker/getImagesWorker";


export const setCurrentImagesAC = (payload: ImgType[], userName: string) => ({
    type: GET_CURRENT_IMAGES,
    payload,
    userName
} as const)

export const getCurrentImagesTC = (userName: string) => {
    return async (dispatch: Dispatch) => {
        try {
            const response = await getImagesWorker.getCurrentImages()
            dispatch(setCurrentImagesAC(response, userName))
        } catch (e) {
            console.log(e)
        }
    }
}

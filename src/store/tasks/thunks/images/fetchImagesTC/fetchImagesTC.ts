import {Dispatch} from "redux";
import {ImgType} from "../../../../reducers/imagesReducer/imagesType";
import {SET_ALL_IMAGES} from "../../../../../constants/constants";
import {storageWorker} from "../../../../../imagesWorker/storageWorker/storageWorker";


export const setAllImagesAC = (payload: ImgType[]) => ({
    type: SET_ALL_IMAGES,
    payload
} as const)

export const fetchImagesTC = () => {
    return async (dispatch: Dispatch) => {
        try {
            const response = await storageWorker.getAllImages()
            dispatch(setAllImagesAC(response))
        } catch (e) {
            console.log(e)
        }

    }
}

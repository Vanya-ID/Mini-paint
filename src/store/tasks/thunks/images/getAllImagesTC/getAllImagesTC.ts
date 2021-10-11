import {Dispatch} from "redux";
import {ImgType} from "../../../../reducers/imagesReducer/imagesType";
import {GET_ALL_IMAGES} from "../../../../../constants/constants";
import {getImagesWorker} from "../../../../../imagesWorker/getImagesWorker/getImagesWorker";


export const getAllImagesAC = (payload: ImgType[]) => ({
    type: GET_ALL_IMAGES,
    payload
} as const)

export const getAllImagesTC = () => {
    return async (dispatch: Dispatch) => {
        try {
            const response = await getImagesWorker.getAllImages()
            dispatch(getAllImagesAC(response))
        } catch (e) {
            console.log(e)
        }
    }
}
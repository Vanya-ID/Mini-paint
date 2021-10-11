import {Dispatch} from "redux";
import {saveImgToCollections} from "../../../../../imagesWorker/saveImages/saveImgToCollections";
import {saveImgToImages} from "../../../../../imagesWorker/saveImages/saveImgToImages";
import {SAVE_IMAGE} from "../../../../../constants/constants";


export const saveImageAC = (imgURL: string, imageName: string, userName: string) => ({
    type: SAVE_IMAGE,
    imgURL,
    userName,
    imageName
} as const)

export const saveImageTC = (imgURL: string, imageName: string, userName: string) => {
    return async (dispatch: Dispatch) => {
        try {
            await saveImgToCollections(imgURL, imageName)
            await saveImgToImages(imgURL, imageName, userName)
            dispatch(saveImageAC(imgURL, imageName, userName))
        } catch (e) {
            console.log(e)
        }

    }
}

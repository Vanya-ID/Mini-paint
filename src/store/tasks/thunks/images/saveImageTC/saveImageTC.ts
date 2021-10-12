import {Dispatch} from "redux";
import {SAVE_IMAGE} from "../../../../../constants/constants";
import {databaseWorker} from "../../../../../imagesWorker/databaseWorker/databaseWorker";
import {storageWorker} from "../../../../../imagesWorker/storageWorker/storageWorker";


export const saveImageAC = (imgURL: string, imageName: string, userName: string) => ({
    type: SAVE_IMAGE,
    imgURL,
    userName,
    imageName
} as const)

export const saveImageTC = (imgURL: string, imageName: string, userName: string) => {
    return async (dispatch: Dispatch) => {
        try {
            await storageWorker.saveImgToCollections(imgURL, imageName)
            await databaseWorker.saveImgToImages(imgURL, imageName, userName)
            dispatch(saveImageAC(imgURL, imageName, userName))
        } catch (e) {
            console.log(e)
        }

    }
}

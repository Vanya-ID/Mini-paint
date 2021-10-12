import {databaseWorker} from "../../../../../imagesWorker/databaseWorker/databaseWorker";
import {storageWorker} from "../../../../../imagesWorker/storageWorker/storageWorker";
import {saveImage} from "../../../../reducers/imagesReducer/imagesReducer";
import {createAsyncThunk} from "@reduxjs/toolkit";


type saveImageTCType = {
    imgURL: string, imageName: string, userName: string
}

export const saveImageTC = createAsyncThunk('images/saveImage', async ({
                                                                             imgURL,
                                                                             imageName,
                                                                             userName
                                                                         }: saveImageTCType, thunkAPI) => {
        try {
            await storageWorker.saveImgToCollections(imgURL, imageName)
            await databaseWorker.saveImgToImages(imgURL, imageName, userName)
            const payload = {imgURL, imageName, userName}
            thunkAPI.dispatch(saveImage(payload))
        } catch (e) {
            console.log(e)
        }

    }
)


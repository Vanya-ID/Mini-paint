import {storageWorker} from "../../../../../imagesWorker/storageWorker/storageWorker";
import {setCurrentImages} from "../../../../reducers/imagesReducer/imagesReducer";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const getCurrentImagesTC = createAsyncThunk('images/getCurrentImages', async (userName: string, thunkAPI) => {
    try {
        let response = await storageWorker.getCurrentImages()
        thunkAPI.dispatch(setCurrentImages({currentImages: response, userName}))
    } catch (e) {
        console.log(e)
    }
})

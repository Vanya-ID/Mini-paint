import {storageWorker} from "../../../../../imagesWorker/storageWorker/storageWorker";
import {getAllImages} from "../../../../reducers/imagesReducer/imagesReducer";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const getAllImagesTC = createAsyncThunk('images/getAllImages', async (arg, thunkAPI) => {
    try {
        const response = await storageWorker.getAllImages()
        thunkAPI.dispatch(getAllImages(response))
    } catch (e) {
        console.log(e)
    }

})

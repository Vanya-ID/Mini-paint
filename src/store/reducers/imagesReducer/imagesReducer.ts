import {ImgType} from "./imagesType";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    images: [] as ImgType[],
}

const slice = createSlice({
    name: 'images',
    initialState: initialState,
    reducers: {
        saveImage(state, action: PayloadAction<ImgType>) {
            state.images.unshift(action.payload)
        },
        setCurrentImages(state, action:  PayloadAction<{currentImages: ImgType[], userName:string}>) {
            state.images = action.payload.currentImages.filter(el => el.userName.toLowerCase() === action.payload.userName.toLowerCase())
        },
        getAllImages(state, action: PayloadAction<ImgType[]>) {
            state.images = action.payload
        },
    }
})

export const {saveImage, setCurrentImages, getAllImages} = slice.actions

export const imagesReducer = slice.reducer




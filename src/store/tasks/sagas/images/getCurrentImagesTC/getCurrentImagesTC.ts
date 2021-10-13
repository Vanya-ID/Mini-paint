import {storageWorker} from "../../../../../imagesWorker/storageWorker/storageWorker";
import {setCurrentImages} from "../../../../reducers/imagesReducer/imagesReducer";
import {createAction, PayloadAction} from "@reduxjs/toolkit";
import {ImgType} from "../../../../reducers/imagesReducer/imagesType";
import {call, put, takeLatest} from "redux-saga/effects";

export const getCurrentImagesRequest = createAction<string>('getCurrentImagesRequest');

type getCurrentImagesType = {
    currentImages: ImgType[]
    userName: string
}

export const getCurrentImagesTC = async (userName: string) => {
    let response = await storageWorker.getCurrentImages()
    return {currentImages: response, userName}
}

function* getCurrentImagesWorker(action: PayloadAction<string>) {
    try {
        const {currentImages, userName}: getCurrentImagesType = yield call(getCurrentImagesTC, action.payload);
        yield put(setCurrentImages({currentImages, userName}));
    } catch (e) {
        console.log(e)
    }
}

export function* getCurrentImagesWatcher() {
    yield takeLatest(getCurrentImagesRequest.type, getCurrentImagesWorker);
}
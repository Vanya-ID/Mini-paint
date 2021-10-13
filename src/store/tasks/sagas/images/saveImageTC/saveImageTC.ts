import {databaseWorker} from "../../../../../imagesWorker/databaseWorker/databaseWorker";
import {storageWorker} from "../../../../../imagesWorker/storageWorker/storageWorker";
import {saveImage} from "../../../../reducers/imagesReducer/imagesReducer";
import {call, put, takeLatest} from 'redux-saga/effects';
import {ImgType} from "../../../../reducers/imagesReducer/imagesType";
import {createAction, PayloadAction} from "@reduxjs/toolkit";

type saveImageTCType = {
    imgURL: string, imageName: string, userName: string
}

export const saveImageRequest = createAction<ImgType>('saveImageRequest');

export const saveImageTC = async ({imgURL, imageName, userName}: saveImageTCType) => {
    try {
        await storageWorker.saveImgToCollections(imgURL, imageName)
        await databaseWorker.saveImgToImages(imgURL, imageName, userName)
        return {imgURL, imageName, userName}
    } catch (e) {
        console.log(e)
    }
}

function* saveImageWorker(action: PayloadAction<ImgType>) {
    const data: ImgType = yield call(saveImageTC, action.payload);
    yield put(saveImage(data));
}
export function* saveImageWatcher() {
    yield takeLatest(saveImageRequest.type, saveImageWorker);
}
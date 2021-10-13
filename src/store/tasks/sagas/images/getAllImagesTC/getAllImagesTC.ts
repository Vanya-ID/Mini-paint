import {storageWorker} from "../../../../../imagesWorker/storageWorker/storageWorker";
import {getAllImages} from "../../../../reducers/imagesReducer/imagesReducer";
import {createAction} from "@reduxjs/toolkit";
import {call, put, takeLatest} from "redux-saga/effects";
import {ImgType} from "../../../../reducers/imagesReducer/imagesType";

export const getAllImagesRequest = createAction('getAllImagesRequest')

export const getAllImagesTC = async () => {
    return await storageWorker.getAllImages()
}

function* getAllImagesWorker() {
    try {
        const images: ImgType[] = yield call(getAllImagesTC);
        yield put(getAllImages(images));
    } catch (e) {
        console.log(e)
    }
}

export function* getAllImagesWatcher() {
    yield takeLatest(getAllImagesRequest.type, getAllImagesWorker);
}

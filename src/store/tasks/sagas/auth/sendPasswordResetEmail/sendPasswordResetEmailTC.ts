import firebase from "firebase/compat";
import {setError, setSuccess} from "../../../../reducers/authReducer/authReducer";
import {createAction, PayloadAction} from "@reduxjs/toolkit";
import {call, put, takeLatest} from "redux-saga/effects";

type sendPasswordResetEmailType = {
    email: string
    successMsg: string
}

export const sendPasswordResetEmailRequest = createAction<sendPasswordResetEmailType>('sendPasswordResetEmailRequest')

export const sendPasswordResetEmailTC = async (data: sendPasswordResetEmailType) => {
    await firebase.auth().sendPasswordResetEmail(data.email)
}


function* sendPasswordResetEmailWorker(action: PayloadAction<sendPasswordResetEmailType>) {
    try {
        yield call(sendPasswordResetEmailTC, action.payload);
        yield put(setSuccess({success: action.payload.successMsg}))

    } catch (err) {
        let errMessage = 'Failed to do some exceptional'
        if (err instanceof Error) {
            errMessage = err.message
        }
        yield put(setError({error: errMessage}))
    }
}

export function* sendPasswordResetEmailWatcher() {
    yield takeLatest(sendPasswordResetEmailRequest.type, sendPasswordResetEmailWorker);
}


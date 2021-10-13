import firebase from "firebase/compat";
import {setError} from "../../../../reducers/authReducer/authReducer";
import {createAction, PayloadAction} from "@reduxjs/toolkit";
import {call, put, takeLatest} from "redux-saga/effects";

export interface SignInData {
    email: string
    password: string
    onError: () => void
}

export const signInRequest = createAction<SignInData>('signInRequest')

export const signInTC = async (data: SignInData) => {
    try {
        await firebase.auth().signInWithEmailAndPassword(data.email, data.password)
    } catch (err) {
        data.onError()
    }
}


function* signInWorker(action: PayloadAction<SignInData>) {
    try {
        yield call(signInTC, action.payload);
    } catch (err) {
        let errMessage = 'Failed to do some exceptional'
        if (err instanceof Error) {
            errMessage = err.message
        }
        yield put(setError({error: errMessage}))
    }
}

export function* signInWatcher() {
    yield takeLatest(signInRequest.type, signInWorker);
}

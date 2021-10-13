import {setError, setUser} from "../../../../reducers/authReducer/authReducer";
import firebase from "firebase/compat";
import {User} from "../../../../reducers/authReducer/authTypes";
import {createAction, PayloadAction} from "@reduxjs/toolkit";
import {call, put, takeLatest} from "redux-saga/effects";

export interface SignUpData {
    firstName: string
    email: string
    password: string
    onError: () => void
}

export const signUpRequest = createAction<SignUpData>('signUpRequest')


export const signupTC = async (data: SignUpData) => {
    try {
        const res = await firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
        if (res.user) {
            const userData: User = {
                email: data.email,
                firstName: data.firstName,
                id: res.user.uid,
                createAt: firebase.firestore.FieldValue.serverTimestamp()
            }
            await firebase.firestore().collection('/users').doc(res.user.uid).set(userData)
            return userData
        }
    } catch (err) {
        data.onError()
    }
}

function* signUpWorker(action: PayloadAction<SignUpData>) {
    try {
        const userData: User = yield call(signupTC, action.payload);
        yield put(setUser({user: userData}))
    } catch (err) {
        let errMessage = 'Failed to do some exceptional'
        if (err instanceof Error) {
            errMessage = err.message
        }
        yield put(setError({error: errMessage}))
    }
}

export function* signUpWatcher() {
    yield takeLatest(signUpRequest.type, signUpWorker);
}





import firebase from "firebase/compat";
import {User} from "../../../../reducers/authReducer/authTypes";
import {setUser} from "../../../../reducers/authReducer/authReducer";
import {createAction, PayloadAction} from "@reduxjs/toolkit";
import {call, put, takeLatest} from "redux-saga/effects";

export const getUserByIdRequest = createAction<string>('getUserByIdRequest')


export const getUserByIdTC = async (id: string) => {
    return await firebase.firestore().collection('users').doc(id).get()
}


function* getUserByIdWorker(action: PayloadAction<string>) {
    try {
        const user: {
            exists: any;
            data(): User;
        } = yield call(getUserByIdTC, action.payload);
        if (user.exists) {
            const userData = user.data() as User
            yield put(setUser({user: userData}))
        }
    } catch (err) {
        console.log(err)
    }
}

export function* getUserByIdWatcher() {
    yield takeLatest(getUserByIdRequest.type, getUserByIdWorker);
}



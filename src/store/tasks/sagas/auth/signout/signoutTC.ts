import firebase from "firebase/compat";
import {setLoading, signOut} from "../../../../reducers/authReducer/authReducer";
import {createAction} from "@reduxjs/toolkit";
import {call, put, takeLatest} from "redux-saga/effects";

export const signOutRequest = createAction('signOutRequest')

export const signOutTC = async () => {
    await firebase.auth().signOut()
}


function* signOutWorker() {
    try {
        yield put(setLoading({loading: true}))
        yield call(signOutTC);
        yield put(signOut());
    } catch (e) {
        yield put(setLoading({loading: false}))

    }
}

export function* signOutWatcher() {
    yield takeLatest(signOutRequest.type, signOutWorker);
}


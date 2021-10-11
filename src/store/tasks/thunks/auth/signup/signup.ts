import {AuthAction, User} from "../../../../reducers/authReducer/authTypes";
import {ThunkAction} from "redux-thunk";
import {RootState} from "../../../../index";
import firebase from "firebase/compat";
import {SET_ERROR, SET_USER} from "../../../../../constants/constants";

export interface SignUpData {
    firstName: string
    email: string
    password: string
}

export const signup = (data: SignUpData, onError: () => void): ThunkAction<void, RootState, null, AuthAction> => {
    return async dispatch => {
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
                dispatch({
                    type: SET_USER,
                    payload: userData
                })
            }
        } catch (err: any) {
            onError()
            dispatch({
                type: SET_ERROR,
                payload: err.message
            })
        }
    }
}

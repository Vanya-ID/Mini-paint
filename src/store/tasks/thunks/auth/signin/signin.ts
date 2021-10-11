import {AuthAction} from "../../../../reducers/authReducer/authTypes";
import {ThunkAction} from "redux-thunk";
import {RootState} from "../../../../index";
import firebase from "firebase/compat";
import {setError} from "../setError/setError";

export interface SignInData {
    email: string
    password: string
}

export const signin = (data: SignInData, onError: () => void): ThunkAction<void, RootState, null, AuthAction> => {
    return async dispatch => {
        try {
            await firebase.auth().signInWithEmailAndPassword(data.email, data.password)
        } catch (err: any) {
            onError()
            dispatch(setError(err.message))
        }
    }
}


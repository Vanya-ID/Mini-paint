import {AuthAction} from "../../../../reducers/authReducer/authTypes";
import {ThunkAction} from "redux-thunk";
import {RootState} from "../../../../index";
import firebase from "firebase/compat";
import {setError} from "../setError/setError";

export interface SignInData {
    email: string
    password: string
    onError: () => void
}

export const signin = (data: SignInData): ThunkAction<void, RootState, null, AuthAction> => {
    return async dispatch => {
        try {
            await firebase.auth().signInWithEmailAndPassword(data.email, data.password)
        } catch (err) {
            data.onError()
            let errMessage = 'Failed to do some exceptional'
            if (err instanceof Error) {
                errMessage = err.message
            }
            dispatch(setError(errMessage))
        }
    }
}


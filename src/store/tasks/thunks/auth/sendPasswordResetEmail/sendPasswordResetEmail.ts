import {ThunkAction} from "redux-thunk";
import {RootState} from "../../../../index";
import {AuthAction} from "../../../../reducers/authReducer/authTypes";
import firebase from "firebase/compat";
import {setSuccess} from "../setSuccess/setSuccess";
import {setError} from "../setError/setError";


export const sendPasswordResetEmail = (email: string, successMsg: string): ThunkAction<void, RootState, null, AuthAction> => {
    return async dispatch => {
        try {
            await firebase.auth().sendPasswordResetEmail(email)
            dispatch(setSuccess(successMsg))
        } catch (err: any) {
            dispatch(setError(err.message))
        }
    }
}

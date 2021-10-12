import {ThunkAction} from "redux-thunk";
import {RootState} from "../../../../index";
import {AuthAction} from "../../../../reducers/authReducer/authTypes";
import firebase from "firebase/compat";
import {setSuccess} from "../setSuccess/setSuccess";
import {setError} from "../setError/setError";

type sendPasswordResetEmailType = {
    email: string
    successMsg: string
}

export const sendPasswordResetEmail = (data: sendPasswordResetEmailType): ThunkAction<void, RootState, null, AuthAction> => {
    return async dispatch => {
        try {
            await firebase.auth().sendPasswordResetEmail(data.email)
            dispatch(setSuccess(data.successMsg))
        } catch (err) {
            let errMessage = 'Failed to do some exceptional'
            if(err instanceof Error){
                errMessage = err.message
            }
            dispatch(setError(errMessage))
        }
    }
}

import {ThunkAction} from "redux-thunk";
import {RootState} from "../../../../index";
import {AuthAction} from "../../../../reducers/authReducer/authTypes";
import firebase from "firebase/compat";
import {setLoading} from "../setLoading/setLoading";
import {SIGN_OUT} from "../../../../../constants/constants";


export const signout = (): ThunkAction<void, RootState, null, AuthAction> => {
    return async dispatch => {
        try {
            dispatch(setLoading(true))
            await firebase.auth().signOut()
            dispatch({
                type: SIGN_OUT
            })
        } catch (err) {
            dispatch(setLoading(false))
        }
    }
}

export interface SignOutAction {
    type: typeof SIGN_OUT
}
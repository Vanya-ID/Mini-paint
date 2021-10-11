import {ThunkAction} from "redux-thunk";
import {RootState} from "../../../../index";
import {AuthAction, User} from "../../../../reducers/authReducer/authTypes";
import firebase from "firebase/compat";
import {SET_USER} from "../../../../../constants/constants";

export const getUserById = (id: string): ThunkAction<void, RootState, null, AuthAction> => {
    return async dispatch => {
        try {
            const user = await firebase.firestore().collection('users').doc(id).get()
            if (user.exists) {
                const userData = user.data() as User
                dispatch({
                    type: SET_USER,
                    payload: userData
                })
            }
        } catch (err) {
        }

    }
}

export interface SetUserAction {
    type: typeof SET_USER
    payload: User
}
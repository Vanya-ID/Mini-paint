import {AuthAction, User} from "../../../../reducers/authReducer/authTypes";
import {ThunkAction} from "redux-thunk";
import {RootState} from "../../../../index";
import firebase from "firebase/compat";
import {SET_USER} from "../../../../../constants/constants";
import {setError} from "../setError/setError";

export interface SignUpData {
    firstName: string
    email: string
    password: string
    onError: () => void
}

export const signup = (data: SignUpData): ThunkAction<void, RootState, null, AuthAction> => {
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

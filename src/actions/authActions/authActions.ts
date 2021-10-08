import {
    AuthAction,
    SET_ERROR,
    SET_LOADING,
    SET_SUCCESS,
    SET_USER,
    SIGN_OUT,
    SignInData,
    SignUpData,
    User
} from "../../store/authTypes";
import {ThunkAction} from 'redux-thunk'
import {RootState} from "../../store";
import firebase from "firebase/compat";

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

export const setLoading = (value: boolean): ThunkAction<void, RootState, null, AuthAction> => {
    return async dispatch => {
        dispatch({
            type: SET_LOADING,
            payload: value
        })
    }
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

export const setError = (msg: string): ThunkAction<void, RootState, null, AuthAction> => {
    return dispatch => {
        dispatch({
            type: SET_ERROR,
            payload: msg
        })
    }
}

export const setSuccess = (msg: string): ThunkAction<void, RootState, null, AuthAction> => {
    return dispatch => {
        dispatch({
            type: SET_SUCCESS,
            payload: msg
        })
    }
}

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














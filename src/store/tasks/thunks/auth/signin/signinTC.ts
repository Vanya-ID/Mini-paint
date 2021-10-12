import firebase from "firebase/compat";
import {setError} from "../../../../reducers/authReducer/authReducer";
import {createAsyncThunk} from "@reduxjs/toolkit";

export interface SignInData {
    email: string
    password: string
    onError: () => void
}

export const signinTC = createAsyncThunk('auth/signin', async (data: SignInData, thunkAPI) => {
    try {
        await firebase.auth().signInWithEmailAndPassword(data.email, data.password)
    } catch (err) {
        data.onError()
        let errMessage = 'Failed to do some exceptional'
        if (err instanceof Error) {
            errMessage = err.message
        }
        thunkAPI.dispatch(setError({error: errMessage}))
    }

})

import firebase from "firebase/compat";
import {setError, setSuccess} from "../../../../reducers/authReducer/authReducer";
import {createAsyncThunk} from "@reduxjs/toolkit";

type sendPasswordResetEmailType = {
    email: string
    successMsg: string
}

export const sendPasswordResetEmailTC = createAsyncThunk('auth/sendPasswordResetEmail', async (data: sendPasswordResetEmailType, thunkAPI) => {
        try {
            await firebase.auth().sendPasswordResetEmail(data.email)
            thunkAPI.dispatch(setSuccess({success: data.successMsg}))
        } catch (err) {
            let errMessage = 'Failed to do some exceptional'
            if (err instanceof Error) {
                errMessage = err.message
            }
            thunkAPI.dispatch(setError({error: errMessage}))
        }
    }
)


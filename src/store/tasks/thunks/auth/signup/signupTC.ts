import {User} from "../../../../reducers/authReducer/authTypes";
import firebase from "firebase/compat";
import {setError, setUser} from "../../../../reducers/authReducer/authReducer";
import {createAsyncThunk} from "@reduxjs/toolkit";

export interface SignUpData {
    firstName: string
    email: string
    password: string
    onError: () => void
}


export const signupTC = createAsyncThunk('auth/signup', async (data: SignUpData, thunkAPI) => {
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
            thunkAPI.dispatch(setUser({user: userData}))
        }
    } catch (err) {
        data.onError()
        let errMessage = 'Failed to do some exceptional'
        if (err instanceof Error) {
            errMessage = err.message
        }
        thunkAPI.dispatch(setError({error: errMessage}))
    }
})


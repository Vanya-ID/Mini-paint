import firebase from "firebase/compat";
import {setLoading, signOut} from "../../../../reducers/authReducer/authReducer";
import {createAsyncThunk} from "@reduxjs/toolkit";


export const signoutTC = createAsyncThunk('auth/signout', async (arg, thunkAPI) => {
    try {
        thunkAPI.dispatch(setLoading({loading: true}))
        await firebase.auth().signOut()
        thunkAPI.dispatch(signOut())
    } catch (err) {
        thunkAPI.dispatch(setLoading({loading: false}))
    }
})

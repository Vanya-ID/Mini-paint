import firebase from "firebase/compat";
import {User} from "../../../../reducers/authReducer/authTypes";
import {setUser} from "../../../../reducers/authReducer/authReducer";
import {createAsyncThunk} from "@reduxjs/toolkit";


export const getUserByIdTC = createAsyncThunk('auth/getUserById', async (id: string, thunkAPI) => {
    try {
        const user = await firebase.firestore().collection('users').doc(id).get()
        if (user.exists) {
            const userData = user.data() as User
            thunkAPI.dispatch(setUser({user: userData}))
        }
    } catch (e) {

    }
})

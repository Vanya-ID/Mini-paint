import {AuthState, User} from "./authTypes";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: AuthState = {
    user: null,
    authenticated: false,
    loading: false,
    error: '',
    success: ''
}

const slice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setUser(state, action: PayloadAction<{ user: User | null }>) {
            state.user = action.payload.user
            state.authenticated = true
        },
        setLoading(state, action: PayloadAction<{ loading: boolean }>) {
            state.loading = action.payload.loading
        },
        signOut(state) {
            state.user = null
            state.authenticated = false
            state.loading = false
        },
        setError(state, action: PayloadAction<{ error: string }>) {
            state.error = action.payload.error
        },
        setSuccess(state, action: PayloadAction<{ success: string }>) {
            state.success = action.payload.success

        },
    }
})

export const {setSuccess, setUser, setError, signOut, setLoading} = slice.actions

export const authReducer = slice.reducer

import {SetUserAction} from "../../tasks/thunks/auth/getUserById/getUserById";
import {SetErrorAction} from "../../tasks/thunks/auth/setError/setError";
import {SetLoadingAction} from "../../tasks/thunks/auth/setLoading/setLoading";
import {SetSuccessAction} from "../../tasks/thunks/auth/setSuccess/setSuccess";
import {SignOutAction} from "../../tasks/thunks/auth/signout/signout";


export interface User {
    firstName: string
    email: string
    id: string
    createAt: any
}

export interface AuthState {
    user: User | null
    authenticated: boolean
    loading: boolean
    error: string
    success: string
}




export type AuthAction =
    SetUserAction
    | SetLoadingAction
    | SignOutAction
    | SetErrorAction
    | SetSuccessAction


















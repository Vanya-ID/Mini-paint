import {ThunkAction} from "redux-thunk";
import {RootState} from "../../../../index";
import {AuthAction} from "../../../../reducers/authReducer/authTypes";
import {SET_ERROR} from "../../../../../constants/constants";


export const setError = (msg: string): ThunkAction<void, RootState, null, AuthAction> => {
    return dispatch => {
        dispatch({
            type: SET_ERROR,
            payload: msg
        })
    }
}

export interface SetErrorAction {
    type: typeof SET_ERROR
    payload: string
}

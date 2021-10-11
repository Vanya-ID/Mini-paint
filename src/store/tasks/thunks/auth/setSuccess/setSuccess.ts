import {ThunkAction} from "redux-thunk";
import {RootState} from "../../../../index";
import {AuthAction} from "../../../../reducers/authReducer/authTypes";
import {SET_SUCCESS} from "../../../../../constants/constants";


export const setSuccess = (msg: string): ThunkAction<void, RootState, null, AuthAction> => {
    return dispatch => {
        dispatch({
            type: SET_SUCCESS,
            payload: msg
        })
    }
}


export interface SetSuccessAction {
    type: typeof SET_SUCCESS
    payload: string
}
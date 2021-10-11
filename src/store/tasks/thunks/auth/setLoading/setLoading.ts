import {ThunkAction} from "redux-thunk";
import {RootState} from "../../../../index";
import {AuthAction} from "../../../../reducers/authReducer/authTypes";
import {SET_LOADING} from "../../../../../constants/constants";


export const setLoading = (value: boolean): ThunkAction<void, RootState, null, AuthAction> => {
    return async dispatch => {
        dispatch({
            type: SET_LOADING,
            payload: value
        })
    }
}

export interface SetLoadingAction {
    type: typeof SET_LOADING
    payload: boolean
}

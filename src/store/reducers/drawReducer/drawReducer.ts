import {SET_INSTRUMENT} from "../../../constants/constants";
import {DrawActionTypes, InitialType} from "./drawTypes";

const initialState: InitialType = {
    instrument: 'brush'
}

export const drawReducer = (state = initialState, action: DrawActionTypes): InitialType => {
    switch (action.type) {
        case SET_INSTRUMENT:
            return {
                ...state,
                instrument: action.instrument
            }
        default:
            return state
    }
}


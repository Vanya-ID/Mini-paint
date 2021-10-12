import {InitialType, InstrumentsType} from "./drawTypes";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: InitialType = {
    instrument: 'brush'
}

const slice = createSlice({
    name: 'draw',
    initialState: initialState,
    reducers: {
        setInstrument(state, action: PayloadAction<{ instrument: InstrumentsType }>) {
            state.instrument = action.payload.instrument
        }
    }
})
export const {setInstrument} = slice.actions

export const drawReducer = slice.reducer


import {setInstrument} from "../../actions/drawActions/setInstrument";

export type InitialType = {
    instrument: InstrumentsType
}

export type InstrumentsType = 'brush' | 'circle' | 'rectangle' | 'line'


export type DrawActionTypes = ReturnType<typeof setInstrument>


const initialState: InitialType = {
    instrument: 'brush'
}

export const drawReducer = (state: InitialType = initialState, action: DrawActionTypes): InitialType => {
    switch (action.type) {
        case "SET_INSTRUMENT":
            return {
                ...state,
                instrument: action.instrument
            }
        default:
            return state
    }
}

type InitialType = {
    instrument: InstrumentsType
}

export type InstrumentsType = 'brush' | 'circle' | 'rectangle' | 'line'


export const setInstrument = (instrument: InstrumentsType) => ({type: 'SET_INSTRUMENT' as string, instrument})


type DrawActionTypes = ReturnType<typeof setInstrument>


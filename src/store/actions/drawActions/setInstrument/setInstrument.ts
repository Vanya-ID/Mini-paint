import {SET_INSTRUMENT} from "../../../../constants/constants";
import {InstrumentsType} from "../../../reducers/drawReducer/drawTypes";

export const setInstrument = (instrument: InstrumentsType) => ({type: SET_INSTRUMENT as string, instrument})
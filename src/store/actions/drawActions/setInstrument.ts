import {InstrumentsType} from "../../reducers/drawReducer/drawTypes";
import {SET_INSTRUMENT} from "../../../constants/constants";

export const setInstrument = (instrument: InstrumentsType) => ({type: SET_INSTRUMENT as string, instrument})
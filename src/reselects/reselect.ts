import {RootState} from "../store";

export const selectInstrument = (state: RootState) => state.draw.instrument
export const getUserName = (state: RootState) => state.auth.user?.firstName
export const getImages = (state: RootState) => state.images.images
export const getLoading = (state: RootState) => state.auth.loading
export const getAuthenticated = (state: RootState) => state.auth.authenticated
export const getSuccess = (state: RootState) => state.auth.success
export const getError = (state: RootState) => state.auth.error

import {combineReducers} from "redux";
import {drawReducer} from "./reducers/drawReducer/drawReducer";
import {authReducer} from "./reducers/authReducer/authReducer";
import {imagesReducer} from "./reducers/imagesReducer/imagesReducer";
import {configureStore} from "@reduxjs/toolkit";
import thunk from "redux-thunk";


const rootReducer = combineReducers({
    auth: authReducer,
    draw: drawReducer,
    images: imagesReducer
})

const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
    }).prepend(thunk)
})

export type RootState = ReturnType<typeof rootReducer>

export default store
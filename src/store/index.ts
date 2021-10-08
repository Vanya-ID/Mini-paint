import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {drawReducer} from "./reducers/drawReducer";
import {authReducer} from "./reducers/authReducer";
import {imagesReducer} from "./reducers/imagesReducer";


const rootReducer = combineReducers({
    auth: authReducer,
    draw: drawReducer,
    images: imagesReducer
})

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

export type RootState = ReturnType<typeof rootReducer>

export default store
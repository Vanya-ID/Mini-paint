import {combineReducers} from "redux";
import {drawReducer} from "./reducers/drawReducer/drawReducer";
import {authReducer} from "./reducers/authReducer/authReducer";
import {imagesReducer} from "./reducers/imagesReducer/imagesReducer";
import {configureStore} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import {saveImageWatcher} from "./tasks/sagas/images/saveImageTC/saveImageTC";
import {fork} from "redux-saga/effects";
import {getCurrentImagesWatcher} from "./tasks/sagas/images/getCurrentImagesTC/getCurrentImagesTC";
import {getAllImagesWatcher} from "./tasks/sagas/images/getAllImagesTC/getAllImagesTC";
import {signOutWatcher} from "./tasks/sagas/auth/signout/signoutTC";
import {signInWatcher} from "./tasks/sagas/auth/signin/signinTC";
import {sendPasswordResetEmailWatcher} from "./tasks/sagas/auth/sendPasswordResetEmail/sendPasswordResetEmailTC";
import {getUserByIdWatcher} from "./tasks/sagas/auth/getUserById/getUserByIdTC";
import {signUpWatcher} from "./tasks/sagas/auth/signup/signupTC";


const rootReducer = combineReducers({
    auth: authReducer,
    draw: drawReducer,
    images: imagesReducer
})

const sagaMiddleware = createSagaMiddleware()


const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false,
        thunk: true,
    }).concat(sagaMiddleware)
})

function* rootSaga() {
    yield fork(saveImageWatcher)
    yield fork(getCurrentImagesWatcher)
    yield fork(getAllImagesWatcher)
    yield fork(signOutWatcher)
    yield fork(signInWatcher)
    yield fork(sendPasswordResetEmailWatcher)
    yield fork(getUserByIdWatcher)
    yield fork(signUpWatcher)
}

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof rootReducer>

export default store
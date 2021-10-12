import React, {FC, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import firebase from "firebase/compat";
import {Loader} from "./components/Loader/Loader";
import {BrowserRouter} from "react-router-dom";
import {Header} from "./components/Header/Header";
import {ThemeProvider} from "styled-components";
import {theme} from "./shared/styles/theme";
import {getLoading} from "./reselects/reselect";
import {Router} from "./router/router";
import {getUserByIdTC} from "./store/tasks/thunks/auth/getUserById/getUserByIdTC";
import {GlobalStyles} from "./shared/styles/global";
import {setLoading} from "./store/reducers/authReducer/authReducer";

const App: FC = React.memo(() => {

    const dispatch = useDispatch()
    const loading = useSelector(getLoading)

    useEffect(() => {
        dispatch(setLoading({loading:true}))
        const unsubscribe = firebase.auth().onAuthStateChanged(async (user) => {
            if (user) {
                dispatch(setLoading({loading:true}))
                await dispatch(getUserByIdTC(user.uid))
            }
            dispatch(setLoading({loading:false}))
        })

        return () => {
            unsubscribe()
        }
    }, [dispatch])

    if (loading) {
        return <Loader/>
    }

    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <GlobalStyles/>
                <Header/>
                <Router/>
            </ThemeProvider>
        </BrowserRouter>
    );
})

export default App;

import React, {FC, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getUserById, setLoading} from "./actions/authActions/authActions";
import firebase from "firebase/compat";
import {Loader} from "./components/utils/Loader/Loader";
import {BrowserRouter, Switch} from "react-router-dom";
import {Header} from "./components/Header/Header";
import {PublicRoute} from "./auth/PublicRoute";
import {SignUp} from "./components/pages/SignUp/SignUp";
import {SignIn} from "./components/pages/SignIn/SignIn";
import {ForgotPassword} from "./components/pages/ForgotPassword/ForgotPassword";
import {DashBoard} from "./components/DashBoard/DashBoard";
import {PrivateRoute} from "./auth/PrivateRoute";
import {GlobalStyles} from './styles/Global';
import {ThemeProvider} from "styled-components";
import {theme} from "./styles/thme";
import {Homepage} from "./components/Homepage/Homepage";
import {ImgCollections} from "./components/ImgCollections/ImgCollections";
import {getLoading} from "./reselects/reselect";


const App: FC = React.memo(() => {

    const dispatch = useDispatch()
    const loading = useSelector(getLoading)

    useEffect(() => {
        dispatch(setLoading(true))
        const unsubscribe = firebase.auth().onAuthStateChanged(async (user) => {
            if (user) {
                dispatch(setLoading(true))
                await dispatch(getUserById(user.uid))
            }
            dispatch(setLoading(false))
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
                <Switch>
                    <PublicRoute path={'/'} component={Homepage} exact/>
                    <PublicRoute path={'/signup'} component={SignUp} exact/>
                    <PublicRoute path={'/signin'} component={SignIn} exact/>
                    <PublicRoute path={'/forgot-password'} component={ForgotPassword} exact/>
                    <PrivateRoute path={'/dashboard'} component={DashBoard} exact/>
                    <PrivateRoute path={'/images'} component={ImgCollections} exact/>
                </Switch>
            </ThemeProvider>
        </BrowserRouter>
    );
})

export default App;

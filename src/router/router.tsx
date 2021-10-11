import {Switch} from "react-router-dom";
import {PublicRoute} from "../auth/PublicRoute";
import {SignUp} from "../pages/SignUp/SignUp";
import {SignIn} from "../pages/SignIn/SignIn";
import {ForgotPassword} from "../pages/ForgotPassword/ForgotPassword";
import {PrivateRoute} from "../auth/PrivateRoute";
import {DashBoard} from "../components/DashBoard/DashBoard";
import {ImgCollections} from "../components/ImgCollections/ImgCollections";
import React from "react";

export const Router = React.memo(() => {
    return (
        <Switch>
            <PublicRoute path='/signup' component={SignUp} exact/>
            <PublicRoute path='/signin' component={SignIn} exact/>
            <PublicRoute path='/forgot-password' component={ForgotPassword} exact/>
            <PrivateRoute path='/dashboard' component={DashBoard} exact/>
            <PrivateRoute path='/images' component={ImgCollections} exact/>
            <PublicRoute path='/' component={SignIn} />
        </Switch>
    )
})
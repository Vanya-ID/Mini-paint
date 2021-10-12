import React, {FC} from "react";
import {Login} from "../Login/Login";
import {signupTC} from "../../store/tasks/thunks/auth/signup/signupTC";

export const SignUp: FC =  React.memo(() => {
    return (
        <Login type='Sign Up' eventFunction={signupTC}/>
    )
})
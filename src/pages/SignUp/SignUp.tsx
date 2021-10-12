import React, {FC} from "react";
import {Login} from "../Login/Login";
import {signup} from "../../store/tasks/thunks/auth/signup/signup";

export const SignUp: FC =  React.memo(() => {
    return (
        <Login type='Sign Up' eventFunction={signup}/>
    )
})
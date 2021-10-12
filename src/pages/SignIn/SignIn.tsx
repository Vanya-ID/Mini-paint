import React, {FC} from "react";
import {Login} from "../Login/Login";
import {signinTC} from "../../store/tasks/thunks/auth/signin/signinTC";

export const SignIn: FC =  React.memo(() => {
    return (
      <Login type='Sign In' eventFunction={signinTC}/>
    )
})
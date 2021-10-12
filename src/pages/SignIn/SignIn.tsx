import React, {FC} from "react";
import {Login} from "../Login/Login";
import {signin} from "../../store/tasks/thunks/auth/signin/signin";

export const SignIn: FC =  React.memo(() => {
    return (
      <Login type='Sign In' eventFunction={signin}/>
    )
})
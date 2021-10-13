import React, {FC} from "react";
import {Login} from "../Login/Login";
import {signInRequest} from "../../store/tasks/sagas/auth/signin/signinTC";

export const SignIn: FC = React.memo(() => {
    return (
        <Login type='Sign In' eventFunction={signInRequest}/>
    )
})
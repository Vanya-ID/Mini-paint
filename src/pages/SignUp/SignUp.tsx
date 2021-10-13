import React, {FC} from "react";
import {Login} from "../Login/Login";
import {signUpRequest} from "../../store/tasks/sagas/auth/signup/signupTC";

export const SignUp: FC = React.memo(() => {
    return (
        <Login type='Sign Up' eventFunction={signUpRequest}/>
    )
})
import React, {FC} from "react";
import {Login} from "../Login/Login";

export const ForgotPassword: FC =  React.memo(() => {

    return (
        <Login type={'Reset Password'}/>
    )
})
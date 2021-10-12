import React, {FC} from "react";
import {Login} from "../Login/Login";
import {sendPasswordResetEmail} from "../../store/tasks/thunks/auth/sendPasswordResetEmail/sendPasswordResetEmail";

export const ForgotPassword: FC =  React.memo(() => {

    return (
        <Login type='Reset Password' eventFunction={sendPasswordResetEmail}/>
    )
})
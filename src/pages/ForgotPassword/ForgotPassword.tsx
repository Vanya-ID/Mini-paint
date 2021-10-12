import React, {FC} from "react";
import {Login} from "../Login/Login";
import {sendPasswordResetEmailTC} from "../../store/tasks/thunks/auth/sendPasswordResetEmail/sendPasswordResetEmailTC";

export const ForgotPassword: FC =  React.memo(() => {

    return (
        <Login type='Reset Password' eventFunction={sendPasswordResetEmailTC}/>
    )
})
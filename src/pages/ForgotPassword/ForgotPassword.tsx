import React, {FC} from "react";
import {Login} from "../Login/Login";
import {sendPasswordResetEmailRequest} from "../../store/tasks/sagas/auth/sendPasswordResetEmail/sendPasswordResetEmailTC";

export const ForgotPassword: FC = React.memo(() => {

    return (
        <Login type='Reset Password' eventFunction={sendPasswordResetEmailRequest}/>
    )
})
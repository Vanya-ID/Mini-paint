import React, {FC} from "react";
import {Login} from "../Login/Login";

export const SignUp: FC =  React.memo(() => {
    return (
        <Login type={'Sign Up'}/>
    )
})
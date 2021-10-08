import React, {FC} from "react";
import {Login} from "../Login/Login";

export const SignIn: FC =  React.memo(() => {
    return (
      <Login type={'Sign In'}/>
    )
})
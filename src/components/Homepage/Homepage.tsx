import React, {FC} from "react";
import {HomepageWrapper} from "./Homepage.style";

export const Homepage: FC = React.memo(() => {
    return (
        <section>
            <HomepageWrapper>
                <h1>Sign in please!</h1>
            </HomepageWrapper>
        </section>
    )
})
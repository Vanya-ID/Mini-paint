import React, {FC} from "react";
import {MessageBlock} from "./Message.style";
import {MessagePropsType} from "./Message.type";


export const Message: FC<MessagePropsType> = React.memo(({msg, type}) => {
    msg = msg.replace(/firebase: /ig, '').split('.', 1).join('')
    return (
        <MessageBlock type={type}>
            <div>{msg}</div>
        </MessageBlock>
    )
})
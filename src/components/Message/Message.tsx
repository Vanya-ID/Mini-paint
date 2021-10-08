import React, {FC} from "react";
import {MessageBlock} from "./Message.style";


interface MessageProps {
    msg: string
    type: 'danger' | 'success'
}

export const Message: FC<MessageProps> = React.memo(({msg, type}) => {
    msg = msg.replace(/firebase: /ig, '').split('.', 1).join('')
    return (
        <MessageBlock type={type}>
            <div>{msg}</div>
        </MessageBlock>
    )
})
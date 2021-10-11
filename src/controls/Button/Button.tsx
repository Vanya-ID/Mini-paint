import {FC} from "react";
import {ButtonPropsType} from "./Button.type";

export const Button: FC<ButtonPropsType> = ({type, text, onClick, disabled, className}) => {
    return (
        <button type={type} className={`${className}`} onClick={onClick} disabled={disabled}>{text}</button>
    )
}
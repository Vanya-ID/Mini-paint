import {ButtonHTMLAttributes, FC} from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    text: string
    className?: string
}

export const Button: FC<ButtonProps> = ({type,text, onClick, disabled, className}) => {
    return (
        <button type={type} className={`${className}`} onClick={onClick} disabled={disabled}>{text}</button>
    )
}
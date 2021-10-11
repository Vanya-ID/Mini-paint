import {ButtonHTMLAttributes} from "react";

export interface ButtonPropsType extends ButtonHTMLAttributes<HTMLButtonElement>{
    text: string
    className?: string
}

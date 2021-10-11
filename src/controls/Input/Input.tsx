import {FC, InputHTMLAttributes} from "react";

export const Input: FC<InputHTMLAttributes<HTMLInputElement>> = ({
                                              type = 'text',
                                              onChange,
                                              placeholder,
                                              value,
                                              name
                                          }) => {
    return (
        <div>
            <div>
                <label htmlFor={name}>

                </label>
                <input type={type}
                       placeholder={placeholder}
                       value={value}
                       name={name}
                       onChange={onChange}
                       required
                       autoComplete={'off'}
                />
            </div>
        </div>
    )
}
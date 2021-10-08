import {FC, InputHTMLAttributes} from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string

}

export const Input: FC<InputProps> = ({
                                          type = 'text',
                                          onChange,
                                          placeholder,
                                          value,
                                          name, label
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
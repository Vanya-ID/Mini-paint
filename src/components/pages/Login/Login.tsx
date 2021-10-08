import {FC, FormEvent, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {sendPasswordResetEmail, setError, setSuccess, signin, signup} from "../../../actions/authActions/authActions";
import {Input} from "../../controls/Input/Input";
import {Link} from "react-router-dom";
import {FormContainer, FormSection, FormWrapper} from "./Login.style";
import {Message} from "../../Message/Message";
import {FormButton} from "../../styles";
import {getError, getSuccess} from "../../../reselects/reselect";

type LoginPropsType = {
    type: 'Sign In' | 'Reset Password' | 'Sign Up'
}

export const Login: FC<LoginPropsType> = ({type}) => {
    const [firstName, setFirstName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)

    const dispatch = useDispatch()
    const success = useSelector(getSuccess)
    const error = useSelector(getError)

    useEffect(() => {
        return () => {
            if (error) {
                dispatch(setError(''))
            }
            if (success) {
                dispatch(setSuccess(' '))
            }
        }
    }, [error, dispatch, success])

    let submitHandler;

    if (type === 'Reset Password') {
        submitHandler = async (e: FormEvent) => {
            e.preventDefault()
            setLoading(true)
            type === 'Reset Password' && await dispatch(sendPasswordResetEmail(email, 'Email sent!'))
            setLoading(false)
        }
    } else {
        submitHandler = (e: FormEvent) => {
            e.preventDefault()
            setLoading(true)
            type === 'Sign Up' && dispatch(signup({email, password, firstName}, () => setLoading(false)))
            type === 'Sign In' && dispatch(signin({email, password}, () => setLoading(false)))
        }
    }

    return (
        <FormSection>
            <FormContainer>
                <h1>
                    {type}
                </h1>
                <FormWrapper onSubmit={submitHandler}>
                    <Message msg={error ? error : success} type={`${error ? 'danger' : 'success'}`}/>
                    {type === 'Sign Up' && <Input
                        label={'First name'}
                        placeholder={'first name'}
                        name={'Firstname'}
                        value={firstName}
                        onChange={(e) => setFirstName(e.currentTarget.value)}
                    />}
                    <Input
                        type={'email'}
                        label={'email'}
                        placeholder={'email'}
                        name={'email'}
                        value={email}
                        onChange={(e) => {
                            setEmail(e.currentTarget.value)
                            dispatch(setError(''))
                            dispatch(setSuccess(''))
                        }}
                    />
                    {type !== 'Reset Password' && <Input
                        type={'password'}
                        label={'password'}
                        placeholder={'password'}
                        name={'password'}
                        value={password}
                        onChange={(e) => setPassword(e.currentTarget.value)}
                    />}
                    {type === 'Sign In' && <p>
                        <Link to={'/forgot-password'}>
                            Forgot password ?
                        </Link>
                    </p>}
                    <FormButton width={'320px'} text={loading ? 'Loading...' : type} disabled={loading}/>
                </FormWrapper>
            </FormContainer>
        </FormSection>
    )
}
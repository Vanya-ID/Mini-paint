import {FC, FormEvent, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Input} from "../../controls/Input/Input";
import {Link} from "react-router-dom";
import {FormContainer, FormSection, FormWrapper} from "./Login.style";
import {Message} from "../../components/Message/Message";
import {FormButton} from "../../shared/styles";
import {getError, getSuccess} from "../../reselects/reselect";
import {sendPasswordResetEmail} from "../../store/tasks/thunks/auth/sendPasswordResetEmail/sendPasswordResetEmail";
import {signup} from "../../store/tasks/thunks/auth/signup/signup";
import {signin} from "../../store/tasks/thunks/auth/signin/signin";
import {setError} from "../../store/tasks/thunks/auth/setError/setError";
import {setSuccess} from "../../store/tasks/thunks/auth/setSuccess/setSuccess";

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
            await dispatch(sendPasswordResetEmail(email, 'Email sent!'))
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
                        placeholder='first name'
                        name='Firstname'
                        value={firstName}
                        onChange={(e) => setFirstName(e.currentTarget.value)}
                    />}
                    <Input
                        type='email'
                        placeholder='email'
                        name='email'
                        value={email}
                        onChange={(e) => {
                            setEmail(e.currentTarget.value)
                            dispatch(setError(''))
                            dispatch(setSuccess(''))
                        }}
                    />
                    {type !== 'Reset Password' && <Input
                        type='password'
                        placeholder='password'
                        name='password'
                        value={password}
                        onChange={(e) => setPassword(e.currentTarget.value)}
                    />}
                    {type === 'Sign In' && <p>
                        <Link to='/forgot-password'>
                            Forgot password ?
                        </Link>
                    </p>}
                    <FormButton width='320px' text={loading ? 'Loading...' : type} disabled={loading}/>
                </FormWrapper>
            </FormContainer>
        </FormSection>
    )
}
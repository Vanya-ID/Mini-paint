import React, {FC, FormEvent, useCallback, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Input} from "../../controls/Input/Input";
import {Link} from "react-router-dom";
import {FormContainer, FormSection, FormWrapper} from "./Login.style";
import {Message} from "../../components/Message/Message";
import {FormButton} from "../../shared/styles";
import {getError, getSuccess} from "../../reselects/reselect";
import {setError} from "../../store/tasks/thunks/auth/setError/setError";
import {setSuccess} from "../../store/tasks/thunks/auth/setSuccess/setSuccess";
import {LoginPropsType} from "./Login.type";


export const Login: FC<LoginPropsType> = React.memo(({type, eventFunction}) => {
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

    const submitHandler = useCallback(async (e: FormEvent) => {
        const data = {email, firstName, password, successMsgL: 'Email Sent!', onError: () => setLoading(false)}
        e.preventDefault()
        setLoading(true)
        await dispatch(eventFunction(data))
        // dispatch(signup({email, password, firstName}))
        // dispatch(signin({email, password}))

        setLoading(false)
    }, [dispatch, email, firstName, password, eventFunction])
    // submitHandler = (e: FormEvent) => {
    //     e.preventDefault()
    //     setLoading(true)
    //     type === 'Sign Up' && dispatch(signup({email, password, firstName}, () => setLoading(false)))
    //     type === 'Sign In' && dispatch(signin({email, password}, () => setLoading(false)))
    // }

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
})
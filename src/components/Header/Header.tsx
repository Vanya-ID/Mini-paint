import React, {FC, useCallback} from "react";
import {NavLink, useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {FormButton} from "../../shared/styles";
import {ButtonContainer, HeaderContainer} from "./Header.style";
import {getAuthenticated} from "../../reselects/reselect";
import {signOutRequest} from "../../store/tasks/sagas/auth/signout/signoutTC";

export const Header: FC = React.memo(() => {
    const history = useHistory()
    const dispatch = useDispatch()
    const authenticated = useSelector(getAuthenticated)

    const logoutClickHandler = useCallback(() => {
        dispatch(signOutRequest())
    }, [dispatch])

    const signupHandler = useCallback(() => {
        history.push('/signupTC')
    }, [history])
    const signinHandler = useCallback(() => {
        history.push('/signinTC')
    }, [history])

    return (
        <HeaderContainer>
            <div>
                {authenticated
                    ? <>
                        <NavLink activeStyle={{color: '#ac9c8e'}} to={!authenticated ? '/' : '/images'}>Images</NavLink>
                        <NavLink activeStyle={{color: '#ac9c8e'}}
                                 to={!authenticated ? '/' : '/dashboard'}>Paint</NavLink>
                    </>
                    : null}
            </div>
            <div>
                {!authenticated ?
                    <ButtonContainer>
                        <FormButton marginRight='25px' text='Sign up' onClick={signupHandler}/>
                        <FormButton text='Sign in' onClick={signinHandler}/>
                    </ButtonContainer>
                    :
                    <FormButton text='Sign out' onClick={logoutClickHandler}/>
                }
            </div>
        </HeaderContainer>
    )
})
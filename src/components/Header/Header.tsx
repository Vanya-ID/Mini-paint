import {FC} from "react";
import {NavLink, useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {signout} from "../../actions/authActions/authActions";
import {FormButton} from "../styles";
import {ButtonContainer, HeaderContainer} from "./Header.style";
import {getAuthenticated} from "../../reselects/reselect";

export const Header: FC = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const authenticated = useSelector(getAuthenticated)

    const logoutClickHandler = () => {
        dispatch(signout())
    }

    return (
        <HeaderContainer>
            <div>
                <NavLink activeStyle={{color: '#ac9c8e'}} to={!authenticated ? '/' : '/images'}>Images</NavLink>
                <NavLink activeStyle={{color: '#ac9c8e'}} to={!authenticated ? '/' : '/dashboard'}>Paint</NavLink>
            </div>
            <div>
                {!authenticated ?
                    <ButtonContainer>
                        <FormButton marginRight={'25px'} text={'Sign up'} onClick={() => history.push('/signup')}/>
                        <FormButton text={'Sign in'} onClick={() => history.push('/signin')}/>
                    </ButtonContainer>
                    :
                    <FormButton text={'Sign out'} onClick={logoutClickHandler}/>
                }
            </div>
        </HeaderContainer>
    )
}
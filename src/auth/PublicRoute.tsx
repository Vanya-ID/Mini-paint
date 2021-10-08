import {Redirect, Route, RouteProps} from "react-router-dom";
import {FC} from "react";
import {useSelector} from "react-redux";
import {getAuthenticated} from "../reselects/reselect";


interface Props extends RouteProps {
    component: any
}

export const PublicRoute: FC<Props> = ({component: Component, ...rest}) => {
    const authenticated = useSelector(getAuthenticated)

    return (
        <Route{...rest} render={props => !authenticated ? <Component {...props} /> : <Redirect to={'/dashboard'}/>}/>
    )
}
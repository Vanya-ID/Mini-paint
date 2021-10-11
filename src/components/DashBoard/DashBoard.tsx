import React, {FC, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Canvas} from "../Canvas/Canvas";
import {DashBoardContainer} from "./DashBoard.style";
import {getSuccess, getUserName} from "../../reselects/reselect";
import {setSuccess} from "../../store/tasks/thunks/auth/setSuccess/setSuccess";
import {fetchImagesTC} from "../../store/tasks/thunks/images/fetchImagesTC/fetchImagesTC";

export const DashBoard: FC = React.memo(() => {

    const userName = useSelector(getUserName)
    const success = useSelector(getSuccess)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchImagesTC())
        return () => {
            if (success) {
                dispatch(setSuccess(' '))
            }
        }
    }, [dispatch, success])

    return (
        <DashBoardContainer>
            <div>
                <h1>
                    Welcome {userName}
                </h1>
            </div>
            <Canvas/>
        </DashBoardContainer>
    )
})
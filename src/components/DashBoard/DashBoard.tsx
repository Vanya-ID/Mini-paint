import React, {FC, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Canvas} from "../Canvas/Canvas";
import {DashBoardContainer} from "./DashBoard.style";
import {getSuccess, getUserName} from "../../reselects/reselect";
import {getAllImagesTC} from "../../store/tasks/thunks/images/getAllImagesTC/getAllImagesTC";
import {setSuccess} from "../../store/reducers/authReducer/authReducer";

export const DashBoard: FC = React.memo(() => {

    const userName = useSelector(getUserName)
    const success = useSelector(getSuccess)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllImagesTC())
        return () => {
            if (success) {
                dispatch(setSuccess({success:' '}))
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
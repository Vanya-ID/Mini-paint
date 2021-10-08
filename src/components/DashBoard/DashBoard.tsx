import React, {FC, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setSuccess} from "../../actions/authActions/authActions";
import {Canvas} from "../Canvas/Canvas";
import {DashBoardContainer} from "./DashBoard.style";
import {fetchImagesTC} from "../../store/reducers/imagesReducer";
import {getSuccess, getUserName} from "../../reselects/reselect";

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
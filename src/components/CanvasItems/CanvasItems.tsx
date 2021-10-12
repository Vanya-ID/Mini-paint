import React, {ChangeEvent, FC, useCallback, useState} from "react";
import {
    Brush,
    ChoseColor,
    ChoseLineWidth,
    Circle,
    Eraser,
    ItemsContainer,
    Line,
    LineWidthWrapper,
    Rectangle,
    ShowWidth
} from "./CanvasItems.style";
import {FormButton} from "../../shared/styles";
import {ImageNameModal} from "../ImageNameModal/ImageNameModal";
import {useDispatch} from "react-redux";
import {InstrumentsType} from "../../store/reducers/drawReducer/drawTypes";

// @ts-ignore
import brush from '../../assets/brush.png'
// @ts-ignore
import eraser from '../../assets/eraser.png'
import {CanvasItemsPropsType} from "./CanvasItems.type";
import {setInstrument} from "../../store/reducers/drawReducer/drawReducer";

export const CanvasItems: FC<CanvasItemsPropsType> = React.memo(({
                                                                     setLineWidth,
                                                                     canvasRef,
                                                                     contextRef,
                                                                     setStrokeStyle,
                                                                     lineWidth,
                                                                     strokeStyle
                                                                 }) => {

    const [showTextModal, setTextModal] = useState<boolean>(false)
    const dispatch = useDispatch()


    const clear = useCallback(() => {
        if (canvasRef.current === null) throw new Error('Could not get сфтмфы');
        contextRef.current?.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
    }, [canvasRef, contextRef])

    const save = useCallback(() => {
        setTextModal(true)
    }, [])

    const setTool = useCallback((instrument: InstrumentsType) => {
        dispatch(setInstrument({instrument}))
    }, [dispatch])


    const choseColorHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => setStrokeStyle(e.currentTarget.value), [setStrokeStyle])
    const choseLineWidthHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => setLineWidth(+e.currentTarget.value), [setLineWidth])
    const lineHandler = useCallback(() => setTool('line'), [setTool])
    const rectangleHandler = useCallback(() => setTool('rectangle'), [setTool])
    const circleHandler = useCallback(() => setTool('circle'), [setTool])
    const brushHandler = useCallback(() => {
        setTool('brush')
    }, [setTool])
    const eraserHandler = useCallback(() => {
        setTool('brush')
        setStrokeStyle('#ffffff')
    }, [setTool, setStrokeStyle])

    return (
        <>
            <ItemsContainer>
                <FormButton text='Clear' onClick={clear}/>
                <ChoseColor value={strokeStyle} onChange={choseColorHandler} type='color'/>
                <LineWidthWrapper>
                    <ShowWidth>
                        {lineWidth}
                    </ShowWidth>
                    <ChoseLineWidth onChange={choseLineWidthHandler} min={1} max={20} defaultValue={5}
                                    type='range'/>
                </LineWidthWrapper>

                <Line onClick={lineHandler}/>
                <Rectangle onClick={rectangleHandler}/>
                <Circle onClick={circleHandler}/>
                <Brush onClick={brushHandler}>
                    <img src={brush} alt="brush"/>
                </Brush>
                <Eraser onClick={eraserHandler}>
                    <img src={eraser} alt="eraser"/>
                </Eraser>

                <FormButton onClick={save} text='Save image'/>
            </ItemsContainer>
            {
                showTextModal && <ImageNameModal canvasRef={canvasRef} closeModal={setTextModal} title='Image Name'/>
            }
        </>
    )
})
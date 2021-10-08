import React, {FC, RefObject, useState} from "react";
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
import {FormButton} from "../../styles";
import {ImageNameModal} from "../../ImageNameModal/ImageNameModal";
import {InstrumentsType, setInstrument} from "../../../store/reducers/drawReducer";
import {useDispatch} from "react-redux";
import brush from '../../../assets/brush.png'
import eraser from '../../../assets/eraser.png'

type CanvasItemsPropsType = {
    canvasRef: RefObject<HTMLCanvasElement>
    contextRef: RefObject<CanvasRenderingContext2D>
    setStrokeStyle: (stroke: string) => void
    strokeStyle: string
    setLineWidth: (width: number) => void
    lineWidth: number
}

export const CanvasItems: FC<CanvasItemsPropsType> = React.memo(props => {
    const {setLineWidth, canvasRef, contextRef, setStrokeStyle, lineWidth, strokeStyle} = props

    const [showTextModal, setTextModal] = useState<boolean>(false)
    const dispatch = useDispatch()


    const clear = () => {
        if (canvasRef.current === null) throw new Error('Could not get сфтмфы');
        contextRef.current?.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
    }

    const save = () => {
        setTextModal(true)
    }

    const setTool = (instrument: InstrumentsType) => {
        dispatch(setInstrument(instrument))
    }


    return (
        <>
            <ItemsContainer>
                <FormButton text={'Clear'} onClick={clear}/>
                <ChoseColor value={strokeStyle} onChange={(e) => setStrokeStyle(e.currentTarget.value)} type={'color'}/>
                <LineWidthWrapper>
                    <ShowWidth>
                        {lineWidth}
                    </ShowWidth>
                    <ChoseLineWidth onChange={(e) => {
                        setLineWidth(+e.currentTarget.value)
                    }} min={1} max={20} defaultValue={5}
                                    type={'range'}/>
                </LineWidthWrapper>

                <Line onClick={() => setTool('line')}/>
                <Rectangle onClick={() => setTool('rectangle')}/>
                <Circle onClick={() => setTool('circle')}/>
                <Brush onClick={() => {
                    setTool('brush')
                    setStrokeStyle('#000000')
                }}>
                    <img src={brush} alt="brush"/>
                </Brush>
                <Eraser onClick={() => {
                    setTool('brush')
                    setStrokeStyle('#ffffff')
                }}>
                    <img src={eraser} alt="eraser"/>
                </Eraser>

                <FormButton onClick={save} text={'Save image'}/>
            </ItemsContainer>
            {
                showTextModal && <ImageNameModal canvasRef={canvasRef} closeModal={setTextModal} title={'Image Name'}/>
            }
        </>
    )
})
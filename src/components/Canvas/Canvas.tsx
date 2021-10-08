import React, {FC, MouseEvent, useEffect, useRef, useState} from "react";
import {CanvasItems} from "./CanvasItems/CanvasItems";
import {CanvasContainer} from "./Canvas.style";
import {useSelector} from "react-redux";
import {selectInstrument} from "../../reselects/reselect";
import {drawing} from "./CanvasItems/drawFunctions/drawing";


export const Canvas: FC = React.memo(() => {

    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    const contextRef = useRef<CanvasRenderingContext2D | null>(null)
    const [isDrawing, setIsDrawing] = useState<boolean>(false)
    const [strokeStyle, setStrokeStyle] = useState<string>('')
    const [lineWidth, setLineWidth] = useState<number>(5)

    const selectedInstrument = useSelector(selectInstrument)

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas === null) throw new Error('Could not get сфтмфы');
        canvas.width = 900
        canvas.height = 450
        canvas.style.width = `${canvas.width}px`
        canvas.style.height = `${canvas.height}px`
    }, [])

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas === null) throw new Error('Could not get canvas');
        const context = canvas.getContext('2d')
        if (context === null) throw new Error('Could not get context');
        context.scale(1, 1)
        context.lineCap = 'round'
        context.strokeStyle = strokeStyle
        context.fillStyle = strokeStyle
        context.lineWidth = lineWidth
        contextRef.current = context
    }, [lineWidth, strokeStyle])

    let context = contextRef.current;
    let canvas = canvasRef.current;

    if (contextRef && canvasRef) {
        context = contextRef.current
        canvas = canvasRef.current
    }

    let startX = 0, startY = 0, saved = '';
    const startDrawing = ({nativeEvent}: MouseEvent<HTMLCanvasElement>) => {
        saved = canvas?.toDataURL() ?? ''
        context?.beginPath()
        const {offsetX, offsetY} = nativeEvent
        startX = offsetX;
        startY = offsetY;
        context?.moveTo(offsetX, offsetY)
        setIsDrawing(true)
    }
    const {draw} = drawing({
        selectedInstrument,
        context,
        isDrawing,
        canvas,
        saved,
        startX,
        startY
    })

    const finishDrawing = () => {
        context?.closePath()
        setIsDrawing(false)
    }

    return (
        <CanvasContainer>
            <CanvasItems
                canvasRef={canvasRef}
                contextRef={contextRef}
                setStrokeStyle={setStrokeStyle}
                strokeStyle={strokeStyle}
                setLineWidth={setLineWidth}
                lineWidth={lineWidth}
            />
            <canvas
                onMouseUp={finishDrawing}
                onMouseMove={draw}
                onMouseDown={startDrawing}
                ref={canvasRef}
            />
        </CanvasContainer>
    )
})
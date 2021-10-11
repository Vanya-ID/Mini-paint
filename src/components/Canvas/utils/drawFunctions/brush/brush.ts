import {ItemsType} from "../drawing";
import {MouseEvent} from "react";

export const brush = ({context, isDrawing}: ItemsType) => {
    const draw = ({nativeEvent}: MouseEvent<HTMLCanvasElement>): void => {
        if (!isDrawing) return
        const {offsetX, offsetY} = nativeEvent
        context?.lineTo(offsetX, offsetY)
        context?.stroke()
    }

    return {draw}
}

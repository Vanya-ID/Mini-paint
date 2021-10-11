import {RefObject} from "react";

export type CanvasItemsPropsType = {
    canvasRef: RefObject<HTMLCanvasElement>
    contextRef: RefObject<CanvasRenderingContext2D>
    setStrokeStyle: (stroke: string) => void
    strokeStyle: string
    setLineWidth: (width: number) => void
    lineWidth: number
}
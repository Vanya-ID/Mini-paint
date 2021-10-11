import {ItemsType} from "../drawing";
import {MouseEvent} from "react";

export const rectangle = ({context, isDrawing, canvas, startX, startY, saved}: ItemsType) => {
    const draw = ({nativeEvent}: MouseEvent<HTMLCanvasElement>): void => {
        if (!isDrawing) return
        const {offsetX, offsetY} = nativeEvent
        const img = new Image()
        img.src = saved
        img.onload = async () => {
            if (context === null) throw new Error('Could not get context');
            if (canvas === null) throw new Error('Could not get context');
            context.clearRect(0, 0, canvas.width, canvas.height)
            context.drawImage(img, 0, 0, canvas.width, canvas.height)
            context.beginPath()
            context.rect(startX, startY, offsetX - startX, offsetY - startY)
            context.fill()
            context.stroke()
        }
    }
    return {draw}
}
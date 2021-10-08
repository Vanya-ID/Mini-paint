import {ItemsType} from "../drawing";

let startX = 0, startY = 0, saved: string;
export const line = ({context, isDrawing, canvas}: ItemsType) => {
    const draw = ({nativeEvent}: any): void => {
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
            context.moveTo(startX, startY)
            context.lineTo(offsetX, offsetY)
            context.fill()
            context.stroke()
        }
    }

    return {draw}
}
import {ItemsType} from "../drawing";

export const circle = ({context,  isDrawing, canvas, startX, startY, saved}: ItemsType) => {
    const draw = ({nativeEvent}: any): void => {
        if (!isDrawing) return
        const {offsetX, offsetY} = nativeEvent
        const img = new Image()
        img.src = saved
        img.onload = async () => {
            if (context === null) throw new Error('Could not get context');
            if (canvas === null) throw new Error('Could not get context');
            let r = Math.sqrt((offsetX - startX) ** 2 + (offsetY - startY) ** 2)
            context.clearRect(0, 0, canvas.width, canvas.height)
            context.drawImage(img, 0, 0, canvas.width, canvas.height)
            context.beginPath()
            context.arc(startX, startY, r, 0, 2 * Math.PI)
            context.fill()
            context.stroke()
        }
    }
    return { draw}
}
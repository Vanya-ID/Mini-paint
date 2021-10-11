import {brush} from "./brush/brush";
import {rectangle} from "./rectangle/rectangle";
import {circle} from "./circle/circle";
import {line} from "./line/line";
import {InstrumentsType} from "../../../../store/reducers/drawReducer/drawTypes";

export type DrawingType = ItemsType & {
    selectedInstrument: InstrumentsType

}
export type ItemsType = {
    context: CanvasRenderingContext2D | null
    isDrawing: boolean
    canvas: HTMLCanvasElement | null
    saved: string
    startX: number
    startY: number
}

export const drawing = (data: DrawingType) => {
    const {selectedInstrument, ...rest} = data

    switch (selectedInstrument) {
        case "brush":
            return brush(rest)
        case "circle":
            return circle(rest)
        case "line":
            return line(rest)
        case "rectangle":
            return rectangle(rest)
        default:
            return brush(rest)
    }
}

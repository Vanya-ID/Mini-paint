import {RefObject} from "react";

export type ModalProps = {
    closeModal: (value: boolean) => void
    title: string
    canvasRef: RefObject<HTMLCanvasElement>
}


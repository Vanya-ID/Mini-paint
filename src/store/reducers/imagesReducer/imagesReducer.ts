import {ImgType, SaveActionTypes} from "./imagesType";
import {GET_ALL_IMAGES, GET_CURRENT_IMAGES, SAVE_IMAGE, SET_ALL_IMAGES} from "../../../constants/constants";

const initialState = [] as ImgType[]

export const imagesReducer = (state: ImgType[] = initialState, action: SaveActionTypes): ImgType[] => {
    switch (action.type) {
        case SAVE_IMAGE: {
            return [
                {
                    imageName: action.imageName,
                    imgURL: action.imgURL,
                    userName: action.userName
                },
                ...state
            ]
        }
        case SET_ALL_IMAGES: {
            return action.payload.map((el: ImgType) => {
                return {
                    imageName: el.imageName,
                    imgURL: el.imgURL,
                    userName: el.userName
                }
            })
        }
        case GET_ALL_IMAGES: {
            return action.payload.map((el: ImgType) => {
                return {
                    imageName: el.imageName,
                    imgURL: el.imgURL,
                    userName: el.userName
                }
            })
        }
        case GET_CURRENT_IMAGES: {
            return action.payload.map((el: ImgType) => {
                return {
                    imageName: el.imageName,
                    imgURL: el.imgURL,
                    userName: el.userName
                }
            }).filter((el: ImgType) => el.userName.toLowerCase() === action.userName.toLowerCase())
        }
        default:
            return state
    }

}



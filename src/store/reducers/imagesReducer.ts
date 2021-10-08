import {
    getAllImagesAC,
    saveImageAC,
    setAllImagesAC,
    setCurrentImagesAC
} from "../../actions/imagesActions/imagesActions";
import {Dispatch} from "redux";
import {saveImgToImages} from "../../thunks/saveImages/saveImgToImages";
import {saveImgToCollections} from "../../thunks/saveImages/saveImgToCollections";
import {getAllImages} from "../../thunks/getImages/getAllImages";
import {getCurrentImages} from "../../thunks/getImages/getCurrentImages";

const initialState = [] as ImgType[]

export const imagesReducer = (state: ImgType[] = initialState, action: SaveActionTypes): ImgType[] => {
    switch (action.type) {
        case 'SAVE_IMAGE': {
            return [
                {
                    imageName: action.imageName,
                    imgURL: action.imgURL,
                    userName: action.userName
                },
                ...state
            ]
        }
        case "SET_ALL_IMAGES": {
            return action.payload.map(el => {
                return {
                    imageName: el.imageName,
                    imgURL: el.imgURL,
                    userName: el.userName
                }
            })
        }
        case "GET_ALL_IMAGES": {
            return action.payload.map(el => {
                return {
                    imageName: el.imageName,
                    imgURL: el.imgURL,
                    userName: el.userName
                }
            })
        }
        case "GET_CURRENT_IMAGES": {
            return action.payload.map(el => {
                return {
                    imageName: el.imageName,
                    imgURL: el.imgURL,
                    userName: el.userName
                }
            }).filter(el => el.userName.toLowerCase() === action.userName.toLowerCase())
        }
        default:
            return state
    }

}


// THUNK
export const fetchImagesTC = () => {
    return (dispatch: Dispatch) => {
        getAllImages().then((res) => {
            dispatch(setAllImagesAC(res))
        })
    }
}

export const getAllImagesTC = () => {
    return (dispatch: Dispatch) => {
        getAllImages().then((res) => {
            dispatch(getAllImagesAC(res))
        })
    }
}
export const getCurrentImagesTC = (userName: string) => {
    return (dispatch: Dispatch) => {
        getCurrentImages().then((res) => {
            dispatch(setCurrentImagesAC(res, userName))
        })
    }
}


export const saveImageTC = (imgURL: string, imageName: string, userName: string) => {
    return (dispatch: Dispatch) => {
        saveImgToCollections(imgURL, imageName).then(() => {
            saveImgToImages(imgURL, imageName, userName)
            dispatch(saveImageAC(imgURL, imageName, userName))
        })
    }
}


// TYPES
export type ImgType = {
    imgURL: string
    imageName: string
    userName: string
}


type SaveActionTypes = ReturnType<typeof saveImageAC>
    | ReturnType<typeof setCurrentImagesAC>
    | ReturnType<typeof setAllImagesAC>
    | ReturnType<typeof getAllImagesAC>


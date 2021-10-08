import firebase from "firebase/compat";
import {ImgType} from "../../store/reducers/imagesReducer";

export const getCurrentImages = async () => {

    const dates: ImgType[] = []

    await firebase.database().ref('users/').once('value', (spanshot) => {
        spanshot.forEach((ChildSnapshot) => {
            const currentDates = Object.values(ChildSnapshot.val())
            currentDates.map((el) => dates.unshift(el as ImgType))
        })
    })
    return dates
}

import firebase from "firebase/compat";
import {ImgType} from "../../store/reducers/imagesReducer";


export const getAllImages = async () => {
    const dates: ImgType[] = []
    await firebase.database().ref('images').once('value', (spanshot) => {
        spanshot.forEach((ChildSnapshot) => {
            let imageName = ChildSnapshot.val().imageName
            let imgURL = ChildSnapshot.val().imgURL
            let userName = ChildSnapshot.val().userName
            dates.unshift({imgURL, imageName, userName})
        })
    })
    return dates
}

import {ImgType} from "../../store/reducers/imagesReducer/imagesType";
import firebase from "firebase/compat";
import {getDownloadURL, getStorage, ref} from "firebase/storage";

export const getImagesWorker = {
    getAllImages: async () => {
        const dates: ImgType[] = []
        await firebase.database().ref('images').once('value', (spanshot) => {
            spanshot.forEach((childSnapshot) => {
                let imageName = childSnapshot.val().imageName
                let imgURL = childSnapshot.val().imgURL
                let userName = childSnapshot.val().userName
                dates.unshift({imgURL, imageName, userName})
            })
        })
        return dates
    },
    getCurrentImages: async () => {
        const dates: ImgType[] = []
        await firebase.database().ref('users/').once('value', (spanshot) => {
            spanshot.forEach((ChildSnapshot) => {
                const currentDates = Object.values(ChildSnapshot.val())
                currentDates.map((el) => dates.unshift(el as ImgType))
            })
        })
        return dates
    },
    getImgUrl: async (userName: string, imageName: string) => {
        let imgUrl = ''
        const storage = getStorage();
        try {
            imgUrl = await getDownloadURL(ref(storage, imageName))
        } catch (e) {
            console.log('Picture not found')

        }
        return imgUrl
    }

}
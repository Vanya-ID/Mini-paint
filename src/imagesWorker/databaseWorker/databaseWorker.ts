import {getDatabase, push, ref, set} from "firebase/database";
import {storageWorker} from "../storageWorker/storageWorker";

export const databaseWorker = {
    saveImgToImages: async (imgURL: string, imageName: string, userName: string) => {

        const url = await storageWorker.getImgUrl(userName, imageName)
        const db = getDatabase();

        const imagesRef = ref(db, `images/`)
        const newImageRef = push(imagesRef)
        set(newImageRef, {
            imageName: imageName,
            imgURL: url,
            userName: userName
        })


        const currentUserRef = ref(db, 'users/' + userName.toLowerCase())
        const newUserImageRef = push(currentUserRef)
        set(newUserImageRef, {
            imageName: imageName,
            imgURL: url,
            userName: userName
        })
    }
}


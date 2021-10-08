import {getDatabase, push, ref, set} from "firebase/database";
import {getImgUrl} from "../getImages/getImgUrl";

export const saveImgToImages = async (imgURL: string, imageName: string, userName: string) => {

    const url = await getImgUrl(userName, imageName)
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


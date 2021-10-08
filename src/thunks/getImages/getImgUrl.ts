import {getDownloadURL, getStorage, ref} from "firebase/storage";

export const getImgUrl = async (userName: string, imageName: string) => {
    let imgUrl = ''
    const storage = getStorage();
    await getDownloadURL(ref(storage, imageName))
        .then((url) => {
            // `url` is the download URL for 'images/stars.jpg'
            imgUrl = url
        }).catch((e) => {
            console.log('Не нашелл((')
        })
    return imgUrl
}

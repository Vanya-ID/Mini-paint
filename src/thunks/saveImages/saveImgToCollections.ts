import {getStorage, ref, uploadString} from "firebase/storage";

export const saveImgToCollections = async (imgURL: string, imageName: string) => {
    const storage = getStorage();
    const storageRef = ref(storage, imageName);

    await uploadString(storageRef, imgURL, 'data_url')
}

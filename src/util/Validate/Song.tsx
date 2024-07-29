import { update_songType } from "@/model/songModel";

const HandleErrors_Song = {
    isEmail: (value: string) => {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
    },
    CheckLenght: (value: string) => {
        return value.length > 3;
    },
    isNotEqual: (value1: string, value2: string) => {
        return value1 === value2;
    },
};

const Validate_Create_Song = (name: string, audio: File, artist: string) => {

    const Error: any = {};
    let status = false;
    if (!HandleErrors_Song.CheckLenght(name)) {
        Error["name"] = "Name is required";
        status = true;
    }
    if (!HandleErrors_Song.CheckLenght(artist)) {
        Error["artist"] = "Artist is required";
        status = true;
    }
    if (audio !== null) {
        const type = audio?.type.split("/")[0]
        if (type != "audio") {
            Error["audio"] = "file not type audio";
            status = true;
        }
    } else {
        Error["audio"] = "input audio is required";
        status = true;
    }

    return { status, Error };
};

const Validate_Update_Song = (value: update_songType) => {
    const Error: any = {};
    let status = false;
    if (value?.Song_Name != undefined) {
        if (!HandleErrors_Song.CheckLenght(value?.Song_Name)) {
            Error["name"] = "Name is required";
            status = true;
        }
    }

    if (value?.Artist != undefined) {
        if (!HandleErrors_Song.CheckLenght(value?.Artist)) {
            Error["name"] = "Name is required";
            status = true;
        }
    }

    if (value?.Song_Image != undefined) {
        const Img = value.Song_Image as File
        if (Img.size > 2097152) {
            Error["image"] = "Image size must be under 2MB";
            status = true;
        }
    }


    return { status, Error };
};

export { Validate_Create_Song, Validate_Update_Song };

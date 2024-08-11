import { create_Playlist, update_Playlist } from "@/model/playlistModel";

const HandleErrors_Playlist = {
    CheckLenght: (value: string) => {
        return value.length > 3;
    },
    isNotEqual: (value1: string, value2: string) => {
        return value1 === value2;
    },
};


const Validate_Playlist = (value: create_Playlist) => {
    const Error: any = {};
    let status = false;
    if (!HandleErrors_Playlist.CheckLenght(value.Playlist_Name)) {
        Error["name"] = "Name is required";
        status = true;
    }

    if (!HandleErrors_Playlist.CheckLenght(value.Artist)) {
        Error["artist"] = "Artist is required";
        status = true;
    }

    if (value?.Thumbnail != undefined && value?.Thumbnail != '') {
        const Thumnail = value.Thumbnail as File
        if (!Thumnail.type.includes('image')) {
            Error["thumnail"] = "Thumnail not type image";
            status = true;
        } else {
            if (Thumnail.size > 2097152) {
                Error["thumnail"] = "Thumnail size must be under 2MB";
                status = true;
            }
        }
    }


    if (value?.Image != undefined && value.Image != '') {
        const Image = value.Image as File
        if (!String(Image.type).includes('image')) {
            Error["image"] = "Image not type image";
            status = true;
        } else {
            if (Image.size > 2097152) {
                Error["image"] = "Image size must be under 2MB";
                status = true;
            }
        }


    }
    return { status, Error };
};



const Validate_Playlist_Update = (value: update_Playlist) => {
    const Error: any = {};
    let status = false;
    if (value?.Playlist_Name != undefined) {
        if (!HandleErrors_Playlist.CheckLenght(value.Playlist_Name)) {
            Error["name"] = "Name is required";
            status = true;
        }
    }

    if (value?.Artist != undefined) {
        if (!HandleErrors_Playlist.CheckLenght(value.Artist)) {
            Error["artist"] = "Artist is required";
            status = true;
        }
    }

    if (value?.Thumbnail != undefined && value?.Thumbnail != '') {
        const Thumnail = value.Thumbnail as File
        if (!Thumnail.type.includes('image')) {
            Error["thumnail"] = "Thumnail not type image";
            status = true;
        } else {
            if (Thumnail.size > 2097152) {
                Error["thumnail"] = "Thumnail size must be under 2MB";
                status = true;
            }
        }


    }
    if (value?.Image != undefined && value.Image != '') {
        const Image = value.Image as File
        if (!String(Image.type).includes('image')) {
            Error["image"] = "Image not type image";
            status = true;
        } else {
            if (Image.size > 2097152) {
                Error["image"] = "Image size must be under 2MB";
                status = true;
            }
        }


    }
    return { status, Error };
};

export { Validate_Playlist, Validate_Playlist_Update }
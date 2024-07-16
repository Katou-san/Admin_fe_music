const HandleErrors_Playlist = {
    CheckLenght: (value: string) => {
        return value.length > 3;
    },
    isNotEqual: (value1: string, value2: string) => {
        return value1 === value2;
    },
};


const Validate_Playlist = (name: string = "", artist: string = "") => {
    const Error: any = {};
    let status = false;
    if (!HandleErrors_Playlist.CheckLenght(name)) {
        Error["name"] = "Name is required";
        status = true;
    }

    if (!HandleErrors_Playlist.CheckLenght(artist)) {
        Error["artist"] = "Artist is required";
        status = true;
    }

    return { status, Error };
};

export { Validate_Playlist }
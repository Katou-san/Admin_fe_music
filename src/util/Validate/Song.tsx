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

const Validate_Create_Song = (name: string, audio: File) => {

    const Error: any = {};
    let status = false;
    if (!HandleErrors_Song.CheckLenght(name)) {
        Error["name"] = "Name is required";
        status = true;
    }

    if (audio !== null) {
        const type = audio?.type.split("/")[0]
        if (type != "audio") {
            Error["audio"] = "not type audio";
            status = true;
        }
    } else {
        Error["audio"] = "input audio is required";
        status = true;
    }

    return { status, Error };
};

const Validate_Update_Song = (name: string) => {
    const Error: any = {};
    let status = false;
    if (!HandleErrors_Song.CheckLenght(name)) {
        Error["name"] = "Name is required";
        status = true;
    }

    return { status, Error };
};

export { Validate_Create_Song, Validate_Update_Song };

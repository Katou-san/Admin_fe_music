import { create_artistType, update_artistType } from "@/model/artistModel";

const HandleErrors_Artist = {
    CheckLenght: (value: string) => {
        return value.length > 2;
    },
    isNotEqual: (value1: string, value2: string) => {
        return value1 === value2;
    },
};

const Validate_Create_Artist = (value: create_artistType) => {
    const Error: any = {};
    let status = false;
    if (!HandleErrors_Artist.CheckLenght(value.Artist_Name)) {
        Error["name"] = "Name is empty";
        status = true;
    }

    if (value?.User_Id != '' && value?.User_Id != undefined) {
        if (!HandleErrors_Artist.CheckLenght(value.User_Id)) {
            Error["id"] = "Creator id is empty";
            status = true;
        }
    }

    return { status, Error };
}

const Validate_Update_Artist = (value: update_artistType) => {
    const Error: any = {};
    let status = false;

    if (value?.User_Id != '' && value?.User_Id != undefined) {
        if (!HandleErrors_Artist.CheckLenght(value.User_Id)) {
            Error["id"] = "Creator id is empty";
            status = true;
        }
    }

    return { status, Error };
}

export { Validate_Create_Artist, Validate_Update_Artist }
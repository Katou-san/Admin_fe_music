import { create_subType, update_subType } from "@/model/subsModel";

const HandleErrors_Sub = {
    CheckLenght: (value: string) => {
        return value.length > 2;
    },
    isNotEqual: (value1: string, value2: string) => {
        return value1 === value2;
    },
    checkNumber: (value: number, limit: number = 6) => {
        return value > limit;
    },

};

const Validate_Create_Sub = (data: create_subType) => {
    const Error: any = {};
    let status = false;
    if (!HandleErrors_Sub.CheckLenght(data.Sub_Title)) {
        Error["title"] = "Title is empty";
        status = true;
    }

    if (!HandleErrors_Sub.CheckLenght(data.Content)) {
        Error["content"] = "Content is empty";
        status = true;
    }


    if (!HandleErrors_Sub.checkNumber(data.Price, 1000)) {
        Error["price"] = "Price is empty";
        status = true;
    }


    if (!HandleErrors_Sub.checkNumber(data.Storage, 100)) {
        Error["storage"] = "Storage min value is 100";
        status = true;
    }
    if (!HandleErrors_Sub.checkNumber(data.Duration, 10)) {
        Error["duration"] = "Duration min value is 10";
        status = true;
    }

    return { status, Error };
}


const Validate_Update_Sub = (data: update_subType) => {
    const Error: any = {};
    let status = false;
    if (data?.Sub_Title != undefined) {
        if (!HandleErrors_Sub.CheckLenght(data.Sub_Title)) {
            Error["title"] = "title is empty";
            status = true;
        }
    }

    if (data?.Content != undefined) {
        if (!HandleErrors_Sub.CheckLenght(data.Content)) {
            Error["content"] = "content is empty";
            status = true;
        }
    }


    return { status, Error };
}

export { Validate_Create_Sub, Validate_Update_Sub }
const HandleErrors_Cate = {
    CheckLenght: (value: string) => {
        return value.length > 2;
    },
    isNotEqual: (value1: string, value2: string) => {
        return value1 === value2;
    },
};

const Validate_Create_Cate = (name: string) => {
    const Error: any = {};
    let status = false;
    if (!HandleErrors_Cate.CheckLenght(name)) {
        Error["name"] = "Name is empty";
        status = true;
    }

    return { status, Error };
}

const Validate_Update_Cate = (name: string) => {
    const Error: any = {};
    let status = false;
    if (!HandleErrors_Cate.CheckLenght(name)) {
        Error["name"] = "Name is empty or invalid";
        status = true;
    }

    return { status, Error };
}

export { Validate_Create_Cate, Validate_Update_Cate }
const HandleErrors_Role = {
    CheckLenght: (value: string) => {
        return value.length > 3;
    },
    isNotEqual: (value1: string, value2: string) => {
        return value1 === value2;
    },
};

const Validate_Create_Role = (name: string, des: string) => {
    const Error: any = {};
    let status = false;
    if (!HandleErrors_Role.CheckLenght(name)) {
        Error["name"] = "Name is empty";
        status = true;
    }

    if (!HandleErrors_Role.CheckLenght(des)) {
        Error["description"] = "description is empty";
        status = true;
    }

    return { status, Error };
}


const Validate_Update_Role = (name: string, des: string) => {
    const Error: any = {};
    let status = false;
    if (!HandleErrors_Role.CheckLenght(name)) {
        Error["name"] = "Name is empty";
        status = true;
    }

    if (!HandleErrors_Role.CheckLenght(des)) {
        Error["description"] = "description is empty";
        status = true;
    }

    return { status, Error };
}


export { Validate_Create_Role, Validate_Update_Role }
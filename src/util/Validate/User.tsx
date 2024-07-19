const HandleErrors = {
    isEmail: (value: string) => {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
    },
    CheckLenght: (value: string) => {
        return value.trim().length > 4;
    },
    isNotEqual: (value1: string, value2: string) => {
        return value1 === value2;
    },
    lenghtInfo: (value1: string) => {
        console.log(value1.length)
        return value1.length == 10;
    },
};

const Validate_SignUp = (email: string, name: string, pass: string, confirmPass: string) => {
    const Error: any = {};
    let status = false;
    if (!HandleErrors.isEmail(email)) {
        Error["email"] = "Is not a valid email";
        status = true;
    }
    if (!HandleErrors.CheckLenght(name)) {
        Error["name"] = "name need more than 4 characters";
        status = true;
    }

    if (!HandleErrors.CheckLenght(pass)) {
        Error["pass"] = "Please enter password";
        status = true;
    }

    if (!HandleErrors.isNotEqual(pass, confirmPass)) {
        Error["confrimPass"] = "Password not macth";
        status = true;
    }

    return { status, Error };
};

const Validate_Login = (email: string, pass: string) => {
    const Error: any = {};
    let status = false;
    if (!HandleErrors.isEmail(email)) {
        Error["email"] = "Is not a valid email";
        status = true;
    }

    if (!HandleErrors.CheckLenght(pass)) {
        Error["pass"] = "Please enter password";
        status = true;
    }



    return { status, Error };
};


const Validate_SignUp_Employess = (email: string, name: string, pass: string, CCCD: string, phone: string) => {
    const Error: any = {};
    let status = false;
    if (!HandleErrors.isEmail(email)) {
        Error["email"] = "Is not a valid email";
        status = true;
    }
    if (!HandleErrors.CheckLenght(name)) {
        Error["name"] = "name need more than 4 characters";
        status = true;
    }

    if (!HandleErrors.CheckLenght(pass)) {
        Error["pass"] = "Please enter password";
        status = true;
    }

    if (!HandleErrors.lenghtInfo(CCCD)) {
        Error["identificationCard"] = "Identification card need 10 characters";
        status = true;
    }

    if (!HandleErrors.lenghtInfo(phone)) {
        Error["phone"] = "Phone need 10 characters";
        status = true;
    }

    return { status, Error };
};



export { Validate_SignUp, Validate_Login, Validate_SignUp_Employess };

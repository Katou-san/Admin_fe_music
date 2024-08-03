
import { create_PartnerType, update_PartnerType } from "@/model/partnerModel";


const HandleErrors = {
    CheckLenght: (value: string) => {
        return value.trim().length > 4;
    },
    CheckURL: (str: string) => {
        var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
        return !!pattern.test(str);
    },
    lenghtInfo: (value1: string) => {
        return value1.length == 10;
    },

};


export const Validate_CreatePartner = (data: create_PartnerType) => {
    const Error: any = {};
    let status = false;
    if (!HandleErrors.CheckLenght(data.Partner_Name)) {
        Error["name"] = "Name is required";
        status = true;
    }
    if (!HandleErrors.lenghtInfo(data.Phone)) {
        Error["phone"] = "Phone need 10 characters";
        status = true;
    }

    if (!HandleErrors.lenghtInfo(data.Contract_num)) {
        Error["contract"] = "Contract id need 10 characters";
        status = true;
    }

    return { status, Error };
}

export const Validate_UpdatePartner = (data: update_PartnerType) => {
    const Error: any = {};
    let status = false;
    if (data.Partner_Name != undefined) {
        if (!HandleErrors.CheckLenght(data.Partner_Name)) {
            Error["name"] = "Name is required";
            status = true;
        }
    }
    if (data.Phone != undefined) {
        if (!HandleErrors.lenghtInfo(data.Phone)) {
            Error["phone"] = "Phone need 10 characters";
            status = true;
        }
    }


    if (data.Logo != undefined) {
        // if (!HandleErrors.lenghtInfo(data.Logo)) {
        //     Error["contract"] = "Contract id need 10 characters";
        //     status = true;
        // }
    }


    return { status, Error };
}
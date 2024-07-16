

const initPartner = [{
    Partner_Id: "",
    Partner_Name: "",
    Partner_Image: "",
    Partner_Audio: "",
    Type: 0,
    Logo: "",
    Content: "",
    Link: "",
    Title: "",
    User_Id: "",
    Create_Date: "",
}]

const initCreate = {
    Partner_Name: "",
    Partner_Image: "",
    Partner_Audio: "",
    Type: 0,
    Logo: "",
    Content: "",
    Link: "",
    Title: "",
}


export const partner = {
    init: initPartner[0],
    initList: initPartner,
    initCreate: initCreate
}

export type partnerType = {
    Partner_Name: string,
    Partner_Image: any,
    Partner_Audio: any,
    Type: number,
    Logo: any,
    Content: string,
    Link: string,
    Title: string,
    User_Id: string,
    Create_Date: string,
}

export type partnerCreateType = {
    Partner_Name: string,
    Partner_Image: any,
    Partner_Audio: any,
    Type: number,
    Logo: any,
    Content: string,
    Link: string,
    Title: string,
}
export type list_PartnerType = typeof initPartner
import { partnerCreateType } from "@/model/advserModel";


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
    }

};


export const Validate_CreatePartner = (data: partnerCreateType) => {
    const Error: any = {};
    let status = false;
    if (!HandleErrors.CheckLenght(data.Partner_Name)) {
        Error["name"] = "Name is required";
        status = true;
    }
    if (!HandleErrors.CheckLenght(data.Title)) {
        Error["title"] = "Tilte is required";
        status = true;
    }
    if (!HandleErrors.CheckLenght(data.Content)) {
        Error["content"] = "content is required";
        status = true;
    }
    if (!HandleErrors.CheckLenght(data.Content)) {
        Error["title"] = "Title is required";
        status = true;
    }
    if (!HandleErrors.CheckLenght(data.Link)) {
        Error["Link"] = "Link is required";
        status = true;
    }

    return { status, Error };
}
import { create_AdsType, update_AdsType } from "@/model/advserModel";

const HandleErrors_Ads = {
    CheckLenght: (value: string) => {
        return value.length > 2;
    },
    isNotEqual: (value1: string, value2: string) => {
        return value1 === value2;
    },
    checkTime: (dateStart: Date, dateEnd: Date) => {
        return dateStart.getTime() < dateEnd.getTime();
    },
    checkImage: (value: File) => {
        return value.type.split('/')[0] == "image"
    },
    checkAudio: (value: File) => {
        return value.type.split('/')[0] == "audio"
    },
    checkSize: (value: File) => {
        return value.size < 2097152
    }
};

const Validate_Create_Ads = (value: create_AdsType) => {
    const Error: any = {};
    let status = false;
    if (!HandleErrors_Ads.CheckLenght(value.Ads_Name)) {
        Error["name"] = "Name is empty";
        status = true;
    }

    if (!HandleErrors_Ads.CheckLenght(value.Partner_Id)) {
        Error["partner"] = "partner is empty";
        status = true;
    }

    if (!HandleErrors_Ads.CheckLenght(value.Content)) {
        Error["content"] = "Content is required";
        status = true;
    }

    if (value?.Start_time != '' && value?.Start_time != undefined) {
        if (!HandleErrors_Ads.CheckLenght(value.Start_time)) {
            Error["start"] = "Start time is empty";
            status = true;
        }
    }

    if (value?.End_time != '' && value?.End_time != undefined) {
        if (!HandleErrors_Ads.CheckLenght(value.End_time)) {
            Error["end"] = "End time is empty";
            status = true;
        }
    }

    if (value?.End_time != '' && value?.End_time != undefined && value?.Start_time != '' && value?.Start_time != undefined) {
        if (!HandleErrors_Ads.checkTime(new Date(value.Start_time), new Date(value.End_time))) {
            Error["date"] = "End time is smaller than start time";
            status = true;
        }
    }



    if (value.Ads_Audio) {
        if (HandleErrors_Ads.checkSize(value.Ads_Audio)) {
            if (!HandleErrors_Ads.checkAudio(value.Ads_Audio)) {
                Error["auido"] = "Audio not type audio";
                status = true;
            }
        } else {
            Error["audio"] = "Audio size must be under 2MB";
            status = true;
        }
    } else {
        Error["audio"] = "Audio is required";
        status = true;
    }

    if (value.Ads_Image) {
        if (HandleErrors_Ads.checkSize(value.Ads_Image)) {
            if (!HandleErrors_Ads.checkImage(value.Ads_Image)) {
                Error["image"] = "Image not type image";
                status = true;
            }
        } else {
            Error["image"] = "Image size must be under 2MB";
            status = true;
        }
    } else {
        Error["image"] = "Image is required";
        status = true;
    }






    return { status, Error };
}

const Validate_Update_Ads = (value: update_AdsType) => {
    const Error: any = {};
    let status = false;
    if (value.Ads_Name != undefined) {
        if (!HandleErrors_Ads.CheckLenght(value.Ads_Name)) {
            Error["name"] = "Name is empty";
            status = true;
        }
    }


    if (value.Partner_Id != undefined) {
        if (!HandleErrors_Ads.CheckLenght(value.Partner_Id)) {
            Error["partner"] = "partner is empty";
            status = true;
        }
    }

    if (value.Content != undefined) {
        if (!HandleErrors_Ads.CheckLenght(value.Content)) {
            Error["content"] = "Content is required";
            status = true;
        }
    }


    if (value?.Start_time != undefined) {
        if (!HandleErrors_Ads.CheckLenght(value.Start_time)) {
            Error["end"] = "Start time is empty";
            status = true;
        }

    }

    if (value?.End_time != undefined) {
        if (!HandleErrors_Ads.CheckLenght(value.End_time)) {
            Error["end"] = "End time is empty";
            status = true;
        }
    }

    if (value?.End_time != '' && value?.End_time != undefined && value?.Start_time != '' && value?.Start_time != undefined) {
        if (!HandleErrors_Ads.checkTime(new Date(value.Start_time), new Date(value.End_time))) {
            Error["date"] = "End time is smaller than start time";
            status = true;
        }
    }



    if (value?.Ads_Image != undefined && value?.Ads_Image != '') {
        if (value.Ads_Image) {
            if (HandleErrors_Ads.checkSize(value.Ads_Image)) {
                if (!HandleErrors_Ads.checkImage(value.Ads_Image)) {
                    Error["image"] = "Image not type image";
                    status = true;
                }
            } else {
                Error["image"] = "Image size must be under 2MB";
                status = true;
            }
        } else {
            Error["image"] = "Image is required";
            status = true;
        }
    }





    return { status, Error };
}

export { Validate_Create_Ads, Validate_Update_Ads }
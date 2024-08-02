const list_Ads_init = [
    {
        _id: "",
        Song_Id: "",
        Song_Name: "",
        Song_Image: "",
        Song_Audio: "",
        Artist: "",
        Like: 0,
        s_Id: "",
        Category_Id: "",
        Lyrics: "",
        Tag: "",
        Color: "",
        is_Publish: true,
        Create_Date: ""
    },
];

const create_Ads = {
    Song_Name: "",
    Song_Image: null,
    Song_Audio: null,
    Artist: "",
    Like: 0,
    s_Id: "",
    Category_Id: "",
    Lyrics: "",
    Tag: "",
    Color: "",
    is_Publish: true,
}

const update_Ads = {
    Song_Name: "",
    Song_Image: null,
    Artist: "",
    Category_Id: "",
    Lyrics: "",
    Tag: "",
    Color: "",
    is_Publish: true,
}

export const AdsModel = {
    init: list_Ads_init[0],
    init_list: list_Ads_init,
    init_create: create_Ads,

}

export type AdsType = typeof list_Ads_init[0]
export type list_AdsType = typeof list_Ads_init
export type create_AdsType = {
    Song_Name: string,
    Song_Image: any,
    Song_Audio: any,
    Artist: string,
    Like: number,
    s_Id: string,
    Category_Id: string,
    Lyrics: string,
    Tag: string,
    Color: string,
    is_Publish: boolean,
}

export type update_AdsType = {
    Song_Name?: string,
    Song_Image?: any,
    Song_Audio?: any,
    Artist?: string,
    Category_Id?: string,
    Lyrics?: string,
    Tag?: string,
    Color?: string,
    is_Publish?: boolean,
}
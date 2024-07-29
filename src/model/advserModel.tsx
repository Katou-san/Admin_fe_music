const list_Advser_init = [
    {
        _id: "",
        Song_Id: "",
        Song_Name: "",
        Song_Image: "",
        Song_Audio: "",
        Artist: "",
        Like: 0,
        User_Id: "",
        Category_Id: "",
        Lyrics: "",
        Tag: "",
        Color: "",
        is_Publish: true,
        Create_Date: ""
    },
];

const create_Advser = {
    Song_Name: "",
    Song_Image: null,
    Song_Audio: null,
    Artist: "",
    Like: 0,
    User_Id: "",
    Category_Id: "",
    Lyrics: "",
    Tag: "",
    Color: "",
    is_Publish: true,
}

const update_Advser = {
    Song_Name: "",
    Song_Image: null,
    Artist: "",
    Category_Id: "",
    Lyrics: "",
    Tag: "",
    Color: "",
    is_Publish: true,
}

export const AdvserModel = {
    init: list_Advser_init[0],
    init_list: list_Advser_init,
    init_create: create_Advser,

}

export type AdvserType = typeof list_Advser_init[0]
export type list_AdvserType = typeof list_Advser_init
export type create_AdvserType = {
    Song_Name: string,
    Song_Image: any,
    Song_Audio: any,
    Artist: string,
    Like: number,
    User_Id: string,
    Category_Id: string,
    Lyrics: string,
    Tag: string,
    Color: string,
    is_Publish: boolean,
}

export type update_AdvserType = {
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
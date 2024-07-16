export const Res_song = [
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

export const Init_Create_Song = {
    Song_Name: "",
    Song_Image: null,
    Song_Audio: null,
    Category_Id: "",
    Tag: "",
    Artist: "",
    Color: "#7ad3e9",
    is_Publish: true,
}



export type Create_Song_Type = {
    Song_Name: string,
    Song_Image: any,
    Song_Audio: any,
    Category_Id: string,
    Tag?: string,
    Color?: string,
    is_Publish?: boolean,
}
export type Res_song_Type = typeof Res_song[0];
export type Update_Song_Type = typeof FormData
export type Res_List_Song_Type = typeof Res_song;

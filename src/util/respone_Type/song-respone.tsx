export const Res_song = [
    {
        _id: "",
        Song_Id: "",
        Song_Name: "",
        Song_Image: "",
        Song_Src: "",
        Like: 0,
        User_Id: "",
        Category_Id: "",
        Lyrics: "",
        Tag: "",
        Color: "",
        Is_Publish: true,
        createdAt: "",
        updatedAt: "",
        __v: 0,
    },
];

export const Init_Create_Song = {
    Song_Name: "",
    Song_Image: null,
    Song_Src: null,
    Category_Id: "",
    Tag: "",
    Color: "#7ad3e9",
    Is_Publish: true,
}



export type Create_Song_Type = {
    Song_Name: string,
    Song_Image: any,
    Song_Src: any,
    Category_Id: string,
    Tag?: string,
    Color?: string,
    Is_Publish: true,
}
export type Res_song_Type = typeof Res_song[0];
export type Update_Song_Type = typeof FormData
export type Res_List_Song_Type = typeof Res_song;

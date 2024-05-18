export const Res_Playlist = [
    {
        _id: "",
        Playlist_Id: "",
        Playlist_Name: "",
        Image: "",
        Thumbnail: "",
        User_Id: "",
        Playlist_Is_Publish: false,
        List_Song: [],
        createdAt: "",
        updatedAt: "",
        __v: 0,
    },
];

export const Init_Create_Playlist = {
    Playlist_Id: "",
    Playlist_Name: "",
    Playlist_Is_Publish: false,
    User_Id: "",
}

export type Res_Playlist_Type = typeof Res_Playlist[0];
export type Res_List_Playlist_Type = typeof Res_Playlist;
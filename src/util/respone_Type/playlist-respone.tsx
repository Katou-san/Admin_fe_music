import { Get_Current_Time } from "@/util/Time/Time_Id";

export const Res_Playlist = [
    {
        Artist: "",
        Playlist_Id: "",
        Playlist_Name: "",
        Image: "",
        Thumbnail: "",
        User_Id: "",
        is_Publish: false,
        Tracks: [],
        createdAt: "",
        Create_Date: ""
    },
];

export const Init_Create_Playlist = {
    Playlist_Id: "",
    Playlist_Name: "",
    Artist: "",
    is_Publish: true,
    Image: null,
    Thumbnail: null,
    User_Id: "",
    Type: 1,
    Post_Time: Get_Current_Time()
}

export type Create_Playlist_Type = {
    Playlist_Id: string,
    Playlist_Name: string,
    Artist: string,
    is_Publish: boolean,
    Image: any,
    Thumbnail: any,
    Type: Number,
    User_Id: string,
    Post_Time: any
}

export type Res_Playlist_Type = {
    Artist: string,
    Playlist_Id: string,
    Playlist_Name: string,
    Image: any,
    Thumbnail: any,
    User_Id: string,
    is_Publish: boolean,
    Tracks: Array<string>,
    createdAt: string,
    Create_Date: string
}


export type Res_List_Playlist_Type = typeof Res_Playlist;

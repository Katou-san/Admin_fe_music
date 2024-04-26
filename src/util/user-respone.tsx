export const Res_User = [
    {
        User_Id: "",
        User_Email: "",
        User_Name: "",
        Avatar: "",
        Roles: [],
        is_Premium: false,
        createdAt: "",
        Status: 0,
    },
];

export const Update_User = {
    User_Name: "",
    Roles: 0,
    Status: "active",
}

export type Res_User_Type = (typeof Res_User)[0];
export type Res_List_User_Type = typeof Res_User;
export type Update_User_Type = typeof Update_User
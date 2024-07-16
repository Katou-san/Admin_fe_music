export const Res_role = [
    {
        _id: "",
        Role_Id: "",
        Role_Name: "",
        Description: "",
        __v: 0,
    },
];

export const Init_Role = {
    Role_Name: "",
    Description: "",
}



export type Create_Role_Type = {
    Role_Name: string,
    Description: string,
}
export type Res_Role_Type = typeof Res_role[0];
export type Res_List_Role_Type = typeof Res_role;

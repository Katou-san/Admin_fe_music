

const list_user_init = [{
    User_Id: "",
    User_Email: "",
    User_Pass: "",
    User_Name: "",
    Color: "",
    Avatar: "",
    Phone: "",
    Role_Id: "",
    CCCD: "",
    is_Premium: false,
    is_Admin: false,
    Status: 1,
    Create_date: "",
}]

const infoUser = {
    Upload: "",
    Like: ""
}



export const userModel = {
    init: list_user_init[0],
    init_info: infoUser,
    init_list: list_user_init,
}

export type userType = typeof list_user_init[0]
export type list_userType = typeof list_user_init
export type update_userType = {
    User_Id?: string,
    User_Email?: string,
    User_Pass?: string,
    User_Name?: string,
    Color?: string,
    Avatar?: string,
    Phone?: string,
    Role_Id?: string,
    CCCD?: string,
    is_Admin?: boolean,
    Status?: number,
}
export type info_userType = {
    Upload: string,
    Like: string
}
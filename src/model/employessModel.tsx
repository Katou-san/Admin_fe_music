

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
    is_Admin: true,
    Status: 1,
    Create_date: "",
}]

const create_Employess = {
    User_Email: "",
    User_Pass: "",
    User_Name: "",
    Phone: "",
    Role_Id: "",
    CCCD: "",
    is_Admin: true,
    Status: 1,
}

const infoUser = {
    Upload: "",
    Like: ""
}

export const EmployessModel = {
    init: list_user_init[0],
    init_info: infoUser,
    init_list: list_user_init,
    init_create: create_Employess
}

export type employessType = typeof list_user_init[0]
export type list_employessType = typeof list_user_init
export type create_employessType = typeof create_Employess
export type info_employessType = {
    Upload: string,
    Like: string
}
const init = [
    {
        Role_Id: "",
        Role_Name: "",
        Description: "",
        Create_Date: "",
    },
];

export const roleModel = {
    init: init[0],
    list_init: init

};

export type roleType = typeof init[0]
export type list_roleType = typeof init

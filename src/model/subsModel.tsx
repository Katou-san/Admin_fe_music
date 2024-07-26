const initSub = {
    Sub_Id: "",
    Sub_Title: "",
    Price: 0,
    Content: "",
    Storage: 0,
    Duration: 0,
    Status: true,
    Create_Date: "",
}

const initCreate = {
    Sub_Title: "",
    Price: "",
    Content: "",
    Storage: 0,
    Duration: 0,
    Status: true,
}



export const subModel = {
    init: initSub,
    init_create: initCreate
}

export type subType = typeof initSub
export type update_subType = {
    Sub_Title?: string,
    Price?: number,
    Content?: string,
    Storage?: number,
    Duration?: number,
    Status?: boolean,
}
export type create_subType = typeof initCreate
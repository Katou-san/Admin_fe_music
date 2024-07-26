const initBill = [{
    Bill_Id: "",
    User_Id: "",
    Sub_Id: "",
    User_Name: "",
    Create_Date: "",
    Expiration_Date: "",
}]

export const billModel = {
    init: initBill,
}

export type billType = typeof initBill[0]
export type list_billType = typeof initBill
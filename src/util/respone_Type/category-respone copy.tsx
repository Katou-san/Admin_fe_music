export const Res_cate = [
    {
        _id: "",
        Category_Id: "",
        Category_Name: "",
        createdAt: "",
        updatedAt: "",
        __v: 0,
    },
];

export const Init_Cate = {
    Category_Name: "",
};

export type Create_Cate_Type = {
    Category_Name: string,
};
export type Res_Cate_Type = (typeof Res_cate)[0];
export type Res_List_Cate_Type = typeof Res_cate;

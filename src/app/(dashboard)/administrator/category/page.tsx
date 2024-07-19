"use client";
import React, { useEffect, useState } from "react";
import HeaderContent from "@/components/Data_Table/Header_Table/HeaderContent";
import "../_manage.scss";
import Loading_Table from "@/util/Icons/Loading/Dot_Loading/DotLoading";
import { Res_cate } from "@/util/respone_Type/category-respone copy";
import { Category } from "@/api/Category";
import DataTableCategory from "@/components/Data_Table/Content_Table/DataTable_Category";
import { useReload } from "@/contexts/providerReload";

export default function Page() {
    const { reload_Cate } = useReload()
    const [ShowDetails, Set_ShowDetails] = useState({
        status: false,
        data: Res_cate[0],
    });
    const [data, Set_data] = useState<typeof Res_cate>([]);
    const [data_Table, Set_data_Table] = useState<typeof Res_cate>([]);
    const [is_Loading, Set_isLoading] = useState(false);
    const DetailProp = (data: any) => {
        Set_ShowDetails({ status: true, data });
    };

    useEffect(() => {
        Set_isLoading(true);
        Category.Get_All().then((res) => {
            Set_data([...res.data]);
            Set_data_Table([...res.data]);
            Set_isLoading(false);
        });
    }, [reload_Cate]);

    return (
        <div className={`ContentMain ${ShowDetails.status ? "ShowDetail" : ""}`}>
            <div className="ContentLeft">
                <HeaderContent
                    data={data}
                    select={["Category_Id"]}
                    table="cate"
                    find="Category_Name"
                    event={Set_data_Table}
                    onselect={false}
                />
                {is_Loading && <Loading_Table />}
                {!is_Loading && (
                    <DataTableCategory data={data_Table} event={DetailProp} />
                )}
            </div>
            <div className="ContentRight">
                {/* <DetailSong data={ShowDetails.data} event={Set_ShowDetails} table="song" /> */}
            </div>
        </div>
    );
}

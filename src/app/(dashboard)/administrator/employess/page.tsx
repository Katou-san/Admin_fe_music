'use client'
import React, { useEffect, useState } from "react";
import "../_manage.scss"
import DataTableUser from "@/components/Data_Table/Content_Table/DataTable_User";
import HeaderContent from "@/components/Data_Table/Header_Table/HeaderContent";
import DetailUser from "@/components/Data_Table/Detail_Table/Detail_User";
import { Res_User } from "@/util/respone_Type/user-respone";
import { User } from "@/api/User";



export default function Page() {

    const [ShowDetails, Set_ShowDetails] = useState({ status: false, data: Res_User[0] })
    const [data, Set_data] = useState<typeof Res_User>([])
    const [data_Table, Set_data_Table] = useState<typeof Res_User>([])

    const DetailProp = (data: any) => {
        Set_ShowDetails({ status: true, data })
    }

    useEffect(() => {
        User.Get_Admin()
            .then(res => {
                Set_data([...res.data])
                Set_data_Table([...res.data])
            })

    }, [])

    return (
        <div className={`ContentMain ${ShowDetails.status ? "ShowDetail" : ''}`}>
            <div className="ContentLeft">
                <HeaderContent data={data} select={["Role", "Status"]} table="employess" find="User_Name" event={Set_data_Table} />
                <DataTableUser data={data_Table} event={DetailProp} />
            </div>
            <div className="ContentRight">
                <DetailUser data={ShowDetails.data} event={Set_ShowDetails} table="user" />
            </div>
        </div>
    );
}

'use client'
import React, { useEffect, useState } from "react";
import "../_manage.scss"
import DataTableUser from "@/components/Data_Table/Content_Table/DataTable_User";
import HeaderContent from "@/components/Data_Table/Header_Table/HeaderContent";
import DetailUser from "@/components/Data_Table/Detail_Table/Detail_User";
import { Res_User } from "@/util/respone_Type/user-respone";
import { User } from "@/api/User";
import { useReload } from "@/contexts/providerReload";
import { list_userType, userModel } from "@/model/userModel";



export default function Page() {
    const { reload_Employ } = useReload()
    const [ShowDetails, Set_ShowDetails] = useState({ status: false, data: userModel.init })
    const [data, Set_data] = useState<list_userType>([])
    const [data_Table, Set_data_Table] = useState<list_userType>([])

    const DetailProp = (data: any) => {
        Set_ShowDetails({ status: true, data })
    }

    useEffect(() => {
        User.Get_User()
            .then(res => {
                if (res.status == 200) {
                    Set_data([...res.data])
                    Set_data_Table([...res.data])
                }

            })

    }, [reload_Employ])

    return (
        <div className={`ContentMain ${ShowDetails.status ? "ShowDetail" : ''}`}>
            <div className="ContentLeft">
                <HeaderContent data={data} select={["Role_Name", "Status"]} table="user" find="User_Name" event={Set_data_Table} create={false} />
                <DataTableUser data={data_Table} event={DetailProp} />
            </div>
            <div className="ContentRight">
                <DetailUser data={ShowDetails.data} event={Set_ShowDetails} table="user" is_Show={ShowDetails.status} />
            </div>
        </div>
    );
}

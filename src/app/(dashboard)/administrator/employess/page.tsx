'use client'
import React, { useEffect, useState } from "react";
import "../_manage.scss"
import DataTableUser from "@/components/Data_Table/Content_Table/DataTable_User";
import HeaderContent from "@/components/Data_Table/Header_Table/HeaderContent";
import DetailUser from "@/components/Data_Table/Detail_Table/Detail_User";
import { User } from "@/api/User";
import { list_userType, userModel } from "@/model/userModel";
import { useReload } from "@/contexts/providerReload";



export default function Page() {
    const { reload_Employ } = useReload()
    const [ShowDetails, Set_ShowDetails] = useState({ status: false, data: userModel.init })
    const [data, Set_data] = useState<list_userType>([])
    const [data_Table, Set_data_Table] = useState<list_userType>([])

    const DetailProp = (data: any) => {
        Set_ShowDetails({ status: true, data })
    }

    useEffect(() => {
        User.Get_Admin()
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
                <HeaderContent data={data} select={["Role_Name", "Status"]} table="employess" find="User_Name" event={Set_data_Table} />
                <DataTableUser data={data_Table} event={DetailProp} type={'employess'} />
            </div>
            <div className="ContentRight">
                <DetailUser data={ShowDetails.data} event={Set_ShowDetails} table="employess" is_Show={ShowDetails.status} />
            </div>
        </div>
    );
}

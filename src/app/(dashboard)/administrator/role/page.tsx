'use client'
import React, { useEffect, useState } from "react";
import HeaderContent from "@/components/Data_Table/Header_Table/HeaderContent";
import "../_manage.scss"
import DataTableRole from "@/components/Data_Table/Content_Table/DataTable_Role";
import { Role } from "@/api/Role";
import { Res_role } from "@/util/respone_Type/role-respone";
import Loading_Table from "@/util/Icons/Loading/Dot_Loading/DotLoading";
import { useReload } from "@/contexts/providerReload";



export default function Page() {
    const { reload_Role } = useReload()
    const [ShowDetails, Set_ShowDetails] = useState({ status: false, data: Res_role[0] })
    const [data, Set_data] = useState<typeof Res_role>([])
    const [data_Table, Set_data_Table] = useState<typeof Res_role>([])
    const [is_Loading, Set_isLoading] = useState(false)
    const DetailProp = (data: any) => {
        Set_ShowDetails({ status: true, data })
    }

    useEffect(() => {
        Set_isLoading(true)
        Role.Get_All()
            .then(res => {
                Set_data([...res.data])
                Set_data_Table([...res.data])
                Set_isLoading(false)
            })

    }, [reload_Role])

    return (
        <div className={`ContentMain ${ShowDetails.status ? "ShowDetail" : ''}`}>
            <div className="ContentLeft">
                <HeaderContent data={data} select={[""]} table="role" find="Role_Name" event={Set_data_Table} onselect={false} />
                {is_Loading && <Loading_Table />}
                {!is_Loading && <DataTableRole data={data_Table} event={DetailProp} />}

            </div>
            <div className="ContentRight">
                {/* <DetailSong data={ShowDetails.data} event={Set_ShowDetails} table="song" /> */}
            </div>
        </div>
    );
}

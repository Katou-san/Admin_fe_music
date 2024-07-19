'use client'
import React, { useEffect, useState } from "react";
import "../_manage.scss"
import HeaderContent from "@/components/Data_Table/Header_Table/HeaderContent";
import Loading_Table from "@/util/Icons/Loading/Dot_Loading/DotLoading";
import { toast } from "react-toastify";
import { list_sub_respone_type, List_SubRespone } from "@/model/subscription";
import { Subcription } from "@/api/Subscription";
import DataTableSub from "@/components/Data_Table/Content_Table/DataTable_Sub";
import { useReload } from "@/contexts/providerReload";



export default function Page() {
    const { reload_Sub } = useReload()
    const [ShowDetails, Set_ShowDetails] = useState({ status: false, data: List_SubRespone[0] })
    const [data, Set_data] = useState<list_sub_respone_type>([])
    const [is_Loading, Set_isLoading] = useState(false)
    const [data_Table, Set_data_Table] = useState<list_sub_respone_type>([])

    const DetailProp = (data: any) => {
        Set_ShowDetails({ status: true, data })
    }

    useEffect(() => {
        Set_isLoading(true)
        Subcription.Get_Sub()
            .then(res => {
                if (res.status != 404) {
                    Set_data([...res.data])
                    Set_data_Table([...res.data])
                    Set_isLoading(false)
                } else {
                    toast.error(res.message)
                }

            })

    }, [reload_Sub])

    return (
        <div className={`ContentMain ${ShowDetails.status ? "ShowDetail" : ''}`}>
            <div className="ContentLeft">
                <HeaderContent data={data} select={["Status"]} table="sub" find="Sub_Title" event={Set_data_Table} />
                {is_Loading && <Loading_Table />}
                {!is_Loading && <DataTableSub data={data_Table} event={DetailProp} />}

            </div>
            <div className="ContentRight">
                {/* <DetailBill data={ShowDetails.data} event={Set_ShowDetails} table="playlist" /> */}
            </div>
        </div>
    );
}

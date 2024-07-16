'use client'
import React, { Suspense, useEffect, useState } from "react";
import "../_manage.scss"
import HeaderContent from "@/components/Data_Table/Header_Table/HeaderContent";
import Loading_Table from "@/util/Icons/Loading/Dot_Loading/DotLoading";
import { list_bill_respone_type, List_BillRespone } from "@/model/bill";
import { Bill } from "@/api/Bill";
import DataTableBill from "@/components/Data_Table/Content_Table/DataTable_Bill";
import { toast } from "react-toastify";



export default function Page() {

    const [ShowDetails, Set_ShowDetails] = useState({ status: false, data: List_BillRespone[0] })
    const [data, Set_data] = useState<list_bill_respone_type>([])
    const [is_Loading, Set_isLoading] = useState(false)
    const [data_Table, Set_data_Table] = useState<list_bill_respone_type>([])

    const DetailProp = (data: any) => {
        Set_ShowDetails({ status: true, data })
    }

    useEffect(() => {
        Set_isLoading(true)
        Bill.Get_Bill()
            .then(res => {
                if (res.status != 404) {
                    Set_data([...res.data])
                    Set_data_Table([...res.data])
                    Set_isLoading(false)
                } else {
                    toast.error(res.message)
                }

            })

    }, [])

    return (
        <div className={`ContentMain ${ShowDetails.status ? "ShowDetail" : ''}`}>
            <div className="ContentLeft">
                <HeaderContent data={data} select={[""]} table="bill" find="" event={Set_data_Table} create={false} onselect={false} />
                {is_Loading && <Loading_Table />}
                {!is_Loading && <DataTableBill data={data_Table} event={DetailProp} />}

            </div>
            <div className="ContentRight">
                {/* <DetailBill data={ShowDetails.data} event={Set_ShowDetails} table="playlist" /> */}
            </div>
        </div>
    );
}

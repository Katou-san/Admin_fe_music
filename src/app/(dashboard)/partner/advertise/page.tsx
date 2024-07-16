'use client'
import React, { useEffect, useState } from "react";
import "../_manage.scss"
import HeaderContent from "@/components/Data_Table/Header_Table/HeaderContent";
import Loading_Table from "@/util/Icons/Loading/Dot_Loading/DotLoading";
import DataTableAdvertise from "@/components/Data_Table/Content_Table/DataTable_Advertise";
import { partner, list_PartnerType } from "@/model/partner";
import { Partner } from "@/api/Partner";



export default function Page() {

    const [ShowDetails, Set_ShowDetails] = useState({ status: false, data: partner.init })
    const [data, Set_data] = useState<list_PartnerType>([])
    const [is_Loading, Set_isLoading] = useState(false)
    const [data_Table, Set_data_Table] = useState<list_PartnerType>([])

    const DetailProp = (data: any) => {
        Set_ShowDetails({ status: true, data })
    }

    useEffect(() => {
        Set_isLoading(true)
        Partner.Get_All()
            .then(res => {
                Set_data([...res.data])
                Set_data_Table([...res.data])
                Set_isLoading(false)
            })

    }, [])

    return (
        <div className={`ContentMain ${ShowDetails.status ? "ShowDetail" : ''}`}>
            <div className="ContentLeft">
                <HeaderContent data={data} select={["is_Publish"]} table="partner" find="Playlist_Name" event={Set_data_Table} />
                {is_Loading && <Loading_Table />}
                {!is_Loading && <DataTableAdvertise data={data_Table} event={DetailProp} />}

            </div>
            <div className="ContentRight">
                {/* <DetailPlaylist data={ShowDetails.data} event={Set_ShowDetails} table="playlist" /> */}
            </div>
        </div>
    );
}

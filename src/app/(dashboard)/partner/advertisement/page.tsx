'use client'
import React, { useEffect, useState } from "react";
import "../_manage.scss"
import HeaderContent from "@/components/Data_Table/Header_Table/HeaderContent";
import Loading_Table from "@/util/Icons/Loading/Dot_Loading/DotLoading";
import DataTableAdvertise from "@/components/Data_Table/Content_Table/DataTable_Advertise";
import { Partner } from "@/api/Partner";
import { AdsModel, list_AdsType } from "@/model/advserModel";
import { Ads } from "@/api/Ads";
import DetailAds from "@/components/Data_Table/Detail_Table/Detail_Ads";
import { useReload } from "@/contexts/providerReload";



export default function Page() {
    const { reload_Ads } = useReload()
    const [ShowDetails, Set_ShowDetails] = useState({ status: false, data: AdsModel.init })
    const [data, Set_data] = useState<list_AdsType>([])
    const [is_Loading, Set_isLoading] = useState(false)
    const [data_Table, Set_data_Table] = useState<list_AdsType>([])

    const DetailProp = (data: any) => {
        Set_ShowDetails({ status: true, data })
    }

    useEffect(() => {
        Set_isLoading(true)
        Ads.Get_All()
            .then(res => {
                Set_data([...res.data])
                Set_data_Table([...res.data])
                Set_isLoading(false)
            })

    }, [reload_Ads])

    return (
        <div className={`ContentMain ${ShowDetails.status ? "ShowDetail" : ''}`}>
            <div className="ContentLeft">
                <HeaderContent data={data} select={["is_Publish"]} table="ads" find="Playlist_Name" event={Set_data_Table} />
                {is_Loading && <Loading_Table />}
                {!is_Loading && <DataTableAdvertise data={data_Table} event={DetailProp} />}
            </div>
            <div className="ContentRight">
                <DetailAds data={ShowDetails.data} event={Set_ShowDetails} table="Ads" />
            </div>
        </div>
    );
}

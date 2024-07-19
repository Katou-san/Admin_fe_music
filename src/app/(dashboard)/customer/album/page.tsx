'use client'
import React, { Suspense, useEffect, useState } from "react";
import "../_manage.scss"
import HeaderContent from "@/components/Data_Table/Header_Table/HeaderContent";
import DataTablePlaylist from "@/components/Data_Table/Content_Table/DataTable_Playlist";
import { Playlist } from "@/api/Playlist";
import { Res_Playlist } from "@/util/respone_Type/playlist-respone";
import DetailPlaylist from "@/components/Data_Table/Detail_Table/Detail_Playlist";
import Loading_Table from "@/util/Icons/Loading/Dot_Loading/DotLoading";
import { useReload } from "@/contexts/providerReload";



export default function Page() {
    const { reload_Playlist } = useReload()
    const [ShowDetails, Set_ShowDetails] = useState({ status: false, data: Res_Playlist[0] })
    const [data, Set_data] = useState<typeof Res_Playlist>([])
    const [is_Loading, Set_isLoading] = useState(false)
    const [data_Table, Set_data_Table] = useState<typeof Res_Playlist>([])

    const DetailProp = (data: any) => {
        Set_ShowDetails({ status: true, data })
    }

    useEffect(() => {
        Set_isLoading(true)
        Playlist.Get_Album()
            .then(res => {
                Set_data([...res.data])
                Set_data_Table([...res.data])
                Set_isLoading(false)
            })

    }, [reload_Playlist])

    return (
        <div className={`ContentMain ${ShowDetails.status ? "ShowDetail" : ''}`}>
            <div className="ContentLeft">
                <HeaderContent data={data} select={["is_Publish"]} table="playlist" find="Playlist_Name" event={Set_data_Table} />
                {is_Loading && <Loading_Table />}
                {!is_Loading && <DataTablePlaylist data={data_Table} event={DetailProp} />}

            </div>
            <div className="ContentRight">
                <DetailPlaylist data={ShowDetails.data} event={Set_ShowDetails} table="playlist" />
            </div>
        </div>
    );
}

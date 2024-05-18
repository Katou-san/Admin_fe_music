'use client'
import React, { useEffect, useState } from "react";
import "../_manage.scss"
import HeaderContent from "@/components/Data_Table/Header_Table/HeaderContent";
import DetailSong from "@/components/Data_Table/Detail_Table/Detail_Song";
import DataTablePlaylist from "@/components/Data_Table/Content_Table/DataTable_Palylist";
import { Playlist } from "@/api/Playlist";
import { Res_Playlist } from "@/util/respone_Type/playlist-respone";



export default function Page() {

    const [ShowDetails, Set_ShowDetails] = useState({ status: false, data: Res_Playlist[0] })
    const [data, Set_data] = useState<typeof Res_Playlist>([])
    const [data_Table, Set_data_Table] = useState<typeof Res_Playlist>([])

    const DetailProp = (data: any) => {
        Set_ShowDetails({ status: true, data })
    }

    useEffect(() => {
        Playlist.Get_All()
            .then(res => {
                Set_data([...res.data])
                Set_data_Table([...res.data])
            })

    }, [])

    return (
        <div className={`ContentMain ${ShowDetails.status ? "ShowDetail" : ''}`}>
            <div className="ContentLeft">
                <HeaderContent data={data} select={["Playlist_Is_Publish"]} table="playlist" find="Playlist_Name" event={Set_data_Table} />
                <DataTablePlaylist data={data_Table} event={DetailProp} />
            </div>
            <div className="ContentRight">
                {/* <DetailSong data={ShowDetails.data} event={Set_ShowDetails} table="song" /> */}
            </div>
        </div>
    );
}

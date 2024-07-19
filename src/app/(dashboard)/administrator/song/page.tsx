'use client'
import React, { useEffect, useState } from "react";
import "../_manage.scss"
import HeaderContent from "@/components/Data_Table/Header_Table/HeaderContent";
import DataTableSong from "@/components/Data_Table/Content_Table/DataTable_Song";
import { Song } from "@/api/Song";
import { Res_song } from "@/util/respone_Type/song-respone";
import DetailSong from "@/components/Data_Table/Detail_Table/Detail_Song";
import { useReload } from "@/contexts/providerReload";



export default function Page() {
    const { reload_Song } = useReload()
    const [ShowDetails, Set_ShowDetails] = useState({ status: false, data: Res_song[0] })
    const [data, Set_data] = useState<typeof Res_song>([])
    const [data_Table, Set_data_Table] = useState<typeof Res_song>([])

    const DetailProp = (data: any) => {
        Set_ShowDetails({ status: true, data })
    }

    useEffect(() => {
        Song.Get_Admin()
            .then(res => {
                Set_data([...res.data])
                Set_data_Table([...res.data])
            })
    }, [reload_Song])

    return (
        <div className={`ContentMain ${ShowDetails.status ? "ShowDetail" : ''}`}>
            <div className="ContentLeft">
                <HeaderContent data={data} select={["Category_Id", "is_Publish"]} table="song" find="Song_Name" event={Set_data_Table} />
                <DataTableSong data={data_Table} event={DetailProp} />
            </div>
            <div className="ContentRight">
                <DetailSong data={ShowDetails.data} event={Set_ShowDetails} table="song" />
            </div>
        </div>
    );
}

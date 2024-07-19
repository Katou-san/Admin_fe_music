'use client'
import React, { useEffect, useState } from "react";
import "../_manage.scss"
import HeaderContent from "@/components/Data_Table/Header_Table/HeaderContent";
import DataTableSong from "@/components/Data_Table/Content_Table/DataTable_Song";
import { Song } from "@/api/Song";
import DetailSong from "@/components/Data_Table/Detail_Table/Detail_Song";
import { list_songType, SongModel, songType } from "@/model/songModel";
import { useReload } from "@/contexts/providerReload";



export default function Page() {
    const { reload_Playlist } = useReload()
    const [ShowDetails, Set_ShowDetails] = useState({ status: false, data: SongModel.init })
    const [data, Set_data] = useState<list_songType>([])
    const [data_Table, Set_data_Table] = useState<list_songType>([])


    const DetailProp = (data: any) => {
        Set_ShowDetails({ status: true, data })
    }

    useEffect(() => {
        Song.Get_User()
            .then(res => {
                Set_data([...res.data])
                Set_data_Table([...res.data])
            })

    }, [reload_Playlist])

    return (
        <div className={`ContentMain ${ShowDetails.status ? "ShowDetail" : ''}`}>
            <div className="ContentLeft">
                <HeaderContent data={data} select={["Category_Id", "is_Publish"]} table="song" find="Song_Name" event={Set_data_Table} create={false} />
                <DataTableSong data={data_Table} event={DetailProp} />
            </div>
            <div className="ContentRight">
                <DetailSong data={ShowDetails.data} event={Set_ShowDetails} table="song" />
            </div>
        </div>
    );
}

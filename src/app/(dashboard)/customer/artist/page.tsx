'use client'
import React, { useEffect, useState } from "react";
import "../_manage.scss"
import HeaderContent from "@/components/Data_Table/Header_Table/HeaderContent";
import { useReload } from "@/contexts/providerReload";
import { list_artistType } from "@/model/artistModel";
import { Artist } from "@/api/Artist";
import DataTableArtist from "@/components/Data_Table/Content_Table/DataTable_Artist";
import DetailArtist from "@/components/Data_Table/Detail_Table/Detail_Artist";



export default function Page() {
    const { reload_Artist } = useReload()
    const [ShowDetails, Set_ShowDetails] = useState(true)
    const [data, Set_data] = useState<list_artistType>([])
    const [data_Table, Set_data_Table] = useState<list_artistType>([])


    useEffect(() => {
        Artist.Get_All()
            .then(res => {
                if (res.status == 200) {
                    Set_data([...res.data])
                    Set_data_Table([...res.data])
                }
            })
    }, [reload_Artist])

    return (
        <div className={`ContentMain ${ShowDetails ? "ShowDetail" : ''}`}>
            <div className="ContentLeft">
                <HeaderContent data={data} select={["Artist_Key", "Vertify"]} table="artist" find="Artist_Name" event={Set_data_Table} create={true} />
                <DataTableArtist data={data_Table} event={() => { }} />
            </div>
            <div className="ContentRight">
                <DetailArtist isOpen={ShowDetails} table="artist" />
            </div>
        </div>
    );
}

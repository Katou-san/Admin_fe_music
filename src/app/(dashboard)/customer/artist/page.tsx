'use client'
import React, { useEffect, useState } from "react";
import "../_manage.scss"
import DataTableUser from "@/components/Data_Table/Content_Table/DataTable_User";
import HeaderContent from "@/components/Data_Table/Header_Table/HeaderContent";
import DetailUser from "@/components/Data_Table/Detail_Table/Detail_User";
import { User } from "@/api/User";
import { useReload } from "@/contexts/providerReload";
import { list_userType, userModel } from "@/model/userModel";
import { artistModel, list_artistType } from "@/model/artistModel";
import { list_AdvserType } from "@/model/advserModel";
import { Artist } from "@/api/Artist";
import DataTableArtist from "@/components/Data_Table/Content_Table/DataTable_Artist";



export default function Page() {
    const { reload_Employ } = useReload()
    const [ShowDetails, Set_ShowDetails] = useState({ status: false, data: artistModel.init })
    const [data, Set_data] = useState<list_artistType>([])
    const [data_Table, Set_data_Table] = useState<list_artistType>([])

    const DetailProp = (data: any) => {
        Set_ShowDetails({ status: true, data })
    }

    useEffect(() => {
        Artist.Get_All()
            .then(res => {
                if (res.status == 200) {
                    Set_data([...res.data])
                    Set_data_Table([...res.data])
                }
            })
    }, [reload_Employ])

    return (
        <div className={`ContentMain ${ShowDetails.status ? "ShowDetail" : ''}`}>
            <div className="ContentLeft">
                <HeaderContent data={data} select={["User_Id", "Vertify"]} table="Artist_Name" find="Artist_Name" event={Set_data_Table} create={false} />
                <DataTableArtist data={data_Table} event={DetailProp} />
            </div>
            <div className="ContentRight">
                {/* <DetailUser data={ShowDetails.data} event={Set_ShowDetails} table="user" is_Show={ShowDetails.status} /> */}
            </div>
        </div>
    );
}

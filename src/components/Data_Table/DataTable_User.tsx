'use client'
import React from "react";
import "./_table.scss"
import { Res_List_User_Type } from "@/util/user-respone";
import { Column_Song, Column_Song_item__Type } from "@/configs/DataTable_Config";
import ItemUser from "@/components/Data_Table/Item_Table/Item_User";

type Prop = {
    data: Res_List_User_Type,
    event: (data: any) => void
}

export default function DataTableUser({ data, event }: Prop) {
    return (
        <div className="table_data">
            <div className="header_Table header_Table_user">
                {Column_Song.map((column: Column_Song_item__Type, i: number) =>
                    <div key={i}>{column.name}</div>
                )}
            </div>
            {
                data.map((user, i) => <ItemUser key={i} user={user} event={event} />
                )}
        </div>
    );
}

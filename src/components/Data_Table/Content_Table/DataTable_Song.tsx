'use client'
import React from "react";
import "../_table.scss"
import { Column_Song, Column_Song_item__Type } from "@/configs/DataTable_Config";
import ItemSong from "@/components/Data_Table/Item_Table/Item_Song";
import { Res_List_Song_Type } from "@/util/respone_Type/song-respone";

type Prop = {
    data: Res_List_Song_Type,
    event: (data: any) => void
}

export default function DataTableSong({ data, event }: Prop) {
    return (
        <div className="table_data">
            <div className="header_Table header_Table_user">
                {Column_Song.map((column: Column_Song_item__Type, i: number) =>
                    <div key={i}>{column.name}</div>
                )}
            </div>
            {
                data.map((song, i) => (
                    <ItemSong key={i} song={song} event={event} />)
                )}
        </div>
    );
}

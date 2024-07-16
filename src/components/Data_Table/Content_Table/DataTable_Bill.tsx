'use client'
import React, { Suspense, useState } from "react";
import "../_table.scss"
import { Column_Playlist, Column_Playlist_item__Type } from "@/configs/DataTable_Config";
import ItemPlaylist from "@/components/Data_Table/Item_Table/Item_Playlist";
import { Res_List_Playlist_Type } from "@/util/respone_Type/playlist-respone";
import { Pagination } from "@nextui-org/react";
import { list_bill_respone_type } from "@/model/bill";
import ItemBill from "@/components/Data_Table/Item_Table/item_Bill";
type Prop = {
    data: list_bill_respone_type,
    event: (data: any) => void
}

export default function DataTableBill({ data, event }: Prop) {

    const [current, set_Current] = useState({ index: 0, limit: 4 })
    const lenght = data.length % 4 != 0 ? Math.floor(data.length / 4) + 1 : Math.floor(data.length / 4)
    return (
        <div className="table_data">
            <div className="header_Table header_Table_user">
                {Column_Playlist.map((column: Column_Playlist_item__Type, i: number) =>
                    <div key={i}>{column.name}</div>
                )}
            </div>
            {data.length != 0 &&
                <div className="listItem">
                    {
                        data.map((playlist, i) => {
                            if (i >= current.index * current.limit && i < (current.index + 1) * current.limit) {
                                return <ItemBill key={i} bill={playlist} event={event} />
                            }

                        })}
                </div>
            }
            {data.length == 0 && <div className="listItem">
                <div className="emtyValue">
                    <h4>Data is emty</h4>
                </div>
            </div>}

            <div className="numberpage">
                <Pagination total={lenght} initialPage={1} onChange={(page) => set_Current({ ...current, index: page - 1 })} />
            </div>

        </div>
    );
}

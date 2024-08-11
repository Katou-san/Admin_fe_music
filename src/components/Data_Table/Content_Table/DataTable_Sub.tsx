'use client'
import React, { useState } from "react";
import "../_table.scss"
import { Column_Playlist, Column_Playlist_item__Type, Column_Sub, Column_Sub_item__Type } from "@/configs/DataTable_Config";
import { Pagination } from "@nextui-org/react";
import { list_sub_respone_type } from "@/model/subscription";
import ItemSub from "@/components/Data_Table/Item_Table/item_Sub";
type Prop = {
    data: list_sub_respone_type,
    event: (data: any) => void
}

export default function DataTableSub({ data, event }: Prop) {

    const [current, set_Current] = useState({ index: 0, limit: 4 })
    const lenght = data.length % 4 != 0 ? Math.floor(data.length / 4) + 1 : Math.floor(data.length / 4)
    return (
        <div className="table_data">
            <div className="header_Table header_Table_sub">
                {Column_Sub.map((column: Column_Sub_item__Type, i: number) =>
                    <div key={i}>{column.name}</div>
                )}
            </div>
            {data.length != 0 &&
                <div className="listItem">
                    {
                        data.map((sub, i) => {
                            if (i >= current.index * current.limit && i < (current.index + 1) * current.limit) {
                                return <ItemSub key={i} sub={sub} event={event} index={i} />
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

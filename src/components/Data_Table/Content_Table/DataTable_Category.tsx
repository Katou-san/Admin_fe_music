'use client'
import React, { Suspense, useState } from "react";
import "../_table.scss"
import { Column_Cate, Column_Cate_item__Type } from "@/configs/DataTable_Config";
import { Pagination } from "@nextui-org/react";
import { Res_Cate_Type, Res_List_Cate_Type } from "@/util/respone_Type/category-respone copy";
import ItemCate from "@/components/Data_Table/Item_Table/Item_Cate";
type Prop = {
    data: Res_List_Cate_Type,
    event: (data: any) => void
}

export default function DataTableCategory({ data, event }: Prop) {

    const [current, set_Current] = useState({ index: 0, limit: 4 })
    const lenght = data.length % 4 != 0 ? Math.floor(data.length / 4) + 1 : Math.floor(data.length / 4)
    return (
        <div className="table_data">

            <div className="header_Table header_Table_role">
                {Column_Cate.map((column: Column_Cate_item__Type, i: number) =>
                    <div key={i}>{column.name}</div>
                )}
            </div>
            {data.length != 0 &&
                <div className="listItem">
                    {
                        data.map((cate: Res_Cate_Type, i) => {
                            if (i >= current.index * current.limit && i < (current.index + 1) * current.limit) {
                                return <ItemCate key={i} cate={cate} event={event} index={i} />
                            }

                        })}
                </div>}
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

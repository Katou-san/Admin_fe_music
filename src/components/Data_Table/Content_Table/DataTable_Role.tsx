'use client'
import React, { Suspense, useState } from "react";
import "../_table.scss"
import { Column_Role, Column_Role_item__Type } from "@/configs/DataTable_Config";
import { Pagination } from "@nextui-org/react";
import { Res_List_Role_Type, Res_Role_Type } from "@/util/respone_Type/role-respone";
import ItemRole from "@/components/Data_Table/Item_Table/Item_Role";
type Prop = {
    data: Res_List_Role_Type,
    event: (data: any) => void
}

export default function DataTableRole({ data, event }: Prop) {

    const [current, set_Current] = useState({ index: 0, limit: 4 })
    const lenght = data.length % 4 != 0 ? Math.floor(data.length / 4) + 1 : Math.floor(data.length / 4)
    return (
        <div className="table_data">

            <div className="header_Table header_Table_role">
                {Column_Role.map((column: Column_Role_item__Type, i: number) =>
                    <div key={i}>{column.name}</div>
                )}
            </div>

            <div className="listItem">
                {
                    data.map((role: Res_Role_Type, i) => {
                        if (i >= current.index * current.limit && i < (current.index + 1) * current.limit) {
                            return <ItemRole key={i} role={role} event={event} index={i} />
                        }

                    })}
            </div>
            <div className="numberpage">
                <Pagination total={lenght} initialPage={1} onChange={(page) => set_Current({ ...current, index: page - 1 })} />
            </div>

        </div>
    );
}

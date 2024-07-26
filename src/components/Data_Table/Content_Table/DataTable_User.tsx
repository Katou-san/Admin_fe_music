"use client";
import React, { useState } from "react";
import "../_table.scss";
import { Res_List_User_Type } from "@/util/respone_Type/user-respone";
import {
    Column_User,
    Column_User_item__Type,
} from "@/configs/DataTable_Config";
import ItemUser from "@/components/Data_Table/Item_Table/Item_User";
import { Pagination } from "@nextui-org/react";
import { list_userType } from "@/model/userModel";

type Prop = {
    data: list_userType;
    event: (data: any) => void;
    type?: string
};

export default function DataTableUser({ data, event, type = 'user' }: Prop) {
    const [current, set_Current] = useState({ index: 0, limit: 4 });
    const lenght =
        data.length % 4 != 0
            ? Math.floor(data.length / 4) + 1
            : Math.floor(data.length / 4);
    return (
        <div className="table_data">
            <div className="header_Table header_Table_user">
                {Column_User.map((column: Column_User_item__Type, i: number) => (
                    <div key={i}>{column.name}</div>
                ))}
            </div>
            {data.length != 0 && (
                <div className="listItem">
                    {data.map((user, i) => {
                        if (
                            i >= current.index * current.limit &&
                            i < (current.index + 1) * current.limit
                        ) {
                            return <ItemUser key={i} user={user} event={event} type={type} />
                        }
                    })}
                </div>
            )}
            {data.length == 0 && (
                <div className="listItem">
                    <div className="emtyValue">
                        <h4>Data is emty</h4>
                    </div>
                </div>
            )}

            <div className="numberpage">
                <Pagination
                    total={lenght}
                    initialPage={1}
                    onChange={(page) => set_Current({ ...current, index: page - 1 })}
                />
            </div>
        </div>
    );
}

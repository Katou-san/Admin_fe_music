"use client";
import React, { useState } from "react";
import "../_table.scss";
import {
    Column_Artist,
    Column_Artist_item__Type,
} from "@/configs/DataTable_Config";
import { Pagination } from "@nextui-org/react";
import { list_artistType } from "@/model/artistModel";
import ItemArtist from "@/components/Data_Table/Item_Table/Item_Artist";


type Prop = {
    data: list_artistType;
    event: (data: any) => void;
};

export default function DataTableArtist({ data, event }: Prop) {
    const [current, set_Current] = useState({ index: 0, limit: 4 });
    const lenght =
        data.length % 4 != 0
            ? Math.floor(data.length / 4) + 1
            : Math.floor(data.length / 4);
    return (
        <div className="table_data">
            <div className="header_Table header_Table_user ">
                {Column_Artist.map((column: Column_Artist_item__Type, i: number) => (
                    <div key={i}>{column.name}</div>
                ))}
            </div>
            {data.length != 0 && (
                <div className="listItem ">
                    {data.map((artist, i) => {
                        if (
                            i >= current.index * current.limit &&
                            i < (current.index + 1) * current.limit
                        ) {
                            return <ItemArtist key={i} artist={artist} event={event} />
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

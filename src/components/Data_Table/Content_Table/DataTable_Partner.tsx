"use client";
import React, { useState } from "react";
import "../_table.scss";
import {
    Column_Partner,
    Column_Partner_item__Type,
    Column_Song,
    Column_Song_item__Type,
} from "@/configs/DataTable_Config";
import { Pagination } from "@nextui-org/react";
import ItemPartner from "@/components/Data_Table/Item_Table/Item_Partner";
import { list_PartnerType } from "@/model/partnerModel";


type Prop = {
    data: list_PartnerType;
    event: (data: any) => void;
};

export default function DataTablePartner({ data, event }: Prop) {
    const [current, set_Current] = useState({ index: 0, limit: 4 });
    const lenght =
        data.length % 4 != 0
            ? Math.floor(data.length / 4) + 1
            : Math.floor(data.length / 4);
    return (
        <div className="table_data">
            <div className="header_Table header_Table_user">
                {Column_Partner.map((column: Column_Partner_item__Type, i: number) => (
                    <div key={i}>{column.name}</div>
                ))}
            </div>
            {data.length != 0 && (
                <div className="listItem">
                    {data.map((partner, i) => {
                        if (
                            i >= current.index * current.limit &&
                            i < (current.index + 1) * current.limit
                        ) {
                            return <ItemPartner key={i} partner={partner} event={event} />
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

'use client'
import BtnDataTable from '@/components/Data_Table/Btn_DataTable';
import { bill_respone_type } from '@/model/bill';
import { Avatar } from '@nextui-org/react';
import React, { useState } from 'react';
import "./_Item.scss"

const ItemBill = ({ bill, event }: { bill: bill_respone_type, event: any }) => {
    const [url, Set_url] = useState({ img: "", thumnail: "" })

    return (
        <div className="Item_Table Item_Table_Song">
            <Avatar isBordered radius="md" size="lg" src={url.img} />
            <div className="Name_Item ">
                <h4 className='overflow__Text'>{bill.User_Id}</h4>
                <h6>{bill.Create_Date}</h6>
            </div>
            <div className="Status_Item">
                <span className={`${bill.Sub_Id}`}> {String(bill.Sub_Id)}</span>
            </div>
            <div className="Status_Item">
                <div > <span>{bill.Expiration_Date} </span></div>
            </div>

            <BtnDataTable type="bill" event={event} data={bill} />
        </div>
    );
}

export default ItemBill;

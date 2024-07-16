'use client'
import BtnDataTable from '@/components/Data_Table/Btn_DataTable';
import { sub_respone_type } from '@/model/subscription';
import React from 'react';
import "./_Item.scss"
const ItemSub = ({ sub, event, index }: { sub: sub_respone_type, event: any, index: number }) => {
    return (
        <div className="Item_Table Item_Table_Song">
            <div className='indexItem' >{index + 1}</div>
            <div className="Name_Item ">
                <h4 className='overflow__Text'>{sub.Sub_Title}</h4>
                <h6>{sub.Create_Date}</h6>
            </div>
            <div className="Status_Item">
                <span className={`${sub.Status}`}> {String(sub.Status)}</span>
            </div>
            <div className="Status_Item ">
                <div className='Duration' >{sub.Duration} day</div>
            </div>

            <BtnDataTable type="sub" event={event} data={sub} />
        </div>
    );
}

export default ItemSub;

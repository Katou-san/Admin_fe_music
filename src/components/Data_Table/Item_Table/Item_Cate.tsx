'use client'
import BtnDataTable from '@/components/Data_Table/Btn_DataTable';
import { Res_Cate_Type } from '@/util/respone_Type/category-respone copy';
import React from 'react';
import "./_Item.scss"
const ItemCate = ({ cate, event, index }: { cate: Res_Cate_Type, event: any, index: number }) => {

    return (
        <div className="Item_Table Item_Table_role">
            <div className="index_Table ">
                <h4 className='overflow__Text'>{index + 1}</h4>
            </div>
            <div className="Name_Item ">
                <h4 className='overflow__Text'>{cate.Category_Name}</h4>
                <h6 className='overflow__Text'>{cate.Category_Id}</h6>
            </div>
            <div className="Status_Item">
                {/* <h4 className='overflow__Text'>{cate.Description}</h4> */}
            </div>
            <BtnDataTable type="cate" event={event} data={cate} />
        </div>
    );
}

export default ItemCate;

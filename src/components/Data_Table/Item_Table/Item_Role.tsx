'use client'
import BtnDataTable from '@/components/Data_Table/Btn_DataTable';
import { Res_Role_Type } from '@/util/respone_Type/role-respone';
import React from 'react';
import "./_Item.scss"

const ItemRole = ({ role, event, index }: { role: Res_Role_Type, event: any, index: number }) => {

    return (
        <div className="Item_Table Item_Table_role">
            <div className="index_Table ">
                <h4 className='overflow__Text'>{index + 1}</h4>
            </div>
            <div className="Name_Item ">
                <h4 className='overflow__Text'>{role.Role_Name}</h4>
                <h6 className='overflow__Text'>{role.Role_Id}</h6>
            </div>
            <div className="Status_Item">
                <h4 className='overflow__Text'>{role.Description}</h4>
            </div>
            <BtnDataTable type="role" event={event} data={role} />
        </div>
    );
}

export default ItemRole;

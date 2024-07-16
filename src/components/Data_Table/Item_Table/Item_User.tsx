'use client'
import { Send } from '@/api/Send';
import BtnDataTable from '@/components/Data_Table/Btn_DataTable';
import { Res_User_Type } from '@/util/respone_Type/user-respone';
import { Avatar } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import "./_Item.scss"
import { getStatusUser } from '@/util/Convert/Status';

const ItemUser = ({ user, event }: { user: Res_User_Type, event: any }) => {
    const [url, Set_url] = useState("")
    useEffect(() => {
        Send.Avatar(user.Avatar)
            .then(res => Set_url(URL.createObjectURL(res)))
    }, [user])

    const Status = getStatusUser(user.Status)
    return (
        <div className="Item_Table Item_Table_User">
            <Avatar isBordered radius="md" size="md" src={url} />
            <div className="Name_Item">
                <h4>{user.User_Name}</h4>
                <h6>{user.User_Email}</h6>
            </div>
            <div className="Role_Item">
                <h4>{user.Role_Name}</h4>
            </div>
            <div className="Status_Item">
                <span className={`${Status}`}> {`${Status}`}</span>
            </div>

            <BtnDataTable type="user" event={event} data={user} />
        </div>
    );
}

export default ItemUser;

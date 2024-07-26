'use client'
import { Send } from '@/api/Send';
import BtnDataTable from '@/components/Data_Table/Btn_DataTable';
import { Res_User_Type } from '@/util/respone_Type/user-respone';
import { Avatar } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import "./_Item.scss"
import { getStatusUser } from '@/util/Convert/Status';
import { userType } from '@/model/userModel';
import { Role } from '@/api/Role';
import { roleModel, roleType } from '@/model/roleModel';

const ItemUser = ({ user, event, type = 'user' }: { user: userType, event: any, type?: string }) => {
    const [url, Set_url] = useState("")
    const [role, set_Role] = useState<roleType>(roleModel.init)
    useEffect(() => {
        Send.Avatar(user.Avatar)
            .then(res => Set_url(URL.createObjectURL(res)))
        Role.Get_Id(user.Role_Id).then((res) => res.status == 200 && set_Role(res.data))
    }, [user])


    return (
        <div className="Item_Table Item_Table_User">
            <Avatar isBordered radius="md" size="md" src={url} />
            <div className="Name_Item">
                <h4>{user.User_Name}</h4>
                <h6>{user.User_Email}</h6>
            </div>
            <div className="Role_Item">
                <h4>{role.Role_Name}</h4>
            </div>
            <div className="Status_Item">
                <span className={`${getStatusUser(Number(user.Status))}`}> {getStatusUser(Number(user.Status))}</span>
            </div>

            <BtnDataTable type={type} event={event} data={user} />
        </div>
    );
}

export default ItemUser;

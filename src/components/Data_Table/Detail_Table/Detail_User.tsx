'use client'
import { CloseIcon } from '@/util/Icons/Icon';
import { Res_User } from '@/util/respone_Type/user-respone';
import React, { useEffect, useState } from 'react';
import "./_detail.scss"
import { userType } from '@/model/userModel';
import { roleModel, roleType } from '@/model/roleModel';
import imgTemp from '../../../../public/temp.jpg'
import { Send } from '@/api/Send';
import { Role } from '@/api/Role';
import Image from 'next/image';
const DetailUser = ({ data, event, table, is_Show }: { data: userType, event: any, table: string, is_Show: boolean }) => {
    const [url, Set_url] = useState("")
    const [role, set_Role] = useState<roleType>(roleModel.init)
    useEffect(() => {
        if (data.User_Id != '' && data.Avatar != '') {
            if (is_Show) {
                Send.Avatar(data.Avatar)
                    .then(res => Set_url(URL.createObjectURL(res)))

                Role.Get_Id(data.Role_Id).then((res) => res.status == 200 && set_Role(res.data))
            }
        }
    }, [data, is_Show])
    return (
        <div className="Form_Detail">
            <div className="Title_Detail">{table}</div>
            <div className="CloseIcon" onClick={() => event({ status: false, data: Res_User })}><CloseIcon w={50} color="red" /></div>
            <div className="Avatar">
                <Image src={url || imgTemp} className="w-20 h-20 text-large" width={50} height={50} alt='' loading='lazy' />
            </div>
            <h1>{data.User_Name}</h1>
            <div className="box-detail">
                <h3>id</h3>
                <p className="overflow__Text">{data.User_Id}</p>
            </div>
            <div className="box-detail">
                <h3>Email</h3>
                <p className="overflow__Text">{data.User_Email}</p>
            </div>
            <div className="box-detail">
                <h3>Status</h3>
                <div className={`overflow__Text text-right`}>
                    <span className={`${data.Status}`}>{data.Status}</span></div>
            </div>
            <div className="box-detail">
                <h3>Role</h3>
                <div className="overflow__Text text-right">
                    <span className='role_detail '>{role.Role_Name}</span></div>
            </div>
            <div className="box-detail">
                <h3>Premium</h3>
                <p className="overflow__Text">{String(data.is_Premium)}</p>
            </div>
            <div className="box-detail">
                <h3>Create date</h3>
                <p className="overflow__Text">15/4/2024</p>
            </div>
        </div>
    );
}

export default DetailUser;

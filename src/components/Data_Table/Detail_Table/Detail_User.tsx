'use client'
import { CloseIcon } from '@/util/Icons/Icon';
import { Res_song_Type } from '@/util/song-respone';
import { Res_User, Res_User_Type } from '@/util/user-respone';
import { Avatar } from '@nextui-org/react';
import React from 'react';

const DetailUser = ({ data, event, table }: { data: Res_User_Type, event: any, table: string }) => {
    return (
        <div className="Form_Detail">
            <div className="Title_Detail">{table}</div>
            <div className="CloseIcon" onClick={() => event({ status: false, data: Res_User })}><CloseIcon w={50} color="red" /></div>
            <div className="Avatar">
                <Avatar isBordered color="danger" src="https://i.pravatar.cc/150?u=a04258114e29026708c" className="w-20 h-20 text-large" />
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
                    <span className='role_detail '>{data.Roles}</span></div>
            </div>
            <div className="box-detail">
                <h3>Premium</h3>
                <p className="overflow__Text">false</p>
            </div>
            <div className="box-detail">
                <h3>Create date</h3>
                <p className="overflow__Text">15/4/2024</p>
            </div>
        </div>
    );
}

export default DetailUser;

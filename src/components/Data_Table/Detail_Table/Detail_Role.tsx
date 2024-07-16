'use client'
import { Send } from '@/api/Send';
import { CloseIcon } from '@/util/Icons/Icon';
import "./_detail.scss"
import React, { useEffect, useState } from 'react';
import { Res_Playlist, Res_Playlist_Type } from '@/util/respone_Type/playlist-respone';
import { Image } from '@nextui-org/react';
import { Res_Role_Type } from '@/util/respone_Type/role-respone';

const DetailRole = ({ data, event, table }: { data: Res_Role_Type, event: any, table: string }) => {
    const [url_load, Set_url] = useState({ img: "", thumnail: "" })


    return (
        <div className="Form_Detail Playlist_Detail">
            <div className="Title_Detail">{table}</div>
            <div className="CloseIcon" onClick={() => event({ status: false, data: Res_Playlist })}><CloseIcon w={50} color="red" /></div>

            <div className="Header_Playlist_Detail">
                <Image src={url_load.img} alt='' />
                <div className='Content_Header'>
                    <div className='Name_Containt_Playlist'>
                        <h2 className='overflow__Text'>{data.Role_Name}</h2>
                    </div>

                </div>
            </div>
            <div className="Body_Playlist_Detail">
                <div className="box-detail">
                    <h3>Name</h3>
                    <p className="overflow__Text">{data.Role_Name}</p>
                </div>
                {/* <div className="box-detail">
                    <h4>Public</h4>
                    <div className={`overflow__Text content_Box text-right`}>
                        <span className={`${String(data.Playlist_Is_Publish)}`}>{String(data.Playlist_Is_Publish)}</span></div>
                </div> */}
                {/* <div className="box-detail">
                    <h3>Author</h3>
                    <p className="overflow__Text">{data.}</p>
                </div>
                <div className="box-detail">
                    <h3>Create date</h3>
                    <p className="overflow__Text">{data.createdAt}</p>
                </div> */}
                <div className="box-detail list_Tag">

                </div>
            </div>

        </div>

    );
}

export default DetailRole;

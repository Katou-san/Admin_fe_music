'use client'
import { Send } from '@/api/Send';
import BtnDataTable from '@/components/Data_Table/Btn_DataTable';
import { Res_Playlist_Type } from '@/util/respone_Type/playlist-respone';
import { Avatar } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import "./_Item.scss"

const ItemPlaylist = ({ playlist, event }: { playlist: Res_Playlist_Type, event: any }) => {
    const [url, Set_url] = useState({ img: "", thumnail: "" })
    useEffect(() => {
        Send.Image_P(playlist.Image)
            .then(respone => {
                Send.Thumnail_P(playlist.Thumbnail)
                    .then(res => Set_url({ img: URL.createObjectURL(respone), thumnail: URL.createObjectURL(res) }))
            })

    }, [playlist])

    return (
        <div className="Item_Table Item_Table_Song">
            <Avatar isBordered radius="md" size="lg" src={url.img} />
            <div className="Name_Item ">
                <h4 className='overflow__Text'>{playlist.Playlist_Name}</h4>
                <h6>{playlist.Artist}</h6>
            </div>
            <div className="Status_Item">
                <span className={`${playlist.is_Publish}`}> {String(playlist.is_Publish)}</span>
            </div>
            <div className="Status_Item">
                <div > <span> </span> songs</div>
            </div>

            <BtnDataTable type="playlist" event={event} data={playlist} />
        </div>
    );
}

export default ItemPlaylist;

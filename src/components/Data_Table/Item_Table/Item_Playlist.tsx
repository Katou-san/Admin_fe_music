'use client'
import { Send } from '@/api/Send';
import BtnDataTable from '@/components/Data_Table/Btn_DataTable';
import { Res_Playlist_Type } from '@/util/respone_Type/playlist-respone';
import { Avatar } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';

const ItemPlaylist = ({ playlist, event }: { playlist: Res_Playlist_Type, event: any }) => {
    const [url, Set_url] = useState("")
    useEffect(() => {
        Send.Image_S(playlist.Thumbnail)
            .then(res => Set_url(URL.createObjectURL(res)))
    }, [playlist])
    return (
        <div className="Item_Table Item_Table_Song">
            <Avatar isBordered radius="md" size="lg" src={url} />
            <div className="Name_Item">
                <h4 >{playlist.Playlist_Name}</h4>
                <h6>{playlist.User_Id}</h6>
            </div>
            <div className="Status_Item">
                <span className={`${playlist.Playlist_Is_Publish}`}> {String(playlist.Playlist_Is_Publish)}</span>
            </div>
            <div className="Status_Item">
                <div > <span>{playlist.List_Song.length} </span> songs</div>
            </div>

            <BtnDataTable type="playlist" event={event} data={playlist} />
        </div>
    );
}

export default ItemPlaylist;

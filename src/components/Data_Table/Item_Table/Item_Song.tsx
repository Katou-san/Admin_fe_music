'use client'
import { Send } from '@/api/Send';
import BtnDataTable from '@/components/Data_Table/Btn_DataTable';
import { Res_song_Type } from '@/util/respone_Type/song-respone';
import { Avatar } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';

const ItemSong = ({ song, event }: { song: Res_song_Type, event: any }) => {
    const [url, Set_url] = useState("")
    useEffect(() => {
        Send.Image_S(song.Song_Image)
            .then(res => Set_url(URL.createObjectURL(res)))
    }, [song])
    return (
        <div className="Item_Table Item_Table_Song">
            <Avatar isBordered radius="md" size="lg" src={url} />
            <div className="Name_Item">
                <h4 >{song.Song_Name}</h4>
                <h6>{song.User_Id}</h6>
            </div>
            <div className="Category_Item">
                <h4>{song.Category_Id}</h4>
                <h6>{song.Category_Id}</h6>
            </div>
            <div className="Status_Item">
                <span className={`${song.Is_Publish}`}> {String(song.Is_Publish)}</span>
            </div>

            <BtnDataTable type="song" event={event} data={song} />
        </div>
    );
}

export default ItemSong;

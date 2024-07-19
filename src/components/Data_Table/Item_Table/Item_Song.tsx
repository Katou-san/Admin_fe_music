'use client'
import { Send } from '@/api/Send';
import BtnDataTable from '@/components/Data_Table/Btn_DataTable';
import React, { useEffect, useRef, useState } from 'react';
import "./_Item.scss"
import PlaylistModal from '@/components/Custom/modal/playlistModal/playlistModal';
import { songType } from '@/model/songModel';
import Image from 'next/image';
import imgTemp from "../../../../public/temp.jpg"
import { cateModel, cateType } from '@/model/cateModel';
import { Category } from '@/api/Category';

const ItemSong = ({ song, event }: { song: songType, event: any }) => {
    const [url, Set_url] = useState("")
    const [drop_Down, set_Drop] = useState(false)
    const [cateName, set_Cate] = useState<cateType>(cateModel.init)
    const itemRef = useRef<HTMLInputElement | null>(null)
    useEffect(() => {
        Promise.all([
            Send.Image_S(song.Song_Image)
                .then(res => Set_url(URL.createObjectURL(res))),
            Category.Get_Id(song.Category_Id)
                .then(res => res.status == 200 && set_Cate(res.data))
        ])

    }, [song])


    return (
        <div className="Item_Table Item_Table_Song" ref={itemRef}>
            <Image src={url || imgTemp} height={50} width={50} alt='' />
            <div className="Name_Item">
                <h4 >{song.Song_Name}</h4>
                <h6>{song.Artist}</h6>
            </div>
            <div className="Category_Item">
                <h4>{cateName?.Category_Name}</h4>
                <h6 className='max-w-40 overflow__Text'>{song.Category_Id}</h6>
            </div>
            <div className="Status_Item">
                <span className={`${song.is_Publish}`}> {String(song.is_Publish)}</span>
            </div>

            <PlaylistModal set_Drop={() => set_Drop(false)} drop_Down={drop_Down} style={{ top: 0, right: 0 }} song={song} />
            <BtnDataTable type="song" event={event} data={song} dropdown={() => { set_Drop(prev => !prev) }} />
        </div>
    );
}

export default ItemSong;

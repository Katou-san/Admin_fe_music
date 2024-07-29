'use client'
import { Send } from '@/api/Send';
import BtnDataTable from '@/components/Data_Table/Btn_DataTable';
import { Res_song_Type } from '@/util/respone_Type/song-respone';
import { Avatar } from '@nextui-org/react';
import React, { useEffect, useRef, useState } from 'react';
import "./_Item.scss"
import { partnerType } from '@/model/advserModel';

const ItemPartner = ({ partner, event }: { partner: partnerType, event: any }) => {
    const [url, Set_url] = useState("")
    const [dropdown_Open, set_Open] = useState(false)
    const itemRef = useRef<HTMLInputElement | null>(null)
    const handleMouse = () => {
        set_Open(false)
    }
    // useEffect(() => {
    //     Send.Image_S(Partner.Song_Image)
    //         .then(res => Set_url(URL.createObjectURL(res)))
    // }, [song])

    useEffect(() => {
        let handle = (e: any) => {
            if (itemRef.current && !itemRef.current.contains(e.target)) {
                set_Open(false);
            }
        }
        document.addEventListener('mousedown', handle)
        return () => {
            document.removeEventListener("mousedown", handle);
        };
    }, [])

    return (
        <div className="Item_Table Item_Table_Song" ref={itemRef}>
            <Avatar isBordered radius="md" size="lg" src={url} />
            <div className="Name_Item">
                <h4 >{partner.Title}</h4>
                <h6>{partner.Partner_Name}</h6>
            </div>
            <div className="Category_Item">
                <h4>{partner.Link}</h4>
                {/* <h6>{Partner.Category_Id}</h6> */}
            </div>
            <div className="Status_Item">
                {/* <span className={`${Partner.is_Publish}`}> {String(Partner.is_Publish)}</span> */}
            </div>

            <div className={`yourPlaylist ${dropdown_Open ? "showOption" : "hiddenOption"}`}>
                <div className='titleOption'>Your playlist</div>
                <ul>
                    <li onClick={handleMouse}>hello</li>
                    <li onClick={handleMouse}>hello</li>
                    <li onClick={handleMouse}>hello</li>
                    <li onClick={handleMouse}>hello</li>
                </ul>
            </div>
            <BtnDataTable type="partner" event={event} data={partner} dropdown={() => { set_Open(prev => !prev) }} />
        </div>
    );
}

export default ItemPartner;

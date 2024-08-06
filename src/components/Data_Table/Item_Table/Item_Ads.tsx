'use client'
import { Send } from '@/api/Send';
import BtnDataTable from '@/components/Data_Table/Btn_DataTable';
import React, { useEffect, useRef, useState } from 'react';
import "./_Item.scss"
import Image from 'next/image';
import imgTemp from "../../../../public/temp.jpg"
import { cateModel, cateType } from '@/model/cateModel';
import { Category } from '@/api/Category';
import { AdsType } from '@/model/advserModel';

const ItemAds = ({ ads, event }: { ads: AdsType, event: any }) => {
    const [url, Set_url] = useState("")
    const [drop_Down, set_Drop] = useState(false)
    // const [cateName, set_Cate] = useState<cateType>(cateModel.init)
    const itemRef = useRef<HTMLInputElement | null>(null)

    useEffect(() => {
        if (ads?.Ads_Image != '') {
            Promise.all([
                Send.Image_A(ads.Ads_Image)
                    .then(res => Set_url(URL.createObjectURL(res))),
            ])
        }
    }, [ads])


    return (
        <div className="Item_Table Item_Table_Song" ref={itemRef}>
            <Image src={url || imgTemp} height={50} width={50} alt='' />
            <div className="Name_Item">
                <h4 >{ads.Ads_Name}</h4>
                <h6>{ads?.Ads_Id}</h6>
            </div>
            <div className="Category_Item overflow__Text" >
                <h4 className='overflow__Text'>{new Date(ads?.Start_time).toLocaleDateString()}</h4>
                <h6 className='max-w-40 overflow__Text'>{new Date(ads?.End_time).toLocaleDateString()}</h6>
            </div>
            <div className="Status_Item">
                <span className={`${ads.is_Publish}`}> {String(ads.is_Publish)}</span>
            </div>

            {/* <PlaylistModal set_Drop={() => set_Drop(false)} drop_Down={drop_Down} style={{ top: 0, right: 0 }} Ads={Ads} /> */}
            <BtnDataTable type="ads" event={event} data={ads} dropdown={() => { set_Drop(prev => !prev) }} />
        </div>
    );
}

export default ItemAds;

'use client'
import { Send } from '@/api/Send';
import BtnDataTable from '@/components/Data_Table/Btn_DataTable';
import { Avatar } from '@nextui-org/react';
import imgTemp from '../../../../public/errorImg.png'
import React, { useEffect, useRef, useState } from 'react';
import "./_Item.scss"
import { PartnerType } from '@/model/partnerModel';;
import { URLValidate } from '@/util/Validate/Url';
import Image from 'next/image';

const ItemPartner = ({ partner, event }: { partner: PartnerType, event: any }) => {
    const [url, Set_url] = useState("")
    const [dropdown_Open, set_Open] = useState(false)
    const itemRef = useRef<HTMLInputElement | null>(null)
    const handleMouse = () => {
        set_Open(false)
    }
    useEffect(() => {
        if (URLValidate.isUrl(partner.Logo)) {
            Send.Logo(partner.Logo)
                .then((res) => Set_url(URL.createObjectURL(res)))
        } else {
            Set_url(partner.Logo)
        }
    }, [partner])

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
            <Image alt='' width={50} height={50} src={url || imgTemp} />
            <div className="Name_Item">
                <h4 >{partner.Partner_Name}</h4>
                <h6>Phone: {partner?.Phone}</h6>
            </div>
            <div className={`Status_Item Status_Partner ${String(partner?.Status)}`}>
                {String(partner?.Status)}
            </div>

            <div className="Status_Item">
                {partner?.Phone}
            </div>

            <BtnDataTable type="partner" event={event} data={partner} dropdown={() => { set_Open(prev => !prev) }} />
        </div>
    );
}

export default ItemPartner;

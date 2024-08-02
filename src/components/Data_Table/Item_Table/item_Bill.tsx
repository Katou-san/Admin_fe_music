'use client'

import React, { useEffect, useState } from 'react';
import "./_Item.scss"
import { billType } from '@/model/billModel';
import { userModel } from '@/model/userModel';
import { subModel } from '@/model/subsModel';
import { User } from '@/api/User';
import { Subcription } from '@/api/Subscription';
import imgTemp from '../../../../public/temp.jpg'
import Image from 'next/image';
import { Send } from '@/api/Send';
import { plus_Date } from '@/util/Time/Time_Id';
import BtnDataTable from '@/components/Data_Table/Btn_DataTable';

const ItemBill = ({ bill, event }: { bill: billType, event: any }) => {
    const [infoUser, set_InfoUser] = useState(userModel.init)
    const [infoSub, set_InfoSub] = useState(subModel.init)
    const [url, set_Url] = useState('')
    useEffect(() => {
        if (bill?.Bill_Id != '') {
            Promise.all([
                User.Get_Id(bill?.User_Id)
                    .then((res) => {
                        if (res.status == 200) {
                            set_InfoUser(res.data)

                        }
                    }),
                Subcription.Get_Id(bill?.Sub_Id)
                    .then((res) => {
                        if (res.status == 200) {
                            set_InfoSub(res.data)
                        }
                    })
            ])
        }
    }, [bill])

    useEffect(() => {
        if (infoUser?.Avatar != '') {
            Send.Avatar(infoUser.Avatar)
                .then((res) => set_Url(URL.createObjectURL(res)))
        }
    }, [infoUser])


    return (
        <div className="Item_Table Item_Table_Bill">
            <div className="frameImg">
                <Image src={url || imgTemp} width={50} height={50} alt='' objectFit='cover' />
            </div>

            <div className="Name_Item ">
                <h4 className='overflow__Text'>{infoUser?.User_Name}</h4>
                <h6>{infoUser?.User_Id}</h6>
            </div>
            <div className="subInfo">
                <h4 className='overflow__Text'>{infoSub?.Sub_Title}</h4>
                <h6 className='overflow__Text'>{infoSub?.Price.toLocaleString()} vnd</h6>
            </div>
            <div className="createDay">
                <div > <span>{new Date(bill?.Create_Date).toLocaleDateString()} </span></div>
            </div>
            <div className={`Expiration_Date ${(plus_Date(3) > new Date(bill?.Expiration_Date)) ? 'paused' : 'active'}`}>
                <div > <span>{new Date(bill?.Expiration_Date).toLocaleDateString()} </span></div>
            </div>


            <BtnDataTable type="bill" event={event} data={bill} />
        </div>
    );
}

export default ItemBill;

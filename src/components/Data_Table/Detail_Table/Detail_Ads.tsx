'use client'
import { Send } from '@/api/Send';
import { Reducer_Change } from '@/hooks/reducer/action';
import { CloseIcon, PauseIcon, PlayIcon } from '@/util/Icons/Icon';
import { Res_song } from '@/util/respone_Type/song-respone';
import "./_detail.scss"
import React, { useEffect, useReducer, useRef, useState } from 'react';
import Image from 'next/image';
import imgTemp from "../../../../public/errorImg.png"
import { AdsType } from '@/model/advserModel';
import { URLValidate } from '@/util/Validate/Url';
const DetailAds = ({ data, event, table }: { data: AdsType, event: any, table: string }) => {
    const refAudio = useRef<any>()
    const [urlImg, set_Img] = useState('')
    const [urlAudio, set_Audio] = useState('')

    const [isPlay, Set_IsPlay] = useState(false)
    useEffect(() => {
        if (data.Ads_Image) {
            if (URLValidate.isUrl(data.Ads_Image)) {
                Send.Image_A(data.Ads_Image)
                    .then((res) => set_Img(URL.createObjectURL(res)))
            } else {
                set_Img(data.Ads_Image)
            }

        }
        if (data.Ads_Audio) {
            if (!URLValidate.isUrl(data.Ads_Audio)) {
                Send.Audio_A(data.Ads_Audio)
                    .then((res) => set_Audio(URL.createObjectURL(res)))
            } else {
                set_Audio(data.Ads_Audio)
            }

        }


    }, [data])

    const HanddlePlay = () => {
        if (refAudio.current.paused) {
            refAudio.current.play()
            Set_IsPlay(true)
        } else {
            refAudio.current.pause()
            Set_IsPlay(false)
        }

    }
    return (
        <div className="Form_Detail Song_Detail">

            <div className="Title_Detail">{table}</div>
            <div className="CloseIcon" onClick={() => event({ status: false, data: Res_song })}><CloseIcon w={50} color="red" /></div>
            <audio src={urlAudio} controls ref={refAudio} className='none' />
            <div className="Header_Song_Detail">
                <Image height={50} width={50} src={urlImg || imgTemp} alt='' />
                <div className="Content_Header">
                    <h2 className='overflow__Text'>{data.Ads_Name}</h2>
                    <div className="box-detail">
                        <h4>Public</h4>
                        <div className={`overflow__Text content_Box`}>
                            <span className={`${String(data.is_Publish)}`}>{String(data.is_Publish)}</span></div>
                    </div>
                    {/* <div className="starFrame">
                        <div className="frameIcon">
                            <Star_Icon w={60} active={true} />
                            <p className="overflow__Text">{list_Like.length}</p>
                        </div>
                    </div> */}



                </div>
                <div className="btn_Audio" onClick={HanddlePlay}>
                    <div className="frame_Icon">
                        {isPlay ? <PauseIcon w={40} /> : <PlayIcon w={40} />}

                    </div>
                </div>
            </div>
            <div className="Body_Song_Detail">
                <div className="box-detail">
                    <h3>Author</h3>
                    <p className="overflow__Text">{data.User_Id}</p>
                </div>
                <div className="box-detail">
                    <h3>Start date</h3>
                    <p className="overflow__Text">{new Date(data.Start_time).toLocaleDateString()}</p>
                </div>
                <div className="box-detail">
                    <h3>End date</h3>
                    <p className="overflow__Text">{new Date(data.End_time).toLocaleDateString()}</p>
                </div>
                {/* <div className="box-detail">
                    <h3>End date</h3>
                    <p className="overflow__Text">{new Date(data.End_time).toLocaleDateString()}</p>
                </div> */}
                <div className="frameArea">
                    <h3>Content</h3>
                    <textarea name="" id="" value={data.Content}></textarea>
                </div>

            </div>

        </div>

    );
}

export default DetailAds;

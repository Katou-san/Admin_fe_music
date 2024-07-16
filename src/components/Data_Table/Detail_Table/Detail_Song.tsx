'use client'
import { Send } from '@/api/Send';
import { Reducer_Change } from '@/hooks/reducer/action';
import { CloseIcon, PauseIcon, PlayIcon } from '@/util/Icons/Icon';
import { Res_song } from '@/util/respone_Type/song-respone';
import "./_detail.scss"
import React, { useEffect, useReducer, useRef, useState } from 'react';
import { songType } from '@/model/songModel';
import Image from 'next/image';
import imgTemp from "../../../../public/temp.jpg"
const DetailSong = ({ data, event, table }: { data: songType, event: any, table: string }) => {
    const refAudio = useRef<any>()
    const [Urlfile, dispacth_url] = useReducer(Reducer_Change, {
        img: null,
        audio: null,
    });
    const [isPlay, Set_IsPlay] = useState(false)
    useEffect(() => {
        if (data.Song_Audio && data.Song_Image) {
            Send.Audio(data.Song_Audio)
                .then((res) => dispacth_url({ type: "CHANGE", payload: { audio: URL.createObjectURL(res) } }))
            Send.Image_S(data.Song_Image)
                .then((res) => dispacth_url({ type: "CHANGE", payload: { img: URL.createObjectURL(res) } }))
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
            <audio src={Urlfile.audio} controls ref={refAudio} className='none' />
            <div className="Header_Song_Detail">
                <Image height={50} width={50} src={Urlfile.img || imgTemp} alt='' />
                <div className="Content_Header">
                    <h2 className='overflow__Text'>{data.Song_Name}</h2>
                    <div className="box-detail">
                        <h4>Public</h4>
                        <div className={`overflow__Text content_Box`}>
                            <span className={`${String(data.is_Publish)}`}>{String(data.is_Publish)}</span></div>
                    </div>
                    <div className="box-detail">
                        <h4>Like</h4>
                        <p className="overflow__Text">{data.Like}</p>
                    </div>
                </div>
                <div className="btn_Audio" onClick={HanddlePlay}>
                    <div className="frame_Icon">
                        {isPlay && <PlayIcon w={40} />}
                        {!isPlay && <PauseIcon w={40} />}
                    </div>
                </div>
            </div>
            <div className="Body_Song_Detail">
                <div className="box-detail">
                    <h3>Author</h3>
                    <p className="overflow__Text">{data.User_Id}</p>
                </div>
                <div className="box-detail">
                    <h3>Category</h3>
                    <p className="overflow__Text">{data.Category_Id}</p>
                </div>
                <div className="box-detail">
                    <h3>Create date</h3>
                    <p className="overflow__Text">{data.Create_Date}</p>
                </div>
                <div className="box-detail list_Tag">

                </div>
            </div>

        </div>

    );
}

export default DetailSong;

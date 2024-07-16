'use client'
import { Send } from '@/api/Send';
import { CloseIcon } from '@/util/Icons/Icon';
import "./_detail.scss"
import React, { useEffect, useState } from 'react';
import { Res_Playlist, Res_Playlist_Type } from '@/util/respone_Type/playlist-respone';
import { Image, useDisclosure } from '@nextui-org/react';
import FormSongPlaylist from '@/components/Data_Table/ShowDetail/Form_Song_Playlist';

const DetailPlaylist = ({ data, event, table }: { data: Res_Playlist_Type, event: any, table: string }) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [url_load, Set_url] = useState({ img: "", thumnail: "" })
    useEffect(() => {
        if (data.Image && data.Thumbnail) {
            Send.Image_P(data.Image)
                .then(respone => {
                    Send.Thumnail_P(data.Thumbnail)
                        .then(res => Set_url({ img: URL.createObjectURL(respone), thumnail: URL.createObjectURL(res) }))
                })
        }
    }, [data])


    return (
        <div className="Form_Detail Playlist_Detail">
            <div className="Title_Detail">{table}</div>
            <div className="CloseIcon" onClick={() => event({ status: false, data: Res_Playlist })}><CloseIcon w={50} color="red" /></div>

            <div className="Header_Playlist_Detail">
                <Image src={url_load.img} alt='' />
                <div className='Content_Header'>
                    <div className='Name_Containt_Playlist'>
                        <h2 className='overflow__Text'>{data.Playlist_Name}</h2>
                    </div>

                </div>
            </div>

            <div className="Body_Playlist_Detail">
                <div className="box-detail">
                    <div className='btnViewSong' onClick={onOpen}>
                        View song
                    </div>
                </div>

                <div className="box-detail">
                    <h3>Name</h3>
                    <p className="overflow__Text">{data.Playlist_Name}</p>
                </div>
                <div className="box-detail">
                    <h3>Public</h3>
                    <div className={`overflow__Text content_Box text-right`}>
                        <span className={`${String(data.is_Publish)}`}>{String(data.is_Publish)}</span></div>
                </div>
                <div className="box-detail">
                    <h3>Tracks</h3>
                    <p className="overflow__Text">{[].length}</p>
                </div>
                <div className="box-detail">
                    <h3>Author</h3>
                    <p className="overflow__Text">{data.Artist}</p>
                </div>
                <div className="box-detail">
                    <h3>Create date</h3>
                    <p className="overflow__Text">{data.Create_Date}</p>
                </div>
                <div className="box-detail list_Tag">

                </div>
            </div>
            <FormSongPlaylist isOpen={isOpen} onOpenChange={onOpenChange} table='song' title={data.Playlist_Name} PlaylistId={data.Playlist_Id} />
        </div>

    );
}

export default DetailPlaylist;

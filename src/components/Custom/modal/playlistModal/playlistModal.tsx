'use client'
import React, { useEffect, useRef, useState } from 'react';
import './_playlistModal.scss'
import { list_playlistType } from '@/model/playlistModel';
import { Playlist } from '@/api/Playlist';
import { Track } from '@/api/Track';
import { songType } from '@/model/songModel';
import { useSelector } from 'react-redux';
import { RootState } from '@/hooks/redux/store';
import { toast } from 'react-toastify';
type Props = {
    drop_Down: boolean,
    set_Drop: () => void
    style?: React.CSSProperties
    song: songType

}
const PlaylistModal = ({ drop_Down, set_Drop, style, song }: Props) => {
    const userProvider = useSelector((state: RootState) => state.auth)
    const itemRef = useRef<HTMLInputElement | null>(null)
    const [is_Loading, set_Loading] = useState(false)
    const [list_Playlist, set_List] = useState<list_playlistType>([])
    useEffect(() => {
        let handle = (e: any) => {
            if (itemRef.current && !itemRef.current.contains(e.target)) {
                set_Drop()
            }
        }
        document.addEventListener('mousedown', handle)
        return () => {
            document.removeEventListener("mousedown", handle);
        };
    }, [])


    useEffect(() => {
        set_Loading(true)
        Playlist.Get_Playlist('admin')
            .then(res => {
                if (res.status == 200) {
                    set_List(res.data)
                }
                set_Loading(false)
            })

    }, [])

    const handleAddSong = (playlistId: string) => {
        console.log('hello')
        if (userProvider.Access_Token != '' && userProvider.is_Login) {
            Track.Create({ Playlist_Id: playlistId, Song_Id: song.Song_Id })
                .then((res) => {
                    if (res.status == 200) {
                        toast.success(res.message)

                    } else {
                        toast.error(res.message)
                    }
                    set_Drop()
                })
        }

    }

    return (
        <div className={`PlaylistModal ${drop_Down ? "showOption" : "hiddenOption"}`} style={style} ref={itemRef}>
            <div className='titleOption'>Your playlist</div>
            <ul>
                {list_Playlist.map((playlist, index) =>
                    <li onClick={() => handleAddSong(playlist.Playlist_Id)} key={index} >
                        {playlist.Playlist_Name}
                    </li>
                )}

            </ul>
        </div>
    );
}

export default PlaylistModal;

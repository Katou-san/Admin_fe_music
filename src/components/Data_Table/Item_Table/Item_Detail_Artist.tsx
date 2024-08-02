import React from 'react';
import './_Item.scss'
import { artistType } from '@/model/artistModel';
import { useSelector } from 'react-redux';
import { RootState } from '@/hooks/redux/store';
import { toast } from 'react-toastify';
import { Artist } from '@/api/Artist';
import { useReload } from '@/contexts/providerReload';

type Prop = {
    artist: artistType
}


const ItemDetailArtist = ({ artist }: Prop) => {
    const { set_ReloadArtist } = useReload()
    const userProvider = useSelector((state: RootState) => state.auth)

    const handleVertify = () => {
        if (userProvider.Access_Token != '' && userProvider.is_Login) {
            if (artist?.Artist_Id) {
                Artist.Update(artist?.Artist_Id, { Vertify: true })
                    .then((res) => {
                        if (res.status == 200) {
                            toast.success(res.message);
                            set_ReloadArtist()
                        } else {
                            toast.error(res.message);
                        }
                    })
            } else {
                toast.warning('Not found artist')
            }
        }
    }

    const handleDelete = () => {
        if (userProvider.Access_Token != '' && userProvider.is_Login) {
            if (artist?.Artist_Id) {
                Artist.Delete(artist?.Artist_Id)
                    .then((res) => {
                        if (res.status == 200) {
                            toast.success(res.message);
                            set_ReloadArtist()
                        } else {
                            toast.error(res.message);
                        }
                    })
            } else {
                toast.warning('Not found artist')
            }
        }
    }


    return (
        <div className='itemDetailArtist'>
            <div className="leftDetailArtist">
                <h1>{artist?.Artist_Name}</h1>
                <h6>{artist?.Artist_Key}</h6>
            </div>
            <div className="rightDetailArtist">
                <div className="frameBtnVertify">
                    <div className="btnArtist btnDismiss" onClick={handleDelete}>
                        Dismiss
                    </div>
                    <div className="btnArtist btnVertify" onClick={handleVertify}>
                        Vertify
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemDetailArtist;

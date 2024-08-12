'use client'
import { Song } from '@/api/Song';
import { User } from '@/api/User';
import DeleteTable from '@/components/Data_Table/Delete_Table/DeleteTable';
import UpdateFormAds from '@/components/Data_Table/Update_Table/Update_Ads';
import UpdateFormArtist from '@/components/Data_Table/Update_Table/Update_Artist';
import UpdateFormCate from '@/components/Data_Table/Update_Table/Update_Cate';
import UpdateFormEmployess from '@/components/Data_Table/Update_Table/Update_Employess';
import UpdateFormPartner from '@/components/Data_Table/Update_Table/Update_Partner';
import UpdateFormPlaylist from '@/components/Data_Table/Update_Table/Update_Playlist';
import UpdateFormRole from '@/components/Data_Table/Update_Table/Update_Role';
import UpdateFormSong from '@/components/Data_Table/Update_Table/Update_Song';
import UpdateFormSub from '@/components/Data_Table/Update_Table/Update_Sub';
import UpdateFormUser from '@/components/Data_Table/Update_Table/Update_User';
import { useReload } from '@/contexts/providerReload';
import { RootState } from '@/hooks/redux/store';
import { userModel } from '@/model/userModel';
import { DeleteIcon, EditIcon, EyeIcon } from '@/util/Icons/Icon';
import { Add_Icon, Lock_Icon, Unlock_Icon } from '@/util/Icons/Icon_Figma';
import { Tooltip, useDisclosure } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
type Prop = {
    type: string,
    event: (data: any) => void,
    data: any
    dropdown?: () => void
    onReload?: () => void
}
const BtnDataTable = ({ type, event, data, dropdown = () => { }, onReload }: Prop) => {
    const userProvider = useSelector((state: RootState) => state.auth)
    const { set_ReloadEmploy } = useReload()
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { isOpen: isOpen_Edit, onOpen: onOpen_Edit, onOpenChange: onOpenChange_Edit } = useDisclosure();
    const [infoUser, set_Info] = useState(userModel.init)
    const [check_Info, set_CheckInfo] = useState(false)
    const [info_CurrentUser, set_CurrentUser] = useState(userModel.init)
    const [reload, set_Reload] = useState(false)
    const [Noitification, set_Noitification] = useState(false)
    useEffect(() => {
        if (type == 'user') {
            if (data?.User_Id != undefined) {
                User.Get_Id(data?.User_Id)
                    .then((res) => {
                        if (res.status == 200) {
                            set_Info(res.data)
                        }
                    })
                // set_CheckInfo(u)
            }
        }
        if (type == 'song') {
            if (data?.Song_Id != undefined) {
                Song.Check_Delete(data?.Song_Id)
                    .then((res) => {
                        if (res.status == 200) {
                            set_Noitification(res.data.Noitification)
                        }

                        if (res.status == 404) {
                            set_Noitification(res.data.Noitification)
                        }
                    })
            }
        }
    }, [data, reload])

    const handleLock = () => {
        if (type == 'user' && userProvider.Access_Token != '' && userProvider.is_Login) {
            if (infoUser?.User_Id != undefined && infoUser?.Status != undefined) {
                User.Update(infoUser?.User_Id, { Status: infoUser.Status == 1 ? 0 : 1 })
                    .then((res) => {
                        if (res.status == 200) {
                            toast.success('User updated successfully')
                            set_ReloadEmploy()
                        }
                    })
            } else {
                toast.warning('User not updated')
            }
        } else {
            toast.error('You need to login')
        }
    }
    return (
        <div className="btn-Table">
            {type != 'bill' && type != 'sub' && <Tooltip content="Details" >
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50"
                    onClick={() => event(data)}
                >
                    <EyeIcon />
                </span>
            </Tooltip>}
            {type != 'bill' && <Tooltip content="Edit user">
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50"
                    onClick={onOpen_Edit}
                >
                    <EditIcon />
                </span>
            </Tooltip>}
            {type != 'bill' && type != 'user' &&
                <Tooltip color="danger" content="Delete">
                    <span className="text-lg text-danger cursor-pointer active:opacity-50"
                        onClick={onOpen}
                    >
                        <DeleteIcon />
                    </span>
                </Tooltip>}

            {type == 'song' &&

                <Tooltip color="default" content="Add playlist">
                    <span className="text-lg text-danger cursor-pointer active:opacity-50"
                        onClick={() => dropdown()}
                    >
                        <Add_Icon w={28} color='rgb(155, 155, 155)' />
                    </span>
                </Tooltip>}

            {type == 'user' &&

                <Tooltip color="default" content={`${infoUser.Status == 1 ? 'Lock' : 'Unlock'}`}>
                    <span className="text-lg text-danger cursor-pointer active:opacity-50"
                        onClick={handleLock}
                    >
                        {infoUser.Status != 1 && <Lock_Icon w={20} color='#f54281' />}
                        {infoUser.Status == 1 && <Unlock_Icon w={20} color='rgb(155, 155, 155)' />}
                    </span>
                </Tooltip>}

            <DeleteTable isOpen={isOpen} onOpenChange={onOpenChange} table={type} data={data} Noitification={Noitification} />

            {type == "employess" && <UpdateFormEmployess isOpen={isOpen_Edit} onOpenChange={onOpenChange_Edit} table={type} data={data} />}
            {type == "user" && <UpdateFormUser isOpen={isOpen_Edit} onOpenChange={onOpenChange_Edit} table={type} data={data} />}
            {type == "song" && <UpdateFormSong isOpen={isOpen_Edit} onOpenChange={onOpenChange_Edit} table={type} data={data} />}
            {type == "playlist" && <UpdateFormPlaylist isOpen={isOpen_Edit} onOpenChange={onOpenChange_Edit} table={type} data={data} />}
            {type == "role" && <UpdateFormRole isOpen={isOpen_Edit} onOpenChange={onOpenChange_Edit} table={type} data={data} />}
            {type == "cate" && <UpdateFormCate isOpen={isOpen_Edit} onOpenChange={onOpenChange_Edit} table={type} data={data} />}
            {type == "partner" && <UpdateFormPartner isOpen={isOpen_Edit} onOpenChange={onOpenChange_Edit} table={type} data={data} />}
            {type == "sub" && <UpdateFormSub isOpen={isOpen_Edit} onOpenChange={onOpenChange_Edit} table={type} data={data} />}
            {type == "artist" && <UpdateFormArtist isOpen={isOpen_Edit} onOpenChange={onOpenChange_Edit} table={type} data={data} />}
            {type == "ads" && <UpdateFormAds isOpen={isOpen_Edit} onOpenChange={onOpenChange_Edit} table={type} data={data} />}

        </div>
    );
}

export default BtnDataTable;

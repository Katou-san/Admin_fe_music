import DeleteTable from '@/components/Data_Table/Delete_Table/DeleteTable';
import UpdateFormCate from '@/components/Data_Table/Update_Table/Update_Cate';
import UpdateFormPartner from '@/components/Data_Table/Update_Table/Update_Partner';
import UpdateFormPlaylist from '@/components/Data_Table/Update_Table/Update_Playlist';
import UpdateFormRole from '@/components/Data_Table/Update_Table/Update_Role';
import UpdateFormSong from '@/components/Data_Table/Update_Table/Update_Song';
import UpdateFormUser from '@/components/Data_Table/Update_Table/Update_User';
import { DeleteIcon, EditIcon, EyeIcon } from '@/util/Icons/Icon';
import { Add_Icon } from '@/util/Icons/Icon_Figma';
import { Tooltip, useDisclosure } from '@nextui-org/react';
import React from 'react';
type Prop = {
    type: string,
    event: (data: any) => void,
    data: any
    dropdown?: () => void
    onReload?: () => void
}
const BtnDataTable = ({ type, event, data, dropdown = () => { }, onReload }: Prop) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { isOpen: isOpen_Edit, onOpen: onOpen_Edit, onOpenChange: onOpenChange_Edit } = useDisclosure();
    return (
        <div className="btn-Table">

            <Tooltip content="Details" >
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50"
                    onClick={() => event(data)}
                >
                    <EyeIcon />
                </span>
            </Tooltip>
            <Tooltip content="Edit user">
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50"
                    onClick={onOpen_Edit}
                >
                    <EditIcon />
                </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete user">
                <span className="text-lg text-danger cursor-pointer active:opacity-50"
                    onClick={onOpen}
                >
                    <DeleteIcon />
                </span>
            </Tooltip>
            {type == 'song' && <Tooltip color="default" content="Add playlist">
                <span className="text-lg text-danger cursor-pointer active:opacity-50"
                    onClick={() => dropdown()}
                >
                    <Add_Icon w={28} color='rgb(155, 155, 155)' />
                </span>
            </Tooltip>}

            <DeleteTable isOpen={isOpen} onOpenChange={onOpenChange} table={type} data={data} />

            {type == "user" && <UpdateFormUser isOpen={isOpen_Edit} onOpenChange={onOpenChange_Edit} table={type} data={data} />}
            {type == "song" && <UpdateFormSong isOpen={isOpen_Edit} onOpenChange={onOpenChange_Edit} table={type} data={data} onReload={onReload} />}
            {type == "playlist" && <UpdateFormPlaylist isOpen={isOpen_Edit} onOpenChange={onOpenChange_Edit} table={type} data={data} />}
            {type == "role" && <UpdateFormRole isOpen={isOpen_Edit} onOpenChange={onOpenChange_Edit} table={type} data={data} />}
            {type == "cate" && <UpdateFormCate isOpen={isOpen_Edit} onOpenChange={onOpenChange_Edit} table={type} data={data} />}
            {type == "partner" && <UpdateFormPartner isOpen={isOpen_Edit} onOpenChange={onOpenChange_Edit} table={type} data={data} />}

        </div>
    );
}

export default BtnDataTable;

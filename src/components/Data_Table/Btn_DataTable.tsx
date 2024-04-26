import DeleteTable from '@/components/Data_Table/Delete_Table/DeleteTable';
import EditTable from '@/components/Data_Table/Update_Table/UpdateTable';
import { DeleteIcon, EditIcon, EyeIcon } from '@/util/Icons/Icon';
import { Tooltip, useDisclosure } from '@nextui-org/react';
import React from 'react';
type Prop = {
    type: string,
    event: (data: any) => void,
    data: any
}
const BtnDataTable = ({ type, event, data }: Prop) => {
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
            <DeleteTable isOpen={isOpen} onOpenChange={onOpenChange} table={type} data={data} />
            <EditTable isOpen={isOpen_Edit} onOpenChange={onOpenChange_Edit} table={type} data={data} />
        </div>
    );
}

export default BtnDataTable;

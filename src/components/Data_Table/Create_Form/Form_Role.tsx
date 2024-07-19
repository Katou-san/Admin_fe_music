'use client'
import React, { useEffect, useState } from 'react';
import { Modal, ModalContent, ModalBody, ModalFooter, Button, Input } from "@nextui-org/react";
import { Role } from '@/api/Role';
import { Create_Role_Type, Init_Role } from '@/util/respone_Type/role-respone';
import { toast } from 'react-toastify';
import { Validate_Create_Role } from '@/util/Validate/Role';
import { useReload } from '@/contexts/providerReload';
type Prop = {
    isOpen: boolean,
    onOpenChange: () => void,
    table: string,
    data?: any
}

const CreateFormRole = ({ isOpen, onOpenChange, table, data }: Prop) => {
    const { set_ReloadRole } = useReload()
    const [Title, Set_Title] = useState("")
    const [Value_Role, Set_Value_Role] = useState<Create_Role_Type>(
        Init_Role
    );
    useEffect(() => {
        Set_Title(table)
    }, [table, data])

    const SubmitForm = (e: any, onClose: () => void) => {
        e.preventDefault();
        const Error_Check = Validate_Create_Role(Value_Role.Role_Name, Value_Role.Description)
        if (!Error_Check.status) {
            Role.Create(Value_Role).then((res) => {
                if (res.status == 200) {
                    set_ReloadRole()
                    toast.success(res.message);
                    onClose();
                } else {
                    toast.error(res.message);
                }
            })
        } else {
            let Array_Key = Object.keys(Error_Check.Error);
            toast.error(Error_Check.Error[Array_Key[0]]);
        }

        onClose()
    }
    return (
        <>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <form action="" onSubmit={(e: any) => { SubmitForm(e, onClose) }} className='pt-5'>
                            <ModalBody>
                                <div className='Title_Delete'>Create {Title}</div>
                                <Input type="text" label="Name"
                                    onChange={(e) => Set_Value_Role({ ...Value_Role, Role_Name: e.target.value })} />
                                <Input type="text" label="Depscription"
                                    onChange={(e) => Set_Value_Role({ ...Value_Role, Description: e.target.value })} />
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" type='submit'>
                                    Action
                                </Button>
                            </ModalFooter>
                        </form>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}

export default CreateFormRole;

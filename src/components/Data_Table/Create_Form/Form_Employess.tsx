'use client'
import React, { useEffect, useState } from 'react';
import { Modal, ModalContent, ModalBody, ModalFooter, Button, Input, Select, SelectItem } from "@nextui-org/react";
import SelectCus from '@/components/Custom/SelectCus';
import { Role } from '@/api/Role';
import { list_roleType } from '@/model/roleModel';
import { create_employessType, EmployessModel, employessType } from '@/model/employessModel';
import { state_User } from '@/configs/status';
type Prop = {
    isOpen: boolean,
    onOpenChange: () => void,
    table: string,
    data?: any
}

const CreateFormEmployess = ({ isOpen, onOpenChange, table, data }: Prop) => {
    const [Title, Set_Title] = useState("")
    const [employess, set_Employess] = useState<create_employessType>(EmployessModel.init_create)
    const [list_role, set_ListRole] = useState<list_roleType>([])

    useEffect(() => {
        Set_Title(table)
    }, [table, data])

    useEffect(() => {
        if (isOpen) {
            Role.Get_All().then((res) => set_ListRole(res.data))
        }
    }, [isOpen])

    const SubmitForm = (e: any, onClose: () => void) => {
        e.preventDefault();
        console.log(employess)
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
                                <Input type="text" label="Email" onChange={(e) => set_Employess({ ...employess, User_Email: e.target.value })} />
                                <Input type="text" label="Name" onChange={(e) => set_Employess({ ...employess, User_Name: e.target.value })} />
                                <Input type="password" label="Pass" onChange={(e) => set_Employess({ ...employess, User_Pass: e.target.value })} />
                                <Input type="text" label="Identification card" onChange={(e) => set_Employess({ ...employess, User_Pass: e.target.value })} />
                                <Input type="text" label="Phone" onChange={(e) => set_Employess({ ...employess, Phone: e.target.value })} />
                                <div className="select_group">
                                    <Select
                                        isRequired
                                        label={"Roles"}
                                        placeholder="Select"
                                        className="w-full"
                                        onChange={(e) => set_Employess({ ...employess, Role_Id: list_role[Number(e.target.value)].Role_Id })}
                                    >
                                        {list_role.map((item, i) => (
                                            <SelectItem key={i} value={item.Role_Id} textValue={undefined}>
                                                {item.Role_Name}
                                            </SelectItem>
                                        ))}
                                    </Select>
                                    <Select
                                        isRequired
                                        label={"Status"}
                                        placeholder="Select"
                                        className="w-full"
                                        onChange={(e) => set_Employess({ ...employess, Status: Number(e.target.value) })}
                                    >
                                        {state_User.map((item, i) => (
                                            <SelectItem key={i} value={item.value} textValue={undefined}>
                                                {item.lable}
                                            </SelectItem>
                                        ))}
                                    </Select>
                                </div>
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

export default CreateFormEmployess;

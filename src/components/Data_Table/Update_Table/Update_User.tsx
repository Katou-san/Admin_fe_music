'use client'
import React, { useEffect, useState } from 'react';
import "./Update_Table.scss"
import { Modal, ModalContent, ModalBody, ModalFooter, Button, Input, Select, SelectItem } from "@nextui-org/react";
import SelectCus from '@/components/Custom/SelectCus';
type Prop = {
    isOpen: boolean,
    onOpenChange: () => void,
    table: string,
    data: any
}

const UpdateFormUser = ({ isOpen, onOpenChange, table, data }: Prop) => {
    const [Title, Set_Title] = useState("")
    const [dataProp, Set_dataProp] = useState<typeof data>({})
    let array_key: any[] = Object.keys(dataProp)
    let index_Id = 0
    let index_Email = 0
    let index_Name = 0
    let Array_Status = [{ label: "active", value: "active" }]
    switch (table) {
        case "user":
            index_Id = array_key.indexOf("User_Id")
            index_Email = array_key.indexOf("User_Email")
            index_Name = array_key.indexOf("User_Name")
            break;
        case "song":
            index_Id = array_key.indexOf("Song_Id")
            index_Name = array_key.indexOf("Song_Name")
            break;
        default:
            break;
    }
    useEffect(() => {
        Set_Title(table)
        Set_dataProp(data)
    }, [table, data])



    const SubmitForm = (e: any, onClose: () => void) => {
        e.preventDefault();
        onClose()
    }
    return (
        <>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} size='xl'>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <form action="" onSubmit={(e: any) => { SubmitForm(e, onClose) }}>
                                <ModalBody>
                                    <div className='Title_Delete'>Update {Title}</div>
                                    <Input type="text" label="Email" disabled={true} value={dataProp[array_key[index_Email]]} />
                                    <Input type="text" label="Name" value={dataProp[array_key[index_Name]]} />
                                    <div className="select_group">
                                        <SelectCus
                                            array={Array_Status}
                                            lables={["label", "value"]}
                                            Title='Role'
                                        />
                                        <SelectCus
                                            array={Array_Status}
                                            lables={["label", "value"]}
                                            Title='Status'
                                        />
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
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}

export default UpdateFormUser;

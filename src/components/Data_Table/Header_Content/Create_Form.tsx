'use client'
import React, { useEffect, useState } from 'react';

import { Modal, ModalContent, ModalBody, ModalFooter, Button, Input } from "@nextui-org/react";
import SelectCus from '@/components/Custom/SelectCus';
type Prop = {
    isOpen: boolean,
    onOpenChange: () => void,
    table: string,
    data?: any
}

const CreateForm = ({ isOpen, onOpenChange, table, data }: Prop) => {
    const [Title, Set_Title] = useState("")
    let Array_Status = [{ label: "active", value: "active" }]
    let index_Id = 0
    let index_Name = 0
    switch (table) {
        case "user":

            break;

        default:
            break;
    }
    useEffect(() => {
        Set_Title(table)
        // Set_dataProp(data)
    }, [table, data])

    const SubmitForm = (e: any, onClose: () => void) => {
        e.preventDefault();
        // console.log(dataProp[array_key[index_Id]])
        onClose()
    }
    return (
        <>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <form action="" onSubmit={(e: any) => { SubmitForm(e, onClose) }}>
                                <ModalBody>
                                    <div className='Title_Delete'>Create {Title}</div>
                                    <Input type="text" label="Email" disabled={false} />
                                    <Input type="text" label="Name" />
                                    <Input type="password" label="Pass" disabled={false} />
                                    <Input type="password" label="confirm Pass" />
                                    <div className="select_group">
                                        <SelectCus
                                            array={Array_Status}
                                            lables={["label", "value"]}
                                            Title='Role'
                                            default_v={Array_Status[0].value}
                                        />
                                        <SelectCus
                                            array={Array_Status}
                                            lables={["label", "value"]}
                                            Title='Status'
                                            default_v={Array_Status[0].value}
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

export default CreateForm;

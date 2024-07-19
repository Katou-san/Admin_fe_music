'use client'
import React, { useEffect, useState } from 'react';
import { Modal, ModalContent, ModalBody, ModalFooter, Button, Input } from "@nextui-org/react";
import SelectCus from '@/components/Custom/SelectCus';
import { useReload } from '@/contexts/providerReload';
type Prop = {
    isOpen: boolean,
    onOpenChange: () => void,
    table: string,
    data?: any
}

const CreateFormSub = ({ isOpen, onOpenChange, table, data }: Prop) => {
    const { set_ReloadSub } = useReload()
    const [Title, Set_Title] = useState("")
    let Array_Status = [
        { label: "public", value: true },
        { label: "private", value: false },
    ];

    useEffect(() => {
        Set_Title(table)
    }, [table, data])

    const SubmitForm = (e: any, onClose: () => void) => {
        e.preventDefault();
        set_ReloadSub()
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
                                <Input type="text" label="Title" />
                                <Input type="number" label="Price" />
                                <Input type="number" label="Storage" />
                                <Input type="number" label="Duration" />

                                <SelectCus
                                    array={Array_Status}
                                    lables={["label", "value"]}
                                    Title='Status'

                                />


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

export default CreateFormSub;

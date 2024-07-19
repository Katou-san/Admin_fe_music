'use client'
import React, { useEffect, useState } from 'react';
import { Modal, ModalContent, ModalBody, ModalFooter, Button, Input } from "@nextui-org/react";
import { toast } from 'react-toastify';
import { Create_Cate_Type, Init_Cate } from '@/util/respone_Type/category-respone copy';
import { Validate_Create_Cate } from '@/util/Validate/Category';
import { Category } from '@/api/Category';
import { useReload } from '@/contexts/providerReload';
type Prop = {
    isOpen: boolean,
    onOpenChange: () => void,
    table: string,
    data?: any
}

const CreateFormCate = ({ isOpen, onOpenChange, table, data }: Prop) => {
    const { set_ReloadCate } = useReload()
    const [Title, Set_Title] = useState("")
    const [Value_Cate, Set_Value_Cate] = useState<Create_Cate_Type>(
        Init_Cate
    );
    useEffect(() => {
        Set_Title(table)
    }, [table, data])

    const SubmitForm = (e: any, onClose: () => void) => {
        e.preventDefault();
        const Error_Check = Validate_Create_Cate(Value_Cate.Category_Name)
        if (!Error_Check.status) {
            Category.Create(Value_Cate).then((res) => {
                if (res.status == 200) {
                    set_ReloadCate()
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
                                    onChange={(e) => Set_Value_Cate({ ...Value_Cate, Category_Name: e.target.value })} />
                                {/* <Input type="text" label="Depscription"
                                    onChange={(e) => Set_Value_Cate({ ...Value_Cate, Description: e.target.value })} /> */}
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

export default CreateFormCate;

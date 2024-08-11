'use client'
import React, { useEffect, useState } from 'react';
import { Modal, ModalContent, ModalBody, ModalFooter, Button, Input, Select, SelectItem } from "@nextui-org/react";
import { useReload } from '@/contexts/providerReload';
import { create_subType, subModel } from '@/model/subsModel';
import { useSelector } from 'react-redux';
import { RootState } from '@/hooks/redux/store';
import { toast } from 'react-toastify';
import { Subcription } from '@/api/Subscription';
import { Validate_Create_Sub } from '@/util/Validate/Sub';
import { formatMBToGB, ListSizesByte } from '@/util/Convert/Byte';
type Prop = {
    isOpen: boolean,
    onOpenChange: () => void,
    table: string,
    data?: any
}

const CreateFormSub = ({ isOpen, onOpenChange, table, data }: Prop) => {
    const userProvider = useSelector((state: RootState) => state.auth)
    const { set_ReloadSub } = useReload()
    const [Title, Set_Title] = useState("")
    const [valueSub, set_ValueSub] = useState<create_subType>(subModel.init_create)
    const [typeByte, set_TypeByte] = useState('MB')
    const [storageTemp, set_storageTemp] = useState(valueSub.Storage)

    let Array_Status = [
        { label: "public", value: true },
        { label: "private", value: false },
    ];

    useEffect(() => {
        Set_Title(table)
    }, [table, data])

    const SubmitForm = (e: any, onClose: () => void) => {
        e.preventDefault();
        if (userProvider.Access_Token != '' && userProvider.is_Login) {
            const checkError = Validate_Create_Sub(valueSub)
            if (!checkError.status) {
                Subcription.Create(valueSub)
                    .then((res) => {
                        if (res.status == 200) {
                            toast.success(res.message);
                            set_ReloadSub()
                            onClose()
                        } else {
                            toast.error(res.message);
                        }
                    })
            } else {
                const ArrayKey = Object.keys(checkError.Error)
                toast.error(checkError.Error[ArrayKey[0]])
            }

        } else {
            toast.error("Please login!")
        }
    }

    useEffect(() => {
        set_storageTemp(formatMBToGB(valueSub.Storage, typeByte))
    }, [typeByte])
    return (
        <>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <form action="" onSubmit={(e: any) => { SubmitForm(e, onClose) }} className='pt-5'>
                            <ModalBody>
                                <div className='Title_Delete'>Create {Title}</div>
                                <Input type="text" label="Title" value={valueSub.Sub_Title} onChange={(e) => set_ValueSub({ ...valueSub, Sub_Title: e.target.value })} />
                                <div className="frameBox ">
                                    <Input type="number" label="Price" value={String(valueSub.Price)} onChange={(e) => set_ValueSub({ ...valueSub, Price: Number(e.target.value) })} />
                                    <div className="boxDecimal">
                                        <h1>vnd</h1>
                                    </div>
                                </div>

                                <div className="frameStorage">
                                    <Input type="number" label="Storage" value={String(storageTemp)} onChange={(e) => {
                                        set_ValueSub({ ...valueSub, Storage: Number(e.target.value) })
                                        set_storageTemp(Number(e.target.value))
                                    }} />
                                    <Select
                                        isRequired
                                        label={Title}
                                        placeholder="Select"
                                        defaultSelectedKeys={['MB']}
                                        className="w-full"
                                        onChange={(e) => {
                                            set_TypeByte(e.target.value)
                                        }}
                                    >
                                        {ListSizesByte.map((item, i) => (
                                            <SelectItem key={item} value={i} textValue={item}>
                                                {item}
                                            </SelectItem>
                                        ))}
                                    </Select>
                                </div>


                                <div className="frameBox ">
                                    <Input type="number" label="Duration" value={String(valueSub.Duration)} onChange={(e) => set_ValueSub({ ...valueSub, Duration: Number(e.target.value) })} />
                                    <div className="boxDecimal">
                                        <h1>month</h1>
                                    </div>
                                </div>
                                <textarea name="" id="" placeholder='Content' value={valueSub.Content} onChange={(e) => set_ValueSub({ ...valueSub, Content: e.target.value })}>
                                </textarea>

                                <Select
                                    isRequired
                                    label={Title}
                                    placeholder="Select"
                                    defaultSelectedKeys={'Gib'}
                                    className="w-full"
                                    onChange={(e) => { set_ValueSub({ ...valueSub, Status: Array_Status[Number(e.target.value)].value }) }}
                                >
                                    {Array_Status.map((item, i) => (
                                        <SelectItem key={i} value={String(item.value)} textValue={undefined}>
                                            {item.label}
                                        </SelectItem>
                                    ))}
                                </Select>


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

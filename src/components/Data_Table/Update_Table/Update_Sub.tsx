"use client";
import React, { useEffect, useState } from "react";
import {
    Modal,
    ModalContent,
    ModalBody,
    ModalFooter,
    Button,
    Input,
    Select,
    SelectItem,
} from "@nextui-org/react";
import { useReload } from "@/contexts/providerReload";
import { create_subType, subModel, subType, update_subType } from "@/model/subsModel";
import { useSelector } from "react-redux";
import { RootState } from "@/hooks/redux/store";
import { toast } from "react-toastify";
import { Subcription } from "@/api/Subscription";
import { Validate_Update_Sub } from "@/util/Validate/Sub";
import { formatMBToGB, ListSizesByte } from "@/util/Convert/Byte";
type Prop = {
    isOpen: boolean;
    onOpenChange: () => void;
    table: string;
    data: subType;
};

const UpdateFormSub = ({ isOpen, onOpenChange, table, data }: Prop) => {
    const userProvider = useSelector((state: RootState) => state.auth);
    const { set_ReloadSub } = useReload();
    const [Title, Set_Title] = useState("");
    const [valueSub, set_ValueSub] = useState<subType>(data);
    const [change, set_Change] = useState<update_subType>({});
    const [typeByte, set_TypeByte] = useState('MB')
    const [storageTemp, set_storageTemp] = useState(valueSub.Storage)
    let Array_Status = [
        { label: "public", value: true },
        { label: "private", value: false },
    ];

    useEffect(() => {
        Set_Title(table);
    }, [table, data]);

    const SubmitForm = (e: any, onClose: () => void) => {
        e.preventDefault();
        if (userProvider.Access_Token != "" && userProvider.is_Login) {
            if (data?.Sub_Id != '') {
                const checkError = Validate_Update_Sub(change)
                if (!checkError.status) {
                    Subcription.Update(data.Sub_Id, change)
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
                toast.error('Error when update');
            }
        } else {
            toast.error("Please login!");
        }

    };

    useEffect(() => {
        set_storageTemp(formatMBToGB(valueSub.Storage, typeByte))
    }, [typeByte])
    return (
        <>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <form
                            action=""
                            onSubmit={(e: any) => {
                                SubmitForm(e, onClose);
                            }}
                            className="pt-5"
                        >
                            <ModalBody>
                                <div className="Title_Delete">Update {Title}</div>
                                <Input
                                    type="text"
                                    label="Title"
                                    value={valueSub.Sub_Title}
                                    onChange={(e) => {
                                        set_ValueSub({ ...valueSub, Sub_Title: e.target.value });
                                        set_Change({ ...change, Sub_Title: e.target.value })
                                    }}
                                />

                                <div className="frameBox ">
                                    <Input type="number" label="Price" value={String(valueSub.Price)} onChange={(e) => {
                                        set_ValueSub({ ...valueSub, Price: Number(e.target.value) })
                                        set_Change({ ...change, Storage: Number(e.target.value) })
                                    }} />
                                    <div className="boxDecimal">
                                        <h1>vnd</h1>
                                    </div>
                                </div>
                                {/* <Input
                                    type="number"
                                    label="Storage"
                                    value={String(valueSub.Storage)}
                                    onChange={(e) => {
                                        set_ValueSub({
                                            ...valueSub,
                                            Storage: Number(e.target.value),
                                        });
                                        
                                    }}
                                /> */}
                                {/* <Input
                                    type="number"
                                    label="Duration"
                                    value={String(valueSub.Duration)}
                                    onChange={(e) => {
                                        set_ValueSub({
                                            ...valueSub,
                                            Duration: Number(e.target.value),
                                        });
                                        set_Change({ ...change, Duration: Number(e.target.value) })
                                    }}
                                /> */}

                                <div className="frameStorage">
                                    <Input type="number" label="Storage" value={String(storageTemp)} onChange={(e) => {
                                        set_ValueSub({ ...valueSub, Storage: Number(e.target.value) })
                                        set_storageTemp(Number(e.target.value))
                                        set_Change({ ...change, Duration: Number(e.target.value) })
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
                                    <Input type="number" label="Duration" value={String(valueSub.Duration)} onChange={(e) => {
                                        set_ValueSub({ ...valueSub, Duration: Number(e.target.value) })
                                        set_Change({ ...change, Duration: Number(e.target.value) })
                                    }} />
                                    <div className="boxDecimal">
                                        <h1>month</h1>
                                    </div>
                                </div>
                                <textarea name="" id="" placeholder='Content' value={valueSub.Content} onChange={(e) => {
                                    set_ValueSub({ ...valueSub, Content: e.target.value })
                                    set_Change({ ...change, Content: e.target.value })
                                }}>
                                </textarea>

                                <Select
                                    isRequired
                                    label={Title}
                                    placeholder="Select"
                                    className="w-full"
                                    onChange={(e) => {
                                        set_ValueSub({
                                            ...valueSub,
                                            Status: Array_Status[Number(e.target.value)].value,
                                        });
                                        set_Change({ ...change, Status: Array_Status[Number(e.target.value)].value })
                                    }}
                                >
                                    {Array_Status.map((item, i) => (
                                        <SelectItem
                                            key={i}
                                            value={String(item.value)}
                                            textValue={undefined}
                                        >
                                            {item.label}
                                        </SelectItem>
                                    ))}
                                </Select>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" type="submit">
                                    Action
                                </Button>
                            </ModalFooter>
                        </form>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
};

export default UpdateFormSub;

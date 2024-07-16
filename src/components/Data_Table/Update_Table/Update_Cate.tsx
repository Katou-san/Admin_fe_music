"use client";
import React, { useEffect, useState } from "react";
import {
    Modal,
    ModalContent,
    ModalBody,
    ModalFooter,
    Button,
    Input,
    Checkbox,
    Image
} from "@nextui-org/react";

import { toast } from "react-toastify";
import { Validate_Playlist } from "@/util/Validate/Playlist";
import { Res_role, Res_Role_Type } from "@/util/respone_Type/role-respone";
import { Category } from "@/api/Category";
import { Res_cate, Res_Cate_Type } from "@/util/respone_Type/category-respone copy";
import { Validate_Update_Cate } from "@/util/Validate/Category";
type Prop = {
    isOpen: boolean;
    onOpenChange: () => void;
    table: string;
    data: Res_Cate_Type;
};

const UpdateFormCate = ({ isOpen, onOpenChange, table, data }: Prop) => {
    const [Title, Set_Title] = useState("");
    const [Value_Role, Set_Value_Role] = useState<Res_Cate_Type>(
        Res_cate[0]
    );
    const [Change, Set_Change] = useState({})

    useEffect(() => {
        Set_Title(table);
        Set_Value_Role(data)
    }, [table, data]);


    const SubmitForm = (e: any, onClose: () => void) => {
        e.preventDefault();
        const Error_Check = Validate_Update_Cate(Value_Role.Category_Name);

        if (!Error_Check.status) {
            Category.Update(Value_Role.Category_Id, Change)
                .then(res => {
                    if (res.status == 200) {
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
    };


    return (
        <>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <form action="" onSubmit={(e: any) => { SubmitForm(e, onClose) }} className='pt-5'>
                            <ModalBody>
                                <div className='Title_Delete'>Create {Title}</div>
                                <Input type="text" label="Name" value={Value_Role.Category_Name}
                                    onChange={(e) => {
                                        Set_Change({ ...Value_Role, Category_Name: e.target.value })
                                        Set_Value_Role({ ...Value_Role, Category_Name: e.target.value })
                                    }} />
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
};

export default UpdateFormCate;

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
import { Playlist } from "@/api/Playlist";
import { Send } from "@/api/Send";
import { Res_role, Res_Role_Type } from "@/util/respone_Type/role-respone";
import { Role } from "@/api/Role";
type Prop = {
    isOpen: boolean;
    onOpenChange: () => void;
    table: string;
    data: Res_Role_Type;
};

const UpdateFormRole = ({ isOpen, onOpenChange, table, data }: Prop) => {
    const [Title, Set_Title] = useState("");
    const [Value_Role, Set_Value_Role] = useState<Res_Role_Type>(
        Res_role[0]
    );
    const [Change, Set_Change] = useState({})

    useEffect(() => {
        Set_Title(table);
        Set_Value_Role(data)
    }, [table, data]);


    const SubmitForm = (e: any, onClose: () => void) => {
        e.preventDefault();
        const Error_Check = Validate_Playlist(Value_Role.Role_Name, Value_Role.Description);

        if (!Error_Check.status) {
            Role.Update(Value_Role.Role_Id, Change)
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
                                <Input type="text" label="Name" value={Value_Role.Role_Name}
                                    onChange={(e) => {
                                        Set_Change({ ...Value_Role, Role_Name: e.target.value })
                                        Set_Value_Role({ ...Value_Role, Role_Name: e.target.value })
                                    }} />
                                <Input type="text" label="Depscription" value={Value_Role.Description}
                                    onChange={(e) => {
                                        Set_Change({ ...Value_Role, Description: e.target.value })
                                        Set_Value_Role({ ...Value_Role, Description: e.target.value })
                                    }
                                    }
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
};

export default UpdateFormRole;

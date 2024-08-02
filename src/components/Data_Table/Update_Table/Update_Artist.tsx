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
} from "@nextui-org/react";

import { toast } from "react-toastify";
import { useReload } from "@/contexts/providerReload";
import { artistModel, artistType, update_artistType } from "@/model/artistModel";
import { Validate_Update_Artist } from "@/util/Validate/Artist";
import { Artist } from "@/api/Artist";
import { list_userType, userModel, userType } from "@/model/userModel";
import { useSelector } from "react-redux";
import { RootState } from "@/hooks/redux/store";
import useDebounce from "@/hooks/customs/useDebounce";
import { User } from "@/api/User";
type Prop = {
    isOpen: boolean;
    onOpenChange: () => void;
    table: string;
    data: artistType;
};

const UpdateFormArtist = ({ isOpen, onOpenChange, table, data }: Prop) => {
    const userProvider = useSelector((state: RootState) => state.auth)

    const { set_ReloadArtist } = useReload()
    const [Title, Set_Title] = useState("");
    const [status, Set_Status] = useState(false)
    const [infoUser, set_InfoUser] = useState<userType>(userModel.init)
    const [valueArtist, Set_ValueArtist] = useState<artistType>(
        artistModel.init
    );

    const [listUser, set_ListUser] = useState<list_userType>([])
    const [Change, Set_Change] = useState<update_artistType>({})
    const debounceValue = useDebounce(infoUser?.User_Name.trim(), 500)
    useEffect(() => {
        Set_Title(table);
        Set_ValueArtist(data)
    }, [table, data]);


    const SubmitForm = (e: any, onClose: () => void) => {
        e.preventDefault();
        const Error_Check = Validate_Update_Artist(Change);

        if (!Error_Check.status) {
            Artist.Update(valueArtist.Artist_Id, Change)
                .then(res => {
                    if (res.status == 200) {
                        set_ReloadArtist()
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

    useEffect(() => {
        if (infoUser?.User_Name != '' && infoUser?.User_Name != undefined) {
            User.Search_Creator(infoUser?.User_Name)
                .then((res) => {
                    if (res.status == 200) {
                        set_ListUser(res.data)
                        Set_Status(true)
                    }
                })
        } else {
            Set_Status(false)
            set_ListUser([])
            set_InfoUser(userModel.init)
        }
    }, [debounceValue])


    return (
        <>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <form action="" onSubmit={(e: any) => { SubmitForm(e, onClose) }} className='pt-5'>
                            <ModalBody className="bodyUpdateArtist">
                                <div className='Title_Delete'>Update {Title}</div>
                                <Input type="text" label="Name" value={valueArtist.Artist_Name} disabled={true} />
                                <Checkbox isSelected={Change?.Vertify || valueArtist.Vertify} onValueChange={() => {
                                    Set_Change({ ...Change, Vertify: !valueArtist.Vertify })
                                    Set_ValueArtist({ ...valueArtist, Vertify: !valueArtist.Vertify })
                                }
                                }>Vertify</Checkbox>
                                <Input type="text" label="Id user" value={infoUser.User_Id || valueArtist.User_Id} disabled={true} />
                                <Input type="text" label="Name user" value={infoUser.User_Name}
                                    onChange={(e) => {
                                        set_InfoUser({ ...infoUser, User_Name: e.target.value })
                                    }}
                                />
                                {status &&
                                    <ul>
                                        {listUser.map((user, index) => <li key={index}
                                            onClick={() => {
                                                Set_Status(false)
                                                Set_Change({ ...Change, User_Id: user?.User_Id })
                                                set_InfoUser(user)
                                            }}>
                                            {user?.User_Name}</li>)}
                                    </ul>}
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

export default UpdateFormArtist;

'use client'
import React, { useEffect, useState } from 'react';
import { Modal, ModalContent, ModalBody, ModalFooter, Button, Input, Checkbox } from "@nextui-org/react";
import { toast } from 'react-toastify';
import { useReload } from '@/contexts/providerReload';
import { Artist } from '@/api/Artist';
import { artistModel, create_artistType } from '@/model/artistModel';
import { Validate_Create_Artist } from '@/util/Validate/Artist';
import { list_userType, userModel, userType } from '@/model/userModel';
import { User } from '@/api/User';
import useDebounce from '@/hooks/customs/useDebounce';
type Prop = {
    isOpen: boolean,
    onOpenChange: () => void,
    table: string,
    data?: any
}

const CreateFormArtist = ({ isOpen, onOpenChange, table, data }: Prop) => {

    const [status, Set_Status] = useState(false)
    const [infoUser, set_InfoUser] = useState<userType>(userModel.init)
    const { set_ReloadArtist } = useReload()
    const [listUser, set_ListUser] = useState<list_userType>([])
    const [Title, Set_Title] = useState("")
    const [valueArtist, Set_ValueArtist] = useState<create_artistType>(
        artistModel.init_create
    );
    const debounceValue = useDebounce(infoUser?.User_Name.trim(), 500)
    useEffect(() => {
        Set_Title(table)
    }, [table, data])

    const SubmitForm = (e: any, onClose: () => void) => {
        e.preventDefault();
        const Error_Check = Validate_Create_Artist(valueArtist)
        if (!Error_Check.status) {
            Artist.Create(valueArtist).then((res) => {
                if (res.status == 200) {
                    set_ReloadArtist()
                    toast.success(res.message);
                    Set_ValueArtist(artistModel.init_create)
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
                                <div className='Title_Delete'>Create {Title}</div>
                                <Input type="text" label="Name" value={valueArtist.Artist_Name} onChange={(e) => Set_ValueArtist({ ...valueArtist, Artist_Name: e.target.value })} />
                                <Checkbox isSelected={valueArtist.Vertify} onValueChange={() => {
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
                                                set_InfoUser(user)
                                                Set_ValueArtist({ ...valueArtist, User_Id: user.User_Id })
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
}

export default CreateFormArtist;

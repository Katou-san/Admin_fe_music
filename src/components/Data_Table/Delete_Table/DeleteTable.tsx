'use client'
import React, { useEffect, useState } from 'react';
import "./_Delete_Table.scss"
import { Modal, ModalContent, ModalBody, ModalFooter, Button, radio } from "@nextui-org/react";
import { Song } from '@/api/Song';
import { User } from '@/api/User';
import { toast } from 'react-toastify';
import { Playlist } from '@/api/Playlist';
import { Role } from '@/api/Role';
import { Category } from '@/api/Category';
import { Partner } from '@/api/Partner';
import { useReload } from '@/contexts/providerReload';
import { Subcription } from '@/api/Subscription';
import { useSelector } from 'react-redux';
import { RootState } from '@/hooks/redux/store';
import { Bill } from '@/api/Bill';
type Prop = {
    isOpen: boolean,
    onOpenChange: () => void,
    table: string,
    data: any,
    Noitification?: boolean
}

const DeleteTable = ({ isOpen, onOpenChange, table, data, Noitification = false }: Prop) => {
    const userProvider = useSelector((state: RootState) => state.auth)
    const { set_ReloadEmploy, set_ReloadSong, set_ReloadSub, set_ReloadCate, set_ReloadPlaylist, set_ReloadRole, set_ReloadBill } = useReload()
    const [Title, Set_Title] = useState("")
    const [dataProp, Set_dataProp] = useState<typeof data>({})
    let array_key: any[] = Object.keys(data)
    let index_Id = 0
    let index_Name = 0
    switch (table) {
        case "user":
            index_Id = array_key.indexOf("User_Id")
            index_Name = array_key.indexOf("User_Email")
            break;
        case "employess":
            index_Id = array_key.indexOf("User_Id")
            index_Name = array_key.indexOf("User_Email")
            break;
        case "song":
            index_Id = array_key.indexOf("Song_Id")
            index_Name = array_key.indexOf("Song_Name")
            break;
        case "playlist":
            index_Id = array_key.indexOf("Playlist_Id")
            index_Name = array_key.indexOf("Playlist_Name")
            break;
        case "role":
            index_Id = array_key.indexOf("Role_Id")
            index_Name = array_key.indexOf("Role_Name")
            break;
        case "cate":
            index_Id = array_key.indexOf("Category_Id")
            index_Name = array_key.indexOf("Category_Name")
            break;
        case "bill":
            index_Id = array_key.indexOf("Bill_Id")
            index_Name = array_key.indexOf("User_Name")
            break;
        case "partner":
            index_Id = array_key.indexOf("Partner_Id")
            index_Name = array_key.indexOf("Partner_Name")
            break;
        case "sub":
            index_Id = array_key.indexOf("Sub_Id")
            index_Name = array_key.indexOf("Sub_Title")
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

        switch (table) {
            case "user":
                User.Delete(dataProp[array_key[index_Id]]).then((res) => {
                    if (res.status === 200) {
                        set_ReloadEmploy()
                        toast.success(res.message)
                    } else {
                        toast.error(res.message)
                    }
                })
                break;
            case "employess":
                User.Delete(dataProp[array_key[index_Id]]).then((res) => {
                    if (res.status === 200) {
                        set_ReloadEmploy()
                        toast.success(res.message)
                    } else {
                        toast.error(res.message)
                    }
                })
                break;
            case "song":
                if (Noitification) {
                    if (confirm('This song is on many lists! Do you want to delete')) {
                        Song.Delete(dataProp[array_key[index_Id]]).then((res) => {
                            if (res.status === 200) {
                                set_ReloadSong()
                                toast.success(res.message)
                            } else {
                                toast.error(res.message)
                            }
                        })
                    }
                } else {
                    Song.Delete(dataProp[array_key[index_Id]]).then((res) => {
                        if (res.status === 200) {
                            set_ReloadSong()
                            toast.success(res.message)
                        } else {
                            toast.error(res.message)
                        }
                    })
                }

                break;
            case "playlist":
                Playlist.Delete(dataProp[array_key[index_Id]]).then((res) => {
                    if (res.status === 200) {
                        set_ReloadPlaylist()
                        toast.success(res.message)
                    } else {
                        toast.error(res.message)
                    }
                })
                break;
            case "role":
                Role.Delete(dataProp[array_key[index_Id]]).then((res) => {
                    if (res.status === 200) {
                        set_ReloadRole()
                        toast.success(res.message)
                    } else {
                        toast.error(res.message)
                    }
                })
                break;
            case "cate":
                console.log(dataProp[array_key[index_Id]])
                Category.Delete(dataProp[array_key[index_Id]]).then((res) => {
                    if (res.status === 200) {
                        set_ReloadCate()
                        toast.success(res.message)
                    } else {
                        toast.error(res.message)
                    }
                })
                break;
            case 'partner':
                Partner.Delete(dataProp[array_key[index_Id]]).then((res) => {
                    if (res.status === 200) {
                        toast.success(res.message)
                    } else {
                        toast.error(res.message)
                    }
                })
                break;
            case 'sub':
                Subcription.Delete(dataProp[array_key[index_Id]]).then((res) => {
                    if (res.status === 200) {
                        set_ReloadSub()
                        toast.success(res.message)
                    } else {
                        toast.error(res.message)
                    }
                })
                break;
            case 'bill':
                Bill.Delete(dataProp[array_key[index_Id]]).then((res) => {
                    if (res.status === 200) {
                        set_ReloadBill()
                        toast.success(res.message)
                    } else {
                        toast.error(res.message)
                    }
                })
                break;
            default:
                break;
        }
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
                                    <div className='Title_Delete'>Delete {Title}</div>
                                    <div className='Boby_Delete'>Do you want delete {Title} {Title == 'bill' && 'for '} <span className='font-bold'>{dataProp[array_key[index_Name]]}</span></div>
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

export default DeleteTable;

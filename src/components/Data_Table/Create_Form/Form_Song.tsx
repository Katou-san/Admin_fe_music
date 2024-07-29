"use client";
import React, { useEffect, useReducer, useState } from "react";
import img from "@/assets/avatar.jpg";
import errorImg from '../../../../public/errorImg.png'
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
import "./_Create_Form.scss";
import Image from "next/image";
import { AudioLineIcon } from "@/util/Icons/Icon";
import { Validate_Create_Song } from "@/util/Validate/Song";
import { Song } from "@/api/Song";
import { toast } from "react-toastify";
import { Form_Data } from "@/util/FormData/Form_Data";
import { Category } from "@/api/Category";
import { list_cate_respone_type } from "@/model/category";
import { useReload } from "@/contexts/providerReload";
import { create_songType, SongModel, songType } from "@/model/songModel";
import useDebounce from "@/hooks/customs/useDebounce";
import { Artist } from "@/api/Artist";
import { list_artistType } from "@/model/artistModel";
type Prop = {
    isOpen: boolean;
    onOpenChange: () => void;
    table: string;
    data?: any;
};

const CreateFormSong = ({ isOpen, onOpenChange, table, data }: Prop) => {
    const { set_ReloadSong } = useReload()
    const [Title, Set_Title] = useState("");

    const [list_Artist, Set_ListArtist] = useState<list_artistType>([])
    const [List_cate, Set_List_cate] = useState<list_cate_respone_type>([]);
    const [valueSong, set_ValueSong] = useState<create_songType>(SongModel.init_create)
    const [Urlfile, set_url] = useState({
        img: '',
        audio: '',
    });

    const debounceValue = useDebounce(valueSong.Artist.trim(), 500)

    useEffect(() => {
        Set_Title(table);
        Category.Get_All()
            .then((res) => {
                Set_List_cate(res.data);
            })
    }, [table, data]);

    useEffect(() => {
        if (valueSong.Artist != '') {
            Artist.Search(debounceValue)
                .then((res) => {
                    if (res.status == 200) {
                        Set_ListArtist(res.data);
                    }
                })
        }
    }, [debounceValue])

    const SubmitForm = (e: any, onClose: () => void) => {
        e.preventDefault();
        const Error_Check = Validate_Create_Song(
            valueSong.Song_Name,
            valueSong.Song_Audio,
            valueSong.Artist
        );
        if (!Error_Check.status) {
            const formdata = Form_Data(valueSong);
            Song.Create(formdata).then((res) => {
                if (res.status == 200) {
                    set_ReloadSong()
                    toast.success(res.message);
                    onClose();
                } else {
                    toast.error(res.message);
                }
            });
        } else {
            let Array_Key = Object.keys(Error_Check.Error);
            toast.error(Error_Check.Error[Array_Key[0]]);
        }
    };
    return (
        <>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="3xl" className="formModalSong">
                <ModalContent>
                    {(onClose) => (
                        <form
                            action=""
                            onSubmit={(e: any) => {
                                SubmitForm(e, onClose);
                            }}
                            className="pt-5"
                            encType="multipart/form-data"
                        >
                            <ModalBody>
                                <div className="Title_Delete">Create {Title}</div>
                                <Input
                                    type="text"
                                    label="Song name"
                                    value={valueSong?.Song_Name}
                                    onChange={(e) => {
                                        set_ValueSong({ ...valueSong, Song_Name: e.target.value })
                                    }}
                                />

                                <div className="Form_chosse_File">
                                    <div className="left">
                                        <Image
                                            src={Urlfile.img ? Urlfile.img : errorImg}
                                            alt=""
                                            width={1000}
                                            height={1000}
                                        />
                                        <div className="btn_label">
                                            <label htmlFor="ImageInput">Img</label>
                                            <input
                                                type="file"
                                                id="ImageInput"
                                                className="none"
                                                accept="image/*"
                                                onChange={(e) => {
                                                    if (e.target.files?.length != 0) {
                                                        set_ValueSong({ ...valueSong, Song_Image: e.target?.files ? e.target?.files[0] : null })
                                                        set_url({
                                                            ...Urlfile,
                                                            img: e?.target?.files
                                                                ? URL.createObjectURL(e.target.files[0])
                                                                : '',

                                                        });
                                                    }
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="right">
                                        <div className="select_group">
                                            <Select
                                                isRequired
                                                label={Title}
                                                placeholder="Select"
                                                className="w-full"
                                                onChange={(e) => {
                                                    set_ValueSong({ ...valueSong, Category_Id: List_cate[Number(e.target.value)].Category_Id })
                                                }}
                                            >
                                                {List_cate.map((item, i) => (
                                                    <SelectItem key={i} value={item.Category_Id} textValue={undefined}>
                                                        {item.Category_Name}
                                                    </SelectItem>
                                                ))}
                                            </Select>
                                        </div>
                                        <div className="tag_Audio">
                                            {!valueSong.Song_Audio && <AudioLineIcon w={30} />}
                                            {valueSong.Song_Audio && (
                                                <audio
                                                    src={Urlfile.audio ? Urlfile.audio : ""}
                                                    controls
                                                    className="w-[100%] h-[100%]"
                                                />
                                            )}
                                        </div>
                                        <div className="btn_label">
                                            <label htmlFor="AudioInput">Audio</label>
                                            <input
                                                type="file"
                                                id="AudioInput"
                                                className="none"
                                                accept="audio/*"
                                                onChange={(e) => {
                                                    if (e.target.files?.length != 0) {
                                                        set_ValueSong({ ...valueSong, Song_Audio: e.target?.files ? e.target?.files[0] : null })
                                                        set_url({
                                                            ...Urlfile,
                                                            audio: e?.target?.files
                                                                ? URL.createObjectURL(e.target.files[0])
                                                                : '',

                                                        });
                                                    }
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="Content2_FormSong">
                                    <div className="formArtist">
                                        <Input
                                            type="text"
                                            label="Artist"
                                            value={valueSong?.Artist}
                                            onChange={(e) => {
                                                set_ValueSong({ ...valueSong, Artist: e.target.value })
                                            }}
                                        />

                                        <ul>
                                            {list_Artist.length > 0 &&
                                                list_Artist.map((artist, index) =>
                                                    <li key={index}>{artist?.Artist_Name}</li>)
                                            }
                                        </ul>
                                    </div>

                                    <Input
                                        type="text"
                                        label="Tag"
                                        value={valueSong?.Tag}
                                        onChange={(e) => {
                                            set_ValueSong({ ...valueSong, Tag: e.target.value })
                                        }}
                                    />
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" type="submit" disabled={false}>
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

export default CreateFormSong;

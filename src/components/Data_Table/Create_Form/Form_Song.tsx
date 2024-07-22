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
} from "@nextui-org/react";
import SelectCus from "@/components/Custom/SelectCus";
import "./_Create_Form.scss";
import Image from "next/image";
import { AudioLineIcon } from "@/util/Icons/Icon";
import { Reducer_Change } from "@/hooks/reducer/action";
import { Init_Create_Song } from "@/util/respone_Type/song-respone";
import { Validate_Create_Song } from "@/util/Validate/Song";
import { Song } from "@/api/Song";
import { toast } from "react-toastify";
import { Form_Data } from "@/util/FormData/Form_Data";
import { Category } from "@/api/Category";
import { list_cate_respone_type } from "@/model/category";
import { useReload } from "@/contexts/providerReload";
type Prop = {
    isOpen: boolean;
    onOpenChange: () => void;
    table: string;
    data?: any;
};

const CreateFormSong = ({ isOpen, onOpenChange, table, data }: Prop) => {
    const { set_ReloadSong } = useReload()
    const [Title, Set_Title] = useState("");
    const [List_cate, Set_List_cate] = useState<list_cate_respone_type>([]);
    let Array_Status = [
        { label: "public", value: true },
        { label: "private", value: false },
    ];
    const [Value_Song, dispacth_song] = useReducer(
        Reducer_Change,
        Init_Create_Song
    );
    const [Urlfile, dispacth_url] = useReducer(Reducer_Change, {
        img: null,
        audio: null,
    });
    useEffect(() => {
        Set_Title(table);
        Category.Get_All()
            .then((res) => {
                Set_List_cate(res.data);
            })
    }, [table, data]);

    const SubmitForm = (e: any, onClose: () => void) => {
        e.preventDefault();

        const Error_Check = Validate_Create_Song(
            Value_Song.Song_Name,
            Value_Song.Song_Audio,
            Value_Song.Artist
        );
        if (!Error_Check.status) {
            const formdata = Form_Data(Value_Song);
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
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="3xl">
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
                                    value={Value_Song?.Song_Name}
                                    onChange={(e) => {
                                        dispacth_song({
                                            type: "CHANGE",
                                            payload: { Song_Name: e.target.value },
                                        });
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
                                                        dispacth_song({
                                                            type: "CHANGE",
                                                            payload: {
                                                                Song_Image: e.target.files
                                                                    ? e.target.files[0]
                                                                    : null,
                                                            },
                                                        });
                                                        dispacth_url({
                                                            type: "CHANGE",
                                                            payload: {
                                                                img: e.target.files
                                                                    ? URL.createObjectURL(e.target.files[0])
                                                                    : null,
                                                            },
                                                        });
                                                    }
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="right">
                                        <div className="select_group">
                                            <SelectCus
                                                array={List_cate}
                                                lables={["Category_Name", "Category_Id"]}
                                                Title="Category"
                                                event={dispacth_song}
                                            />
                                        </div>
                                        <div className="tag_Audio">
                                            {!Value_Song.Song_Audio && <AudioLineIcon w={30} />}
                                            {Value_Song.Song_Audio && (
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
                                                        dispacth_song({
                                                            type: "CHANGE",
                                                            payload: {
                                                                Song_Audio: e.target.files
                                                                    ? e.target.files[0]
                                                                    : null,
                                                            },
                                                        });
                                                        dispacth_url({
                                                            type: "CHANGE",
                                                            payload: {
                                                                audio: e.target.files
                                                                    ? URL.createObjectURL(e.target.files[0])
                                                                    : null,
                                                            },
                                                        });
                                                    }
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="Content2_FormSong">
                                    <Input
                                        type="text"
                                        label="Artist"
                                        value={Value_Song?.Artist}
                                        onChange={(e) => {
                                            dispacth_song({
                                                type: "CHANGE",
                                                payload: { Artist: e.target.value },
                                            });
                                        }}
                                    />
                                    <Input
                                        type="text"
                                        label="Tag"
                                        value={Value_Song?.Tag}
                                        onChange={(e) => {
                                            dispacth_song({
                                                type: "CHANGE",
                                                payload: { Tag: e.target.value },
                                            });
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

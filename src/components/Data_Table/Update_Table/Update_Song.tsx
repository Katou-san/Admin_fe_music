"use client";
import React, { useEffect, useReducer, useState } from "react";
import img from "@/assets/avatar.jpg";
import {
    Modal,
    ModalContent,
    ModalBody,
    ModalFooter,
    Button,
    Input,
} from "@nextui-org/react";
import SelectCus from "@/components/Custom/SelectCus";
import Image from "next/image";
import { Reducer_Change } from "@/hooks/Reduce_F";
import { Init_Create_Song } from "@/util/respone_Type/song-respone";
import { Validate_Update_Song } from "@/util/Validate/Song";
import { Song } from "@/api/Song";
import { toast } from "react-toastify";
import { Form_Data } from "@/util/FormData/Form_Data";
import { Send } from "@/api/Send";
type Prop = {
    isOpen: boolean;
    onOpenChange: () => void;
    table: string;
    data?: any;
};

const UpdateFormSong = ({ isOpen, onOpenChange, table, data }: Prop) => {
    const [Title, Set_Title] = useState("");
    const [Value_Song, dispacth_song] = useReducer(
        Reducer_Change,
        Init_Create_Song
    );
    const [Change, Set_Change] = useState({})
    let Array_Status = [
        { label: "active", value: "active" },
        { label: "1", value: "1" },
        { label: "2", value: "2" },
    ];


    const [Urlfile, dispacth_url] = useReducer(Reducer_Change, {
        img: null,
        audio: null,
    });
    useEffect(() => {
        Set_Title(table)
        dispacth_song({ type: "CHANGE", payload: data })
        Send.Audio(data.Song_Src)
            .then((res) => dispacth_url({ type: "CHANGE", payload: { audio: URL.createObjectURL(res) } }))
        Send.Image_S(data.Song_Image)
            .then((res) => dispacth_url({ type: "CHANGE", payload: { img: URL.createObjectURL(res) } }))
    }, [table, data])





    const SubmitForm = (e: any, onClose: () => void) => {
        e.preventDefault();
        const Error_Check = Validate_Update_Song(
            Value_Song.Song_Name,
        );


        if (!Error_Check.status) {
            const formdata = Form_Data({ ...Change, Song_Src: "", Category_Id: Value_Song.Category_Id });
            Song.Update(Value_Song.Song_Id, formdata).then((res) => {
                if (res.status == 200) {
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
                                <div className="Title_Delete">Update {Title}</div>
                                <Input
                                    type="text"
                                    label="Song name"
                                    value={Value_Song?.Song_Name}
                                    onChange={(e) => {
                                        dispacth_song({
                                            type: "CHANGE",
                                            payload: { Song_Name: e.target.value },
                                        });
                                        Set_Change({ ...Change, Song_Name: e.target.value })
                                    }}
                                />

                                <div className="Form_chosse_File">
                                    <div className="left">
                                        <Image
                                            src={Urlfile.img ? Urlfile.img : img}
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
                                                        dispacth_url({
                                                            type: "CHANGE",
                                                            payload: {
                                                                img: e.target.files
                                                                    ? URL.createObjectURL(e.target.files[0])
                                                                    : null,
                                                            },
                                                        });
                                                        Set_Change({
                                                            ...Change, Song_Image: e.target.files
                                                                ? e.target.files[0]
                                                                : undefined
                                                        })
                                                    }
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="right">
                                        <div className="select_group">
                                            <SelectCus
                                                array={Array_Status}
                                                lables={["label", "value"]}
                                                Title="Role"
                                                event={dispacth_song}
                                            />
                                        </div>
                                        <div className="tag_Audio">
                                            <audio
                                                src={Urlfile.audio ? Urlfile.audio : ""}
                                                controls
                                                className="w-[100%] h-[100%]"
                                            />
                                        </div>
                                        <div className="btn_label">
                                            <label htmlFor="AudioInput">Audio</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="Content2_FormSong">
                                    <div className="colorFarme">
                                        <div
                                            className={`resultColor `}
                                            style={{ backgroundColor: `${Value_Song.Color}` }}
                                        ></div>
                                        <input
                                            type="color"
                                            id="ColorFarme"
                                            className="none"
                                            onChange={(e: any) => {
                                                dispacth_song({
                                                    type: "CHANGE",
                                                    payload: { Color: e.target.value },
                                                });
                                                Set_Change({ ...Change, Tag: e.target.value })
                                            }}
                                        />
                                    </div>
                                    <Input
                                        type="text"
                                        label="Tag"
                                        value={Value_Song?.Tag}
                                        onChange={(e) => {
                                            dispacth_song({
                                                type: "CHANGE",
                                                payload: { Tag: e.target.value },
                                            });
                                            Set_Change({ ...Change, Tag: e.target.value })
                                        }}
                                    />
                                </div>
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

export default UpdateFormSong;

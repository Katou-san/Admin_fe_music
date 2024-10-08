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
    Select,
    SelectItem,
} from "@nextui-org/react";
import Image from "next/image";
import { Reducer_Change } from "@/hooks/reducer/action";
import { Init_Create_Song, Res_song_Type } from "@/util/respone_Type/song-respone";
import { Validate_Update_Song } from "@/util/Validate/Song";
import { Song } from "@/api/Song";
import { toast } from "react-toastify";
import { Form_Data } from "@/util/FormData/Form_Data";
import { Send } from "@/api/Send";
import { Category } from "@/api/Category";
import { list_cate_respone_type } from "@/model/category";
import { useReload } from "@/contexts/providerReload";
import { songType, update_songType } from "@/model/songModel";
import { artistModel, list_artistType } from "@/model/artistModel";
import useDebounce from "@/hooks/customs/useDebounce";
import { Artist } from "@/api/Artist";
type Prop = {
    isOpen: boolean;
    onOpenChange: () => void;
    table: string;
    data: songType;

};

const UpdateFormSong = ({ isOpen, onOpenChange, table, data }: Prop) => {
    const { set_ReloadSong } = useReload()

    const [Title, Set_Title] = useState("");
    const [list_Artist, Set_ListArtist] = useState<list_artistType>([])
    const [List_cate, Set_List_cate] = useState<list_cate_respone_type>([]);
    const [songValue, set_SongValue] = useState<songType>(
        data
    );
    const [showArtist, set_ShowArtist] = useState(false)
    const [Change, Set_Change] = useState<update_songType>({})
    const [urlAudio, set_urlAudio] = useState('');
    const [urlImg, set_urlImg] = useState('');
    const [artistInfo, set_artistInfo] = useState(artistModel.init)
    const debounceValue = useDebounce(songValue.Artist_Name.trim(), 500)

    useEffect(() => {
        Set_Title(table)
        Category.Get_All()
            .then((res) => {
                Set_List_cate(res.data);
            })

        Send.Audio(data.Song_Audio)
            .then((res) => set_urlAudio(URL.createObjectURL(res)))

        Send.Image_S(data.Song_Image)
            .then((res) => set_urlImg(URL.createObjectURL(res)))


        set_SongValue(data)
    }, [table, data])


    useEffect(() => {
        if (songValue.Artist_Name != '') {
            Artist.Search(debounceValue)
                .then((res) => {
                    if (res.status == 200) {
                        Set_ListArtist(res.data);
                        set_ShowArtist(true)
                    }
                })
        } else {
            Set_ListArtist([])
            set_ShowArtist(false)
        }
    }, [debounceValue])



    const SubmitForm = (e: any, onClose: () => void) => {
        e.preventDefault();
        const Error_Check = Validate_Update_Song(Change);
        if (!Error_Check.status) {
            const formdata = Form_Data({ ...Change, Song_Audio: "" });
            Song.Update(songValue.Song_Id, formdata).then((res) => {
                if (res.status == 200) {
                    toast.success(res.message);
                    set_ReloadSong()
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
                                    value={songValue?.Song_Name}
                                    onChange={(e) => {
                                        set_SongValue({ ...songValue, Song_Name: e.target.value })
                                        Set_Change({ ...Change, Song_Name: e.target.value })
                                    }}
                                />

                                <div className="Form_chosse_File">
                                    <div className="left">
                                        <Image
                                            src={urlImg || img}
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
                                                        set_urlImg(
                                                            e.target?.files
                                                                ? URL.createObjectURL(e.target.files[0])
                                                                : '')

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
                                            <Select
                                                isRequired
                                                label={Title}
                                                placeholder="Select"
                                                className="w-full"
                                                defaultSelectedKeys={[data.Category_Id]}
                                                onChange={(e) => {
                                                    Set_Change({ ...Change, Category_Id: e.target.value })
                                                }}
                                            >
                                                {List_cate.map((item, i) => (
                                                    <SelectItem
                                                        key={item.Category_Id}
                                                        value={String(item.Category_Id)}
                                                        textValue={undefined}
                                                    >
                                                        {item.Category_Name}
                                                    </SelectItem>
                                                ))}
                                            </Select>
                                        </div>
                                        <div className="tag_Audio">
                                            <audio
                                                src={urlAudio ? urlAudio : ""}
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
                                    <div className="formArtistSongUpdate">
                                        <Input
                                            type="text"
                                            label="Artist"
                                            value={songValue?.Artist_Name}
                                            onChange={(e) => {
                                                set_SongValue({ ...songValue, Artist_Name: e.target.value })
                                                Set_Change({ ...Change, Artist: e.target.value })
                                            }}
                                        />
                                        {showArtist &&
                                            <ul>
                                                {list_Artist.length > 0 &&
                                                    list_Artist.map((artist, index) =>
                                                        <li key={index}
                                                            onClick={() => {
                                                                set_SongValue({ ...songValue, Artist_Name: artist.Artist_Name })
                                                                Set_Change({ ...Change, Artist: artist.Artist_Id })
                                                                set_artistInfo(artist)
                                                                set_ShowArtist(false)
                                                            }}
                                                        >{artist?.Artist_Name}</li>)
                                                }
                                            </ul>}
                                    </div>

                                    <Input
                                        type="text"
                                        label="Tag"
                                        value={songValue?.Tag}
                                        onChange={(e) => {
                                            set_SongValue({ ...songValue, Tag: e.target.value })
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

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
import { Form_Data } from "@/util/FormData/Form_Data";
import { Res_Playlist, Res_Playlist_Type } from "@/util/respone_Type/playlist-respone";
import { Validate_Playlist } from "@/util/Validate/Playlist";
import { Playlist } from "@/api/Playlist";
import { Send } from "@/api/Send";
import { useReload } from "@/contexts/providerReload";
type Prop = {
    isOpen: boolean;
    onOpenChange: () => void;
    table: string;
    data: Res_Playlist_Type;
};

const UpdateFormPlaylist = ({ isOpen, onOpenChange, table, data }: Prop) => {
    const { set_ReloadPlaylist } = useReload()
    const [Title, Set_Title] = useState("");
    const [status, Set_Status] = useState(data.is_Publish)
    const [Value_playlist, Set_Value_playlist] = useState<Res_Playlist_Type>(
        Res_Playlist[0]
    );
    const [url_load, Set_url] = useState<{ img: any, thumnail: any }>({ img: "", thumnail: "" })
    const [Change, Set_Change] = useState({})

    useEffect(() => {
        Set_Title(table);
        Set_Value_playlist(data)
        Send.Image_P(data.Image)
            .then(respone => {
                Send.Thumnail_P(data.Thumbnail)
                    .then(res => Set_url({ img: URL.createObjectURL(respone), thumnail: URL.createObjectURL(res) }))
            })
    }, [table, data]);


    const SubmitForm = (e: any, onClose: () => void) => {
        e.preventDefault();
        const Error_Check = Validate_Playlist(Value_playlist.Playlist_Name, Value_playlist.Artist);

        if (!Error_Check.status) {
            const formdata = Form_Data({ ...Change, is_Publish: status });
            Playlist.Update(Value_playlist.Playlist_Id, formdata).then((res) => {
                if (res.status == 200) {
                    set_ReloadPlaylist()
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
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="lg">
                <ModalContent>
                    {(onClose) => (
                        <form
                            action=""
                            onSubmit={(e: any) => {
                                SubmitForm(e, onClose);
                            }}
                            className="pt-5  Playlist_Form"
                            encType="multipart/form-data"
                        >
                            <ModalBody>

                                <div className="Title_Delete">Update {Title}</div>
                                <Input
                                    type="text"
                                    label="Playlist name"
                                    value={Value_playlist?.Playlist_Name}
                                    onChange={(e) => {
                                        Set_Value_playlist({ ...Value_playlist, Playlist_Name: e.target.value })
                                        Set_Change({ ...Change, Playlist_Name: e.target.value })
                                    }}
                                />
                                <Input
                                    type="text"
                                    label="Artist"
                                    value={Value_playlist?.Artist}
                                    onChange={(e) => {
                                        Set_Value_playlist({ ...Value_playlist, Artist: e.target.value })
                                        Set_Change({ ...Change, Artist: e.target.value })
                                    }}
                                />
                                <Checkbox isSelected={status} size="md" onValueChange={Set_Status}> Public</Checkbox>
                                <div className="Playlist_Layout">
                                    <div className="thumnail_playlist" style={{ backgroundImage: `url(${url_load.thumnail})` }}>
                                        <div className="content_Playlist">
                                            <Image src={url_load.img} alt="" />
                                            <div className="">
                                                <h1 className=" name_Update overflow__Text">{data.Playlist_Name}</h1>
                                                <div className="Quality"><span> {data.Tracks ? data.Tracks.length : 0} </span>Songs</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="temp_Layout">
                                    </div>
                                </div>
                                <div className="btn_Form_Playlist">
                                    <label htmlFor="image_Playlist">Image</label>
                                    <input type="file" name="image_Playlist" id="image_Playlist" className="none"
                                        onChange={(e) => {
                                            Set_url({ ...url_load, img: e.target.files ? URL.createObjectURL(e.target.files[0]) : url_load.thumnail })
                                            Set_Change({ ...Change, Image: e.target.files ? e.target.files[0] : null })
                                        }}
                                    />

                                    <label htmlFor="thumnail_Playlist">Thumnail</label>
                                    <input type="file" name="thumnail_Playlist" id="thumnail_Playlist" className="none"
                                        onChange={(e) => {
                                            Set_url({ ...url_load, thumnail: e.target.files ? URL.createObjectURL(e.target.files[0]) : url_load.thumnail })
                                            Set_Change({ ...Change, Thumbnail: e.target.files ? e.target.files[0] : null })
                                        }}
                                    />
                                </div>

                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" type="submit" >
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

export default UpdateFormPlaylist;

"use client";
import { Send } from "@/api/Send";
import { CloseIcon } from "@/util/Icons/Icon";
import "./_detail.scss";
import React, { useEffect, useState } from "react";
import {
    Res_Playlist,
    Res_Playlist_Type,
} from "@/util/respone_Type/playlist-respone";
import { Image, useDisclosure } from "@nextui-org/react";
import ItemDetailArtist from "@/components/Data_Table/Item_Table/Item_Detail_Artist";
import { list_artistType } from "@/model/artistModel";
import { Artist } from "@/api/Artist";
import { useReload } from "@/contexts/providerReload";

type Prop = {
    isOpen: boolean
    table: string
};

const DetailArtist = ({ table, isOpen }: Prop) => {
    const { reload_Artist } = useReload()
    const [url_load, Set_url] = useState({ img: "", thumnail: "" });
    const [list_Artist, Set_listArtist] = useState<list_artistType>([])

    useEffect(() => {
        if (isOpen) {
            Artist.Get_Type(false)
                .then((res) => {
                    if (res.status == 200) {
                        Set_listArtist(res.data)
                    }
                })
        }
    }, [isOpen, reload_Artist])

    return (
        <div className="Form_Detail Artist_Detail">
            <div className="Title_Detail">{table}</div>
            <div
                className="CloseIcon"
            >
                <CloseIcon w={50} color="red" />
            </div>
            <div className="listArtist">
                {
                    list_Artist.length > 0 && list_Artist.map((artist, index) =>
                        <ItemDetailArtist key={index} artist={artist} />
                    )
                }
                {
                    list_Artist.length == 0 && <div className="emtyUi"><h1>Emty</h1></div>

                }
            </div>
        </div>
    );
};

export default DetailArtist;

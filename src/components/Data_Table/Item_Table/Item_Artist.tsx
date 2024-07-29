"use client";
import { Send } from "@/api/Send";
import BtnDataTable from "@/components/Data_Table/Btn_DataTable";
import { Avatar } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import "./_Item.scss";
import { getStatusUser } from "@/util/Convert/Status";
import { userModel, userType } from "@/model/userModel";
import imgTemp from "../../../../public/errorImg.png";
import { artistType } from "@/model/artistModel";
import { User } from "@/api/User";
import Image from "next/image";

type Prop = {
    artist: artistType;
    event: any;
    type?: string;
};

const ItemArtist = ({ artist, event, type = "artist" }: Prop) => {
    const [url, Set_url] = useState("");
    const [infoUser, set_Info] = useState<userType>(userModel.init);

    useEffect(() => {
        if (artist?.User_Id != "unknown" && artist?.User_Id != undefined && artist?.User_Id != "") {
            User.Get_Id(artist?.User_Id).then((res) => {
                if (res.status == 200) {
                    set_Info(res.data);
                }
            });
        }
    }, [artist]);

    useEffect(() => {
        if (
            artist?.User_Id != "unknown" &&
            artist?.User_Id != undefined &&
            infoUser?.User_Id != "" &&
            infoUser?.Avatar != ""
        ) {
            Send.Avatar(infoUser?.Avatar).then((res) => {
                if (res.status == 200) {
                    Set_url(URL.createObjectURL(res))
                }
            });
        }
    }, [infoUser]);

    return (
        <div className="Item_Table Item_Table_User Item">
            <Image width={50} height={50} alt="" src={url || imgTemp} />
            <div className="Name_Item">
                <h4>{artist?.Artist_Name}</h4>
                <h6>{artist?.User_Id != "" ? artist.User_Id : "unkown"}</h6>
            </div>
            <div className="Role_Item">
                <h4>{artist?.Artist_Key}</h4>
            </div>
            <div className="Status_Item">
                <span className={`${getStatusUser(Number(artist?.Vertify))}`}>
                    {" "}
                    {getStatusUser(Number(artist.Vertify))}
                </span>
            </div>

            <BtnDataTable type={type} event={event} data={artist} />
        </div>
    );
};

export default ItemArtist;

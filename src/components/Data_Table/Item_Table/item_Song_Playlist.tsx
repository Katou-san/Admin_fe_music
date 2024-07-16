"use client";
import { Send } from "@/api/Send";
import { Res_song_Type } from "@/util/respone_Type/song-respone";
import { Avatar } from "@nextui-org/react";
import React, { useEffect, useRef, useState } from "react";
import "./_Item.scss";
import { Add_Icon } from "@/util/Icons/Icon_Figma";

const ItemSongPlaylist = ({ song }: { song: Res_song_Type }) => {
  const [url, Set_url] = useState("");
  const [dropdown_Open, set_Open] = useState(false);
  const itemRef = useRef<HTMLInputElement | null>(null);
  const handleMouse = () => {
    set_Open(false);
  };

  useEffect(() => {
    Send.Image_S(song.Song_Image).then((res) =>
      Set_url(URL.createObjectURL(res))
    );
  }, [song]);

  useEffect(() => {
    let handle = (e: any) => {
      if (itemRef.current && !itemRef.current.contains(e.target)) {
        set_Open(false);
      }
    };
    document.addEventListener("mousedown", handle);
    return () => {
      document.removeEventListener("mousedown", handle);
    };
  }, []);

  return (
    <div className="Item_Song_Playlist " ref={itemRef}>
      <Avatar isBordered radius="md" size="lg" src={url} />
      <div className="Name_Item">
        <h4>{song.Song_Name}</h4>
        <h6>{song.Artist}</h6>
      </div>
      <div
        className="Icons"
        onClick={() => {
          set_Open((prev) => !prev);
        }}
      >
        <Add_Icon
          w={40}
          color={`${dropdown_Open ? "#18c964" : "rgb(15, 15, 15)"} `}
        />
      </div>

      <div
        className={`yourPlaylist ${
          dropdown_Open ? "showOption" : "hiddenOption"
        }`}
      >
        <div className="titleOption">Your playlist</div>
        <ul>
          <li onClick={handleMouse}>hello</li>
          <li onClick={handleMouse}>hello</li>
          <li onClick={handleMouse}>hello</li>
          <li onClick={handleMouse}>hello</li>
        </ul>
      </div>
    </div>
  );
};

export default ItemSongPlaylist;

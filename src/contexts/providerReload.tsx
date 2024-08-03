"use client";
import React, { createContext, ReactNode, useContext, useState } from "react";
interface contextType {
    reload_Employ: boolean;
    reload_Cate: boolean;
    reload_Song: boolean;
    reload_Playlist: boolean;
    reload_Sub: boolean;
    reload_Role: boolean;
    reload_Bill: boolean,
    reload_Artist: boolean,
    reload_Partner: boolean,
    reload_Ads: boolean,
    set_ReloadAds: () => void,
    set_ReloadPartner: () => void,
    set_ReloadArtist: () => void,
    set_ReloadBill: () => void,
    set_ReloadEmploy: () => void;
    set_ReloadCate: () => void;
    set_ReloadSong: () => void;
    set_ReloadPlaylist: () => void;
    set_ReloadSub: () => void;
    set_ReloadRole: () => void;
}

const defaultContext = {
    reload_Employ: false,
    reload_Cate: false,
    reload_Song: false,
    reload_Playlist: false,
    reload_Sub: false,
    reload_Role: false,
    reload_Bill: false,
    reload_Artist: false,
    reload_Partner: false,
    reload_Ads: false,
    set_ReloadAds: () => { },
    set_ReloadPartner: () => { },
    set_ReloadArtist: () => { },
    set_ReloadBill: () => { },
    set_ReloadEmploy: () => { },
    set_ReloadCate: () => { },
    set_ReloadSong: () => { },
    set_ReloadPlaylist: () => { },
    set_ReloadSub: () => { },
    set_ReloadRole: () => { },
};

const contextReload = createContext<contextType>(defaultContext);

const ProviderReload = ({ children }: { children: ReactNode }) => {
    const [reloadEmploy, set_Reload_Employ] = useState(false);
    const [reloadRole, set_Reload_Role] = useState(false);
    const [reloadCate, set_Reload_Cate] = useState(false);
    const [reloadSong, set_Reload_Song] = useState(false);
    const [reloadPlaylist, set_Reload_Playlist] = useState(false);
    const [reloadSub, set_Reload_Sub] = useState(false);
    const [reloadBill, set_Reload_Bill] = useState(false);
    const [reloadArtist, set_Reload_Artist] = useState(false);
    const [reloadPartner, set_Reload_Partner] = useState(false);
    const [reloadAds, set_Reload_Ads] = useState(false);

    return (
        <contextReload.Provider
            value={{
                reload_Employ: reloadEmploy,
                reload_Cate: reloadCate,
                reload_Song: reloadSong,
                reload_Playlist: reloadPlaylist,
                reload_Sub: reloadSub,
                reload_Role: reloadRole,
                reload_Bill: reloadBill,
                reload_Artist: reloadArtist,
                reload_Partner: reloadPartner,
                reload_Ads: reloadAds,
                set_ReloadAds: () => set_Reload_Ads(prev => !prev),
                set_ReloadPartner: () => set_Reload_Partner(prev => !prev),
                set_ReloadArtist: () => set_Reload_Artist(prev => !prev),
                set_ReloadBill: () => set_Reload_Bill(prev => !prev),
                set_ReloadEmploy: () => set_Reload_Employ(prev => !prev),
                set_ReloadCate: () => set_Reload_Cate(prev => !prev),
                set_ReloadSong: () => set_Reload_Song(prev => !prev),
                set_ReloadPlaylist: () => set_Reload_Playlist(prev => !prev),
                set_ReloadSub: () => set_Reload_Sub(prev => !prev),
                set_ReloadRole: () => set_Reload_Role(prev => !prev),
            }}
        >
            {children}
        </contextReload.Provider>
    );
};

const useReload = () => {
    return useContext(contextReload);
};
export { ProviderReload, contextReload, useReload };

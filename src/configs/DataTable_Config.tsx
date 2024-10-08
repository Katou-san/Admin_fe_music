export const Column_User = [
    { name: "NAME", uid: "name" },
    { name: "ROLE", uid: "role" },
    { name: "STATUS", uid: "status" },
    { name: "ACTIONS", uid: "actions" }
];
export type Column_User_item__Type = typeof Column_User[0]


export const Column_Song = [
    { name: "INFO", uid: "info" },
    { name: "CATEGORY", uid: "category" },
    { name: "PUBLIC", uid: "public" },
    { name: "ACTIONS", uid: "actions" }
];
export type Column_Song_item__Type = typeof Column_Song[0]

export const Column_Playlist = [
    { name: "INFO", uid: "info" },
    { name: "PUBLIC", uid: "public" },
    { name: "QUANTITY", uid: "quantity" },
    { name: "ACTIONS", uid: "actions" }
];
export type Column_Playlist_item__Type = typeof Column_Playlist[0]

export const Column_Role = [
    { name: "INDEX", uid: "index" },
    { name: "INFO", uid: "info" },
    { name: "DESCRIPTION", uid: "Description" },
    { name: "ACTIONS", uid: "actions" }
];
export type Column_Role_item__Type = typeof Column_Role[0]

export const Column_Cate = [
    { name: "INDEX", uid: "index" },
    { name: "INFO", uid: "info" },
    { name: "STATUS", uid: "status" },
    { name: "ACTIONS", uid: "actions" }
];
export type Column_Cate_item__Type = typeof Column_Role[0]

export const Column_Bill = [
    { name: "INFO", uid: "info" },
    { name: "SUBSCRIPTION", uid: "subcription" },
    { name: "CREATE DAY", uid: "create" },
    { name: 'EXPIRATION DAY', uid: "expiration" }

];
export type Column_Bill_item__Type = typeof Column_Bill[0]



export const Column_Sub = [
    { name: "INFO", uid: "info" },
    { name: "PRICE", uid: "price" },
    { name: "STATUS", uid: "status" },
    { name: "DURATION", uid: "duration" },
    { name: "ACTIONS", uid: "actions" }
];
export type Column_Sub_item__Type = typeof Column_Role[0]

export const Column_Artist = [
    { name: "INFO", uid: "info" },
    { name: "KEY", uid: "key" },
    { name: "VERTIFY", uid: "vertify" },
    { name: "ACTIONS", uid: "actions" }
];
export type Column_Artist_item__Type = typeof Column_Role[0]

export const Column_Partner = [
    { name: "INFO", uid: "info" },
    { name: "STATUS", uid: "status" },
    { name: "CONTRACT", uid: "contract" },
    { name: "ACTIONS", uid: "actions" }
];
export type Column_Partner_item__Type = typeof Column_Role[0]

export const Column_Ads = [
    { name: "INFO", uid: "info" },
    { name: "DATE", uid: "date" },
    { name: "ACTIVE", uid: "active" },
    { name: "ACTIONS", uid: "actions" }
];
export type Column_Ads_item__Type = typeof Column_Ads[0]

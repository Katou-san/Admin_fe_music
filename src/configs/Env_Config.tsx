export const EnvConfig = {
  NEXT_PUBLIC_HOST: "http://localhost:8080/api/admin/v1",
  NEXT_PUBLIC_CLIENT: "http://localhost:8080/api",

  NEXT_PUBLIC_SEND: "http://localhost:8080/api/v1",

  NEXT_PUBLIC_SIGNUP: "/user/signup",
  NEXT_PUBLIC_LOGIN: "/user/login/admin",
  NEXT_PUBLIC_AUTH: "/user/Oauth",
  NEXT_PUBLIC_USER: "/user",
  NEXT_PUBLIC_USER_MANAGE: "/users",

  NEXT_PUBLIC_PARTNER: "/partner",

  NEXT_PUBLIC_SONG: "/song",
  NEXT_PUBLIC_SONG_MANAGE: "/songs",

  NEXT_PUBLIC_TRACK: "/track",

  NEXT_PUBLIC_ROLE: "/role",
  NEXT_PUBLIC_ROLES: "/roles",

  NEXT_PUBLIC_CATEGORY: "/category",

  NEXT_PUBLIC_LIKE: "/like",

  NEXT_PUBLIC_PLAYLIST: "/playlist",
  NEXT_PUBLIC_PLAYLIST_MANAGE: "/playlists",

  NEXT_PUBLIC_EMPLOYESS: "/employess",

  NEXT_PUBLIC_BILL: "/bill",

  NEXT_PUBLIC_SUBSCRIPTION: "/sub",

  NEXT_PUBLIC_GET_AVATAR: "/send/user/avatar",
  NEXT_PUBLIC_GET_AUDIO: "/send/audio",
  NEXT_PUBLIC_GET_IMAGE: "/send/image",
  NEXT_PUBLIC_GET_IMAGE_P: "/send/image_P",
  NEXT_PUBLIC_GET_THUMNAIL_P: "/send/thumbnail",

  NEXT_PUBLIC_GET_DASHBOARD_1: "/dashboard_1",
  NEXT_PUBLIC_GET_DASHBOARD_CHAR_1: "/dashboard_char_1",

  LocalToken: "AccessTokenA",
};

export type EnvConfig_type = typeof EnvConfig;

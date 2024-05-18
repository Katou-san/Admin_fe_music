
export const EnvConfig = {
    NEXT_PUBLIC_HOST: "http://localhost:8080/api/admin/v1",
    NEXT_PUBLIC_CLIENT: "http://localhost:8080/api",
    NEXT_PUBLIC_SIGNUP: "/user/signup",
    NEXT_PUBLIC_LOGIN: "/user/login",
    NEXT_PUBLIC_USER: "/user",
    NEXT_PUBLIC_SONG: "/song",
    NEXT_PUBLIC_ROLE: "/role",
    NEXT_PUBLIC_CATEGORY: "/category",
    NEXT_PUBLIC_PLAYLIST: "/playlist",
    NEXT_PUBLIC_EMPLOYESS: "/employess",
    NEXT_PUBLIC_GET_IMAGE: "/send/image",
    NEXT_PUBLIC_GET_AVATAR: "/send/user/avatar",
    NEXT_PUBLIC_GET_AUDIO: "/send/audio",
}

export type EnvConfig_type = typeof EnvConfig
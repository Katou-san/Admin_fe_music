
export const EnvConfig = {
    NEXT_PUBLIC_HOST: "http://localhost:8080/api/admin/v1",
    NEXT_PUBLIC_CLIENT: "http://localhost:8080/api",
    NEXT_PUBLIC_LOGIN: "/user/Login",
    NEXT_PUBLIC_USER: "/user",
    NEXT_PUBLIC_GET_IMAGE: "/send/image",
    NEXT_PUBLIC_GET_AVATAR: "/send/user/avatar",
}

export type EnvConfig_type = typeof EnvConfig
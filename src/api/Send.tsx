import { http } from "@/api/rootHttp";
import { EnvConfig } from "@/configs/Env_Config";
import { Avatar } from "@nextui-org/react";

export const Send = {
    Image: async (id: string): Promise<any> =>
        await http.get(`${EnvConfig.NEXT_PUBLIC_CLIENT}${EnvConfig.NEXT_PUBLIC_GET_IMAGE}/${id}`),
    Audio: async (id: string): Promise<any> =>
        await http.get(`${EnvConfig.NEXT_PUBLIC_HOST}${EnvConfig.NEXT_PUBLIC_GET_USER}`),
    Avatar: async (id: string): Promise<any> =>
        await http.get(`${EnvConfig.NEXT_PUBLIC_CLIENT}${EnvConfig.NEXT_PUBLIC_GET_AVATAR}/${id}`, {
            responseType: "blob",
        })
};

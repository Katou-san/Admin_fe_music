import { http } from "@/api/@rootHttp";
import { EnvConfig } from "@/configs/Env_Config";

export const Send = {
    Image_S: async (id: string): Promise<any> =>
        await http.get(`${EnvConfig.NEXT_PUBLIC_CLIENT}${EnvConfig.NEXT_PUBLIC_GET_IMAGE}/${id}`, {
            responseType: "blob",
        }),
    Audio: async (id: string): Promise<any> =>
        await http.get(`${EnvConfig.NEXT_PUBLIC_CLIENT}${EnvConfig.NEXT_PUBLIC_GET_AUDIO}/${id}`, {
            responseType: "blob",
        }),
    Avatar: async (id: string): Promise<any> =>
        await http.get(`${EnvConfig.NEXT_PUBLIC_CLIENT}${EnvConfig.NEXT_PUBLIC_GET_AVATAR}/${id}`, {
            responseType: "blob",
        })
};

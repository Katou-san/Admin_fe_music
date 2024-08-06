import header from "@/api/@header";
import { http } from "@/api/@rootHttp";
import { EnvConfig } from "@/configs/Env_Config";
import { create_artistType, update_artistType } from "@/model/artistModel";

export const Ads = {
    Get_Id: async (id: string): Promise<any> =>
        await http.get(`${EnvConfig.NEXT_PUBLIC_HOST}${EnvConfig.NEXT_PUBLIC_ADS}/${id}`, header()),
    Get_All: async (): Promise<any> =>
        await http.get(`${EnvConfig.NEXT_PUBLIC_HOST}${EnvConfig.NEXT_PUBLIC_ADS}`, header()),
    Create: async (body: any): Promise<any> =>
        await http.post(`${EnvConfig.NEXT_PUBLIC_HOST}${EnvConfig.NEXT_PUBLIC_ADS}`, body, header()),
    Update: async (id: string, body: any): Promise<any> =>
        await http.put(`${EnvConfig.NEXT_PUBLIC_HOST}${EnvConfig.NEXT_PUBLIC_ADS}/${id}`, body, header()),

    Delete: async (id: string) =>
        await http.delete(`${EnvConfig.NEXT_PUBLIC_HOST}${EnvConfig.NEXT_PUBLIC_ADS}/${id}`, header()),
};
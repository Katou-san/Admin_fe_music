import header from "@/api/@header";
import { http } from "@/api/@rootHttp";
import { EnvConfig } from "@/configs/Env_Config";


export const Partner = {
    Get_Id: async (id: string): Promise<any> =>
        await http.get(`${EnvConfig.NEXT_PUBLIC_HOST}${EnvConfig.NEXT_PUBLIC_PARTNER}/${id}`),
    Get_All: async () =>
        await http.get(`${EnvConfig.NEXT_PUBLIC_HOST}${EnvConfig.NEXT_PUBLIC_PARTNER}`, header()),
    Find: async (name: string): Promise<any> =>
        await http.get(`${EnvConfig.NEXT_PUBLIC_HOST}${EnvConfig.NEXT_PUBLIC_PARTNERS}/${name}`, header()),
    Create: async (body: any): Promise<any> =>
        await http.post(`${EnvConfig.NEXT_PUBLIC_HOST}${EnvConfig.NEXT_PUBLIC_PARTNER}`, body, header()),
    Update: async (id: string, body: any): Promise<any> =>
        await http.put(`${EnvConfig.NEXT_PUBLIC_HOST}${EnvConfig.NEXT_PUBLIC_PARTNER}/${id}`, body, header()),
    Delete: async (id: string) =>
        await http.delete(`${EnvConfig.NEXT_PUBLIC_HOST}${EnvConfig.NEXT_PUBLIC_PARTNER}/${id}`, header())
};

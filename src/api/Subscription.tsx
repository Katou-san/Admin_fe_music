import header from "@/api/@header";
import { http } from "@/api/@rootHttp";
import { EnvConfig } from "@/configs/Env_Config";
import { create_subType } from "@/model/subsModel";



export const Subcription = {
    Get_Id: async (id: string): Promise<any> =>
        await http.get(
            `${EnvConfig.NEXT_PUBLIC_HOST}${EnvConfig.NEXT_PUBLIC_SUBSCRIPTION}/${id}`
        ),
    Get_Sub: async () =>
        await http.get(
            `${EnvConfig.NEXT_PUBLIC_HOST}${EnvConfig.NEXT_PUBLIC_SUBSCRIPTIONS}`,
            header()
        ),
    Create: async (body: create_subType): Promise<any> =>
        await http.post(
            `${EnvConfig.NEXT_PUBLIC_HOST}${EnvConfig.NEXT_PUBLIC_SUBSCRIPTION}`,
            body,
            header()
        ),
    Update: async (id: string, body: any): Promise<any> =>
        await http.put(
            `${EnvConfig.NEXT_PUBLIC_HOST}${EnvConfig.NEXT_PUBLIC_SUBSCRIPTION}/${id}`,
            body,
            header()
        ),
    Delete: async (id: string) =>
        await http.delete(
            `${EnvConfig.NEXT_PUBLIC_HOST}${EnvConfig.NEXT_PUBLIC_SUBSCRIPTION}/${id}`,
            header()
        ),
};

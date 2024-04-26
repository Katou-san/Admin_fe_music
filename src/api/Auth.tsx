import { http } from "@/api/rootHttp";
import { EnvConfig } from "@/configs/Env_Config";
import { Login_Type, Register_Type } from "@/util/interface-auth";

export const Auth = {
    Login: async (body: Login_Type, option: any = undefined): Promise<any> =>
        await http.post(`${EnvConfig.NEXT_PUBLIC_HOST}${EnvConfig.NEXT_PUBLIC_LOGIN}`, body, option),
    Sigup: async (body: Register_Type, option: any = undefined) =>
        await http.post(`${EnvConfig.NEXT_PUBLIC_LOGIN}`, body, option),
};

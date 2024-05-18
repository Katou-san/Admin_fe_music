import { http } from "@/api/@rootHttp";
import { EnvConfig } from "@/configs/Env_Config";
import { Login_Type, Register_Type } from "@/util/respone_Type/interface-auth";

export const Auth = {
    Login: async (body: Login_Type): Promise<any> =>
        await http.post(`${EnvConfig.NEXT_PUBLIC_HOST}${EnvConfig.NEXT_PUBLIC_LOGIN}`, body),
    Sigup: async (body: Register_Type) =>
        await http.post(`${EnvConfig.NEXT_PUBLIC_HOST}${EnvConfig.NEXT_PUBLIC_SIGNUP}`, body),
};

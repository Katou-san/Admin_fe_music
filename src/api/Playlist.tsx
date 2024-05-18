import { http } from "@/api/@rootHttp";
import { EnvConfig } from "@/configs/Env_Config";
import { Update_User_Type } from "@/util/respone_Type/user-respone";

const Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbXBsb3llc3NfSWQiOiJARW1wbG95ZXNzMjAyNDMzMTgzMjIxNzIyN2thdG91IiwiRW1wbG95ZXNzX05hbWUiOiJodW5nQGdtYWlsLmNvbSIsIlJvbGUiOiJAUm9sZTIwMjQzMjE4ODQ0OTIwNDRBZG1pbiIsImV4cGlyZXNJbiI6IjM2NWQiLCJpYXQiOjE3MTQwNDQwNTN9.dQ3bYur69zh7Qp_gxxlfzb6_EKJqY55RvSy7koZdE08"
export const Playlist = {
    Get_Id: async (id: string): Promise<any> =>
        await http.get(`${EnvConfig.NEXT_PUBLIC_HOST}${EnvConfig.NEXT_PUBLIC_PLAYLIST}/${id}`),
    Get_All: async () =>
        await http.get(`${EnvConfig.NEXT_PUBLIC_HOST}${EnvConfig.NEXT_PUBLIC_PLAYLIST}`, { headers: { 'x-access-token': Token } }),
    Create: async (body: Update_User_Type): Promise<any> =>
        await http.post(`${EnvConfig.NEXT_PUBLIC_HOST}${EnvConfig.NEXT_PUBLIC_PLAYLIST}`, body, { headers: { 'x-access-token': Token } }),
    Update: async (id: string, body: Update_User_Type): Promise<any> =>
        await http.put(`${EnvConfig.NEXT_PUBLIC_HOST}${EnvConfig.NEXT_PUBLIC_PLAYLIST}/${id}`, body, { headers: { 'x-access-token': Token } }),
    Delete: async (id: string) =>
        await http.delete(`${EnvConfig.NEXT_PUBLIC_HOST}${EnvConfig.NEXT_PUBLIC_PLAYLIST}/${id}`, { headers: { 'x-access-token': Token } })
};

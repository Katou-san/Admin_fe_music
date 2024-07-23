import header from "@/api/@header";
import { http } from "@/api/@rootHttp";
import { EnvConfig } from "@/configs/Env_Config";

export const Dashboard = {
  Get_Dashboard_1: async () =>
    await http.get(
      `${EnvConfig.NEXT_PUBLIC_HOST}${EnvConfig.NEXT_PUBLIC_GET_DASHBOARD_1}`,
      header()
    ),
};

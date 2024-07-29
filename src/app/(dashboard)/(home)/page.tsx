"use client";

import "./_home.scss";
import ItemList from "@/app/(dashboard)/(home)/components/ItemList";

import RenderBarChart from "@/components/Chart/BarChart";
import RenderPieChart from "@/components/Chart/PieChart";
import { Dashboard } from "@/api/Dashboard";
import {
  dashboardModel,
  dashboardModelChar,
  dashboardType,
  dashboardTypeChar,
} from "@/model/dashboard";
import { Sound_Icon, User_Icon } from "@/util/Icons/Icon_Figma";
import { useEffect, useState } from "react";

export default function Page() {
  const ArrayPie = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];

  const [dashboard_1, set_dashboard_1] = useState<dashboardType>(
    dashboardModel.init
  );
  const [CharData_1, set_CharData_1] = useState<dashboardTypeChar>(
    dashboardModelChar.init
  );

  useEffect(() => {
    Dashboard.Get_Dashboard_1().then((res) => set_dashboard_1(res.data));

    Dashboard.Get_Dashboard_char_1().then((res) => set_CharData_1(res.data));
  }, []);

  return (
    <div className="farme-home">
      <div className="header-content">
        <div className="content-1">
          <ItemList title={"Visits"} num={dashboard_1.Visit_num} />
          <ItemList title={"Revenues"} num={dashboard_1.Revenue_num} />
          <ItemList
            title={"Users"}
            num={dashboard_1.User_num}
            icon={<User_Icon color="#2f2c2c" />}
          />
          <ItemList
            title={"Songs"}
            num={dashboard_1.Song_num}
            icon={<Sound_Icon color="#2f2c2c" />}
          />
        </div>
      </div>

      <div className="main-content">
        <div className="farme-chart">
          <RenderBarChart data={CharData_1} />
        </div>
        <div className="farme-detail">
          <RenderPieChart data={ArrayPie} />
        </div>
      </div>
    </div>
  );
}

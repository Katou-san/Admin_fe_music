"use client";
import React, { useEffect, useState } from "react";
import "./_home.scss";
import ItemList from "@/app/(dashboard)/home/components/ItemList";

import RenderBarChart from "@/components/Chart/BarChart";
import RenderPieChart from "@/components/Chart/PieChart";
import { Dashboard } from "@/api/Dashboard";
import { dashboardModel, dashboardType } from "@/model/dashboard";
import { User_Icon } from "@/util/Icons/Icon_Figma";

export default function page() {
  const ArrayPie = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];
  const CharData = [
    {
      Time: "Th 1",
      DT: 4000,
    },
    {
      Time: "Th 2",
      DT: 3000,
    },
    {
      Time: "Th 3",
      DT: 2000,
    },
    {
      Time: "Th 4",
      DT: 2780,
    },
    {
      Time: "Th 5",
      DT: 1890,
    },
    {
      Time: "Th 6",
      DT: 2390,
    },
    {
      Time: "Th 7",
      DT: 3490,
    },
    {
      Time: "Th 8",
      DT: 5490,
    },
    {
      Time: "Th 9",
      DT: 3690,
    },
    {
      Time: "Th 10",
      DT: 3990,
    },
    {
      Time: "Th 11",
      DT: 3230,
    },
    {
      Time: "Th 12",
      DT: 3330,
    },
  ];
  const [dashboard_1, set_dashboard_1] = useState<dashboardType>(
    dashboardModel.init
  );

  useEffect(() => {
    Dashboard.Get_Dashboard_1().then((res) => set_dashboard_1(res.data));
  }, []);
  console.log(dashboard_1);

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
          <ItemList title={"Songs"} num={dashboard_1.Song_num} />
        </div>
      </div>

      <div className="main-content">
        <div className="farme-chart">
          <RenderBarChart data={CharData} />
        </div>
        <div className="farme-detail">
          <RenderPieChart data={ArrayPie} />
        </div>
      </div>
    </div>
  );
}

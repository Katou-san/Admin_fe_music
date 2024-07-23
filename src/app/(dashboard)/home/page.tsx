"use client";
import React from "react";
import "./_home.scss";
import ItemList from "@/app/(dashboard)/home/components/ItemList";
import { Item_List } from "@/configs/Home_Config";
import RenderBarChart from "@/components/Chart/BarChart";
import RenderPieChart from "@/components/Chart/PieChart";

export default function page() {
  const ArrayPie = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];

  return (
    <div className="farme-home">
      <div className="header-content">
        <div className="content-1">
          {Item_List.map((value, i) => (
            <ItemList key={i} Value={value} />
          ))}
        </div>
      </div>

      <div className="main-content">
        <div className="farme-chart">
          <RenderBarChart />
        </div>
        <div className="farme-detail">
          <RenderPieChart data={ArrayPie} />
        </div>
      </div>
    </div>
  );
}

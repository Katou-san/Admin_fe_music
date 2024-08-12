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
import {
  Money_Icon,
  Sound_Icon,
  User_Icon,
  World_Icon,
} from "@/util/Icons/Icon_Figma";
import React, { useEffect, useState } from "react";

export default function Page() {
  const ArrayPie = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];

  const [value_date, set_value_date] = useState({
    start_date: "",
    end_date: "",
  });

  const [date_set, set_date_set] = useState(false);
  const [dashboard_1, set_dashboard_1] = useState<dashboardType>(
    dashboardModel.init
  );
  const [CharData_1, set_CharData_1] = useState<dashboardTypeChar>(
    dashboardModelChar.init
  );
  const [CharData_2, set_CharData_2] = useState<dashboardTypeChar>(
    dashboardModelChar.init
  );

  useEffect(() => {
    Dashboard.Get_Dashboard_1().then((res) => set_dashboard_1(res.data));
    Dashboard.Get_Dashboard_char_1().then((res) => set_CharData_1(res.data));
  }, []);

  useEffect(() => {
    const dateStart = new Date(value_date.start_date)
    const dateEnd = new Date(value_date.end_date)

    if (!value_date.start_date || !value_date.end_date) {
      set_date_set(false);
    } else {
      let array: dashboardTypeChar = [];
      CharData_1.forEach((e) => {
        if (
          e.month >= dateStart.getMonth() + 1 &&
          e.month <= dateEnd.getMonth() + 1 &&
          e.year >= dateEnd.getFullYear() &&
          e.year <= dateStart.getFullYear()
        ) {
          array.push(e);
        }
      });
      set_CharData_2(array);
      set_date_set(true);
    }
  }, [value_date])

  return (
    <div className="farme-home">
      <div className="header-content">
        <div className="content-1">
          <ItemList
            title={"Visits"}
            num={dashboard_1.Visit_num}
            icon={<World_Icon color="#2f2c2c" w={30} />}
          />
          <ItemList
            title={"Revenues"}
            num={dashboard_1.Revenue_num}
            icon={<Money_Icon color="#2f2c2c" w={30} />}
          />
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
      <div className="OptionDate">

        <div className="frameInputDate">
          <input
            type="month"
            id="start_date"
            name="start"
            max={
              new Date().getFullYear() +
              "-" +
              ("0" + (new Date().getMonth() + 1)).slice(-2)
            }
            onChange={(e) => {
              set_value_date({ ...value_date, start_date: e.target.value });
            }}
          />
        </div>

        <div className="frameInputDate">
          <input
            type="month"
            id="end_date"
            name="end"
            max={
              new Date().getFullYear() +
              "-" +
              ("0" + (new Date().getMonth() + 1)).slice(-2)
            }
            onChange={(e) => {
              set_value_date({ ...value_date, end_date: e.target.value });
            }}
          />

        </div>
      </div>
      <div className="main-content">
        <div className="farme-chart">
          <RenderBarChart data={date_set ? CharData_2 : CharData_1} />
        </div>
        <div className="farme-detail">
          <RenderPieChart data={ArrayPie} />
        </div>
      </div>
    </div>
  );
}

'use client';
import { Tooltip } from "@nextui-org/react";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
} from "recharts";

const datatemp = [{ name: "Page A", uv: 400, pv: 2400, amt: 2400 }];

type data_type = typeof datatemp;

export function RenderLineChar({ data = datatemp }: { data: data_type }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
          strokeWidth={"5"}
        />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d"
          strokeWidth={"5"}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

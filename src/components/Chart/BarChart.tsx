"use client";
import { Tooltip } from "@nextui-org/react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const datatemp = [
  {
    Time: "Th 0",
    DT: 0,
  },
];
type Prop = typeof datatemp;

export default function RenderBarChart({ data = datatemp }: { data: Prop }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart width={850} height={380} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Time" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="DT" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
}

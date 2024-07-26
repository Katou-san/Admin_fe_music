"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const datatemp = [
  {
    reve: 0,
    month: 0,
    year: 0,
    title: " ",
  },
];
type Prop = typeof datatemp;

export default function RenderBarChart({ data = datatemp }: { data: Prop }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart width={850} height={380} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="title" />
        <YAxis
          tickFormatter={(tick) => {
            return tick.toLocaleString();
          }}
        />
        <Tooltip formatter={(value, name) => value.toLocaleString() + " vnd"} />
        <Legend />
        <Bar dataKey="reve" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
}

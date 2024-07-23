"use client";
import { Tooltip } from "@nextui-org/react";
import { Bar, BarChart, CartesianGrid, Legend, XAxis, YAxis } from "recharts";

const data = [
  {
    name: "Th 1",
    uv: 4000,
    pv: 2400,
  },
  {
    name: "Th 2",
    uv: 3000,
    pv: 1398,
  },
  {
    name: "Th 3",
    uv: 2000,
    pv: 9800,
  },
  {
    name: "Th 4",
    uv: 2780,
    pv: 3908,
  },
  {
    name: "Th 5",
    uv: 1890,
    pv: 4800,
  },
  {
    name: "Th 6",
    uv: 2390,
    pv: 3800,
  },
  {
    name: "Th 7",
    uv: 3490,
    pv: 4300,
  },
  {
    name: "Th 8",
    uv: 3490,
    pv: 4300,
  },
  {
    name: "Th 9",
    uv: 3490,
    pv: 4300,
  },
  {
    name: "Th 10",
    uv: 3490,
    pv: 4300,
  },
  {
    name: "Th 11",
    uv: 3490,
    pv: 4300,
  },
  {
    name: "Th 12",
    uv: 3490,
    pv: 4300,
  },
];

export default function RenderBarChart() {
  return (
    <BarChart width={850} height={380} data={data}>
      {/* <CartesianGrid strokeDasharray="3 3" /> */}
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      {/* <Legend /> */}
      <Bar dataKey="pv" fill="#8884d8" />
      <Bar dataKey="uv" fill="#F8DF11" />
    </BarChart>
  );
}

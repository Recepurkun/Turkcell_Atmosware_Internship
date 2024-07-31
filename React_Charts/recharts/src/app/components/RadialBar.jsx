"use client";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "18-24",
    UV: 31.47,
    pv: 2400,
    fill: "#8884d8",
  },
  {
    name: "30-34",
    UV: 15.69,
    pv: 1398,
    fill: "#8dd1e1",
  },
  {
    name: "35-39",
    UV: 8.22,
    pv: 9800,
    fill: "#82ca9d",
  },
  {
    name: "40-49",
    UV: 8.63,
    pv: 3908,
    fill: "#a4de6c",
  },
  {
    name: "50+",
    UV: 2.63,
    pv: 4800,
    fill: "#d0ed57",
  },
  {
    name: "unknown",
    UV: 6.67,
    pv: 4800,
    fill: "#ffc658",
  },
];

const style = {
  bottom: 0,
  lineHeight: "18px",
};

const RadialBarComponent = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadialBarChart
        cx="50%"
        cy="45%"
        innerRadius="10%"
        outerRadius="80%"
        barSize={5}
        data={data}
      >
        <RadialBar
          minAngle={15}
          label={{ position: "insideStart", fill: "#fff" }}
          background
          clockWise
          dataKey="UV"
        />
        <Legend
          iconSize={10}
          layout="horizontal"
          verticalAlign="middle"
          wrapperStyle={style}
        />
        <Tooltip content={<CustomTooltip />} />
      </RadialBarChart>
    </ResponsiveContainer>
  );
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
        <p className="text-medium text-lg"> {payload[0].payload.name} </p>
        <p className="text-sm text-blue-400">
          {payload[0].name} <span className="ml-2">{payload[0].value}</span>
        </p>
      </div>
    );
  }
};

export default RadialBarComponent;

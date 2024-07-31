"use client";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Rectangle,
} from "recharts";

const salesData = [
  {
    name: "Jan",
    revenue: 4000,
    profit: 2000,
  },
  {
    name: "Feb",
    revenue: 3000,
    profit: 2100,
  },
  {
    name: "Mar",
    revenue: 5000,
    profit: 1660,
  },
  {
    name: "Apr",
    revenue: 1890,
    profit: 2100,
  },
  {
    name: "May",
    revenue: 2250,
    profit: 2300,
  },
  {
    name: "Jun",
    revenue: 2390,
    profit: 2500,
  },
];

const BarChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={400}
        data={salesData}
        margin={{ right: 30 }}
      >
        <YAxis />
        <XAxis dataKey="name" />
        <CartesianGrid strokeDasharray="5 5" />

        <Tooltip
          content={<CustomTooltip />}
          //   cursor={{ fill: "#fff", fillOpacity: 0.075 }} //baya ideal duruyor
          cursor={{ fill: "red", fillOpacity: 0.075 }} //arkada olusan gri bg'yi degistirebilmek icin
        />

        <Bar
          dataKey="revenue"
          fill="#3b82f6"
          activeBar={<Rectangle fill="#0561f5" stroke="#fff" />}
        />
        <Bar
          dataKey="profit"
          fill="#8b5cf6"
          activeBar={<Rectangle fill="#6222f7" stroke="#fff" />}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
        <p className="text-medium text-lg"> {label}</p>
        <p className="text-sm text-blue-400">
          Revenue : <span className="ml-2">${payload[0].value}</span>
        </p>
        <p className="text-sm text-indigo-400">
          Profit : <span className="ml-2">${payload[1].value}</span>
        </p>
      </div>
    );
  }
};

export default BarChartComponent;

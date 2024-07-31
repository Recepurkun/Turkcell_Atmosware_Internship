"use client";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
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
    revenue: 3000,
    profit: 1660,
  },
  {
    name: "Apr",
    revenue: 4900,
    profit: 2100,
  },
  {
    name: "May",
    revenue: 2350,
    profit: 1900,
  },
  {
    name: "Jun",
    revenue: 2900,
    profit: 1100,
  },
];

const LineChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={salesData}
        margin={{ right: 30 }}
      >
        <YAxis />
        <XAxis dataKey="name" />
        <CartesianGrid strokeDasharray="5 5" />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Line type="monotone" dataKey="revenue" fill="#3b82f6" />
        <Line type="monotone" dataKey="profit" fill="#8b5cf6" />
        <Brush fill="black" stroke="red" />
        {/* zaman araligi secmeye yariyor, slideri kaydirip zaman araligini daraltip genisletebiliyosun */}
      </LineChart>
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

export default LineChartComponent;

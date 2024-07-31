"use client";
import {
  ComposedChart,
  Line,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Page A",
    UniqueVisitors: 590,
    PageViews: 800,
  },
  {
    name: "Page B",
    UniqueVisitors: 868,
    PageViews: 967,
  },
  {
    name: "Page C",
    UniqueVisitors: 1397,
    PageViews: 1098,
  },
  {
    name: "Page D",
    UniqueVisitors: 1480,
    PageViews: 1200,
  },
  {
    name: "Page E",
    UniqueVisitors: 1520,
    PageViews: 1108,
  },
  {
    name: "Page F",
    UniqueVisitors: 1400,
    PageViews: 680,
  },
];

const ComposedChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart
        width={500}
        height={300}
        data={data}
        margin={{ right: 30 }}
      >
        <CartesianGrid strokeDasharray="5 5" />
        <XAxis dataKey="name" scale="band" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Bar dataKey="UniqueVisitors" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="UniqueVisitors" stroke="#ff7300" />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
        <p className="text-medium text-lg"> {label}</p>
        <p className="text-sm text-blue-400">
          Page Views : <span className="ml-2">{payload[0].value}</span>
        </p>
        <p className="text-sm text-indigo-400">
          Unique Visitors : <span className="ml-2">{payload[1].value}</span>
        </p>
      </div>
    );
  }
};

export default ComposedChartComponent;

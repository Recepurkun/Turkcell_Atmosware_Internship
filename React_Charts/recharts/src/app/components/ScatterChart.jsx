"use client";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { x: 100, y: 200 },
  { x: 45, y: 125 },
  { x: 10, y: 90 },
  { x: 45, y: 125 },
  { x: 120, y: 100 },
  { x: 170, y: 300 },
  { x: 140, y: 250 },
  { x: 150, y: 310 },
  { x: 110, y: 280 },
];

const ScatterChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ScatterChart width={500} height={300} margin={{ right: 30 }}>
        <CartesianGrid strokeDasharray="5 5" />
        <XAxis type="number" dataKey="x" name="stature" unit="cm" />
        <YAxis
          yAxisId="left"
          type="number"
          dataKey="y"
          name="weight"
          unit="kg"
        />
        <Tooltip
          content={<CustomTooltip />}
          cursor={{ strokeDasharray: "3 3" }}
        />
        <Legend />
        <Scatter yAxisId="left" name="A school" data={data} fill="#8b5cf6" />
      </ScatterChart>
    </ResponsiveContainer>
  );
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
        <p className="text-sm text-blue-400">
          Stature : <span className="ml-2">{payload[0].value}</span>
        </p>
        <p className="text-sm text-indigo-400">
          Weight : <span className="ml-2">{payload[1].value}</span>
        </p>
      </div>
    );
  }
};

export default ScatterChartComponent;

"use client";
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  {
    subject: "Math",
    A: 70,
    B: 81,
    fullMark: 100,
  },
  {
    subject: "English",
    A: 90,
    B: 85,
    fullMark: 100,
  },
  {
    subject: "Geography",
    A: 80,
    B: 70,
    fullMark: 100,
  },
  {
    subject: "Physics",
    A: 55,
    B: 60,
    fullMark: 100,
  },
  {
    subject: "History",
    A: 55,
    B: 65,
    fullMark: 100,
  },
];
const RadarChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="90%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={50} domain={[0, 100]} />
        <Radar
          name="Mike"
          dataKey="A"
          stroke="#3b82f6"
          fill="#3b82f6"
          fillOpacity={0.5}
        />
        <Radar
          name="Lily"
          dataKey="B"
          stroke="#8b5cf6"
          fill="#8b5cf6"
          fillOpacity={0.5}
        />
        <Legend />
        <Tooltip content={<CustomTooltip />} />
      </RadarChart>
    </ResponsiveContainer>
  );
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
        <p className="text-medium text-lg"> {label}</p>
        <p className="text-sm text-blue-400">
          {payload[0].name} <span className="ml-2">{payload[0].value}</span>
        </p>
        <p className="text-sm text-indigo-400">
          {payload[1].name} <span className="ml-2">{payload[1].value}</span>
        </p>
      </div>
    );
  }
};

export default RadarChartComponent;

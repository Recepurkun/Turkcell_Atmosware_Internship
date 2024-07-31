import AreaChart from "./components/AreaChart";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import ComposedChart from "./components/ComposedChart";
import ScatterChart from "./components/ScatterChart";
import PieChart from "./components/PieChart";
import RadarChart from "./components/RadarChart";
import RadialBar from "./components/RadialBar";
import TreeMap from "./components/TreeMap";
import Link from "next/link";

const charts = [
  { title: "Area Chart", component: <AreaChart /> },
  { title: "Bar Chart", component: <BarChart /> },
  { title: "Line Chart", component: <LineChart /> },
  { title: "Composed Chart", component: <ComposedChart /> },
  { title: "Scatter Chart", component: <ScatterChart /> },
  { title: "Pie Chart", component: <PieChart /> },
  { title: "Radar Chart", component: <RadarChart /> },
  { title: "Radial Bar Chart", component: <RadialBar /> },
  { title: "Tree Map", component: <TreeMap /> },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 md:px-8 xl:px-10 py-10">
      <Link href="https://recharts.org/en-US" target="_blank">
        <h1 className="text-6xl mb-8 text-purple-500 ">Charts</h1>
      </Link>
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 w-full gap-10 max-w-[1400px]">
        {charts.map((chart, index) => (
          <GridItem key={index} title={chart.title}>
            {chart.component}
          </GridItem>
        ))}
      </div>
    </main>
  );
}

function GridItem({ title, children }) {
  return (
    <div className="flex flex-col items-center justify-center p-4 border border-slate-900 bg-slate-900/50 rounded-xl h-[400px]">
      <h3 className="text-2xl font-semibold text-white mb-4">
        {title}
      </h3>
      {children}
    </div>
  )
}
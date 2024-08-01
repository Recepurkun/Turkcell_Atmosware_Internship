import Link from "next/link";
import GridItem from "./components/GridItem";
import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";
import BubbleChart from "./components/BubbleChart";
import CustomStyles from "./components/CustomStyles";
import BasicLineChart from "./components/BasicLineChart";
import BasicBarChart from "./components/BasicBarChart";
import BasicAreaChart from "./components/BasicAreaChart";

const charts = [
  { title: "Line Chart", component: <LineChart /> },
  { title: "Bar Chart", component: <BarChart /> },
  { title: "Bubble Chart", component: <BubbleChart /> },
  { title: "Basic Line Chart", component: <BasicLineChart /> },
  { title: "Basic Bar Chart", component: <BasicBarChart /> },
  { title: "Basic Area Chart", component: <BasicAreaChart /> },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center my-10 me-2 ms-2">
      <Link href="https://react-charts.tanstack.com/" target="_blank">
        <h1 className="text-6xl mb-8 text-purple-500 ">Charts</h1>
      </Link>
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 w-full gap-10 max-w-[1380px]">
        {charts.map((chart, index) => (
          <GridItem key={index} title={chart.title}>
            {chart.component}
          </GridItem>
        ))}
      </div>
      <div className="flex items-center justify-center mt-4 lg:mt-10 max-w-[1380px]">
        <GridItem title="CustomStyles Chart">
          <CustomStyles />
        </GridItem>
      </div>
    </main>
  );
}

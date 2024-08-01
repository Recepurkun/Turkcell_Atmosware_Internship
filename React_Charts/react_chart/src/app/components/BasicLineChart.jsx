"use client";
import { Chart } from "react-charts";
import ResizableBox from "../ResizableBox";
import { useMemo } from "react";

const BasicLineChartComponent = () => {
  const data = [
    {
      label: "Series 1",
      data: [
        { primary: new Date("2020-01-01"), secondary: 10 },
        { primary: new Date("2020-01-02"), secondary: 20 },
        { primary: new Date("2020-01-03"), secondary: 30 },
        { primary: new Date("2020-01-04"), secondary: 25 },
        { primary: new Date("2020-01-05"), secondary: 18 },
        { primary: new Date("2020-01-06"), secondary: 40 },
        { primary: new Date("2020-01-07"), secondary: 35 },
        { primary: new Date("2020-01-08"), secondary: 22 },
        { primary: new Date("2020-01-09"), secondary: 27 },
        { primary: new Date("2020-01-10"), secondary: 15 },
      ],
    },
    {
      label: "Series 2",
      data: [
        { primary: new Date("2020-01-01"), secondary: 15 },
        { primary: new Date("2020-01-02"), secondary: 25 },
        { primary: new Date("2020-01-03"), secondary: 35 },
        { primary: new Date("2020-01-04"), secondary: 20 },
        { primary: new Date("2020-01-05"), secondary: 22 },
        { primary: new Date("2020-01-06"), secondary: 45 },
        { primary: new Date("2020-01-07"), secondary: 38 },
        { primary: new Date("2020-01-08"), secondary: 27 },
        { primary: new Date("2020-01-09"), secondary: 30 },
        { primary: new Date("2020-01-10"), secondary: 20 },
      ],
    },
    {
      label: "Series 3",
      data: [
        { primary: new Date("2020-01-01"), secondary: 5 },
        { primary: new Date("2020-01-02"), secondary: 15 },
        { primary: new Date("2020-01-03"), secondary: 25 },
        { primary: new Date("2020-01-04"), secondary: 10 },
        { primary: new Date("2020-01-05"), secondary: 12 },
        { primary: new Date("2020-01-06"), secondary: 30 },
        { primary: new Date("2020-01-07"), secondary: 25 },
        { primary: new Date("2020-01-08"), secondary: 18 },
        { primary: new Date("2020-01-09"), secondary: 20 },
        { primary: new Date("2020-01-10"), secondary: 10 },
      ],
    },
    {
      label: "Series 4",
      data: [
        { primary: new Date("2020-01-01"), secondary: 12 },
        { primary: new Date("2020-01-02"), secondary: 22 },
        { primary: new Date("2020-01-03"), secondary: 32 },
        { primary: new Date("2020-01-04"), secondary: 27 },
        { primary: new Date("2020-01-05"), secondary: 20 },
        { primary: new Date("2020-01-06"), secondary: 35 },
        { primary: new Date("2020-01-07"), secondary: 28 },
        { primary: new Date("2020-01-08"), secondary: 25 },
        { primary: new Date("2020-01-09"), secondary: 23 },
        { primary: new Date("2020-01-10"), secondary: 18 },
      ],
    },
  ];

  const primaryAxis = { getValue: (datum) => datum.primary };
  const secondaryAxes = useMemo(() => [
    {
      getValue: (datum) => datum.secondary,
      hardMin: 0,
      hardMax: 50,
    },
  ]);

  return (
    <ResizableBox>
      <Chart options={{ data, primaryAxis, secondaryAxes }} />
    </ResizableBox>
  );
};

export default BasicLineChartComponent;

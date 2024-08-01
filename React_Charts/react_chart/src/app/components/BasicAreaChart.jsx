"use client";
import { useMemo } from "react";
import { Chart } from "react-charts";
import ResizableBox from "../ResizableBox";

const BasicAreaChartComponent = () => {
  const data = [
    {
      label: "Series 1",
      data: [
        { primary: new Date("2020-01-01"), secondary: 10 },
        { primary: new Date("2020-01-02"), secondary: 20 },
        { primary: new Date("2020-01-03"), secondary: 30 },
        { primary: new Date("2020-01-04"), secondary: 25 },
        { primary: new Date("2020-01-05"), secondary: 18 },
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
      ],
    },
    {
      label: "Series 5",
      data: [
        { primary: new Date("2020-01-01"), secondary: 15 },
        { primary: new Date("2020-01-02"), secondary: 29 },
        { primary: new Date("2020-01-03"), secondary: 37 },
        { primary: new Date("2020-01-04"), secondary: 21 },
        { primary: new Date("2020-01-05"), secondary: 30 },
      ],
    },
    {
      label: "Series 6",
      data: [
        { primary: new Date("2020-01-01"), secondary: 19 },
        { primary: new Date("2020-01-02"), secondary: 26 },
        { primary: new Date("2020-01-03"), secondary: 34 },
        { primary: new Date("2020-01-04"), secondary: 26 },
        { primary: new Date("2020-01-05"), secondary: 36 },
      ],
    },
  ];

  const primaryAxis = useMemo(
    () => ({
      getValue: (datum) => datum.primary,
    }),
    []
  );

  const secondaryAxes = useMemo(
    () => [
      {
        getValue: (datum) => datum.secondary,
        elementType: "area",
        stacked: true,
      },
    ],
    []
  );
  return (
    <ResizableBox>
      <Chart
        options={{
          data,
          primaryAxis,
          secondaryAxes,
        }}
      />
    </ResizableBox>
  );
};

export default BasicAreaChartComponent;

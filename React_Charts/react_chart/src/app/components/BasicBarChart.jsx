"use client";
import { useMemo } from "react";
import { Chart } from "react-charts";
import ResizableBox from "../ResizableBox";

const BasicBarChartComponent = () => {
  const data = [
    {
      label: "Series 1",
      data: [
        { primary: "2020-01-01", secondary: 10 },
        { primary: "2020-01-02", secondary: 20 },
        { primary: "2020-01-03", secondary: 30 },
        { primary: "2020-01-04", secondary: 25 },
        { primary: "2020-01-05", secondary: 18 },
      ],
    },
    {
      label: "Series 2",
      data: [
        { primary: "2020-01-01", secondary: 15 },
        { primary: "2020-01-02", secondary: 25 },
        { primary: "2020-01-03", secondary: 35 },
        { primary: "2020-01-04", secondary: 20 },
        { primary: "2020-01-05", secondary: 22 },
      ],
    },
    {
      label: "Series 3",
      data: [
        { primary: "2020-01-01", secondary: 5 },
        { primary: "2020-01-02", secondary: 15 },
        { primary: "2020-01-03", secondary: 25 },
        { primary: "2020-01-04", secondary: 10 },
        { primary: "2020-01-05", secondary: 12 },
      ],
    },
    {
      label: "Series 4",
      data: [
        { primary: "2020-01-01", secondary: 12 },
        { primary: "2020-01-02", secondary: 22 },
        { primary: "2020-01-03", secondary: 32 },
        { primary: "2020-01-04", secondary: 27 },
        { primary: "2020-01-05", secondary: 20 },
      ],
    },
    {
      label: "Series 5",
      data: [
        { primary: "2020-01-01", secondary: 15 },
        { primary: "2020-01-02", secondary: 29 },
        { primary: "2020-01-03", secondary: 37 },
        { primary: "2020-01-04", secondary: 21 },
        { primary: "2020-01-05", secondary: 30 },
      ],
    },
  ];

  const primaryAxis = useMemo(
    () => ({
      position: "left",
      getValue: (datum) => datum.primary,
    }),
    []
  );

  const secondaryAxes = useMemo(
    () => [
      {
        position: "bottom",
        getValue: (datum) => datum.secondary,
        hardMin: 0,
        hardMax: 40,
      },
    ],
    []
  );
  return (
    <>
      <ResizableBox>
        <Chart
          options={{
            data,
            primaryAxis,
            secondaryAxes,
            type: "bar",
          }}
        />
      </ResizableBox>
    </>
  );
};

export default BasicBarChartComponent;

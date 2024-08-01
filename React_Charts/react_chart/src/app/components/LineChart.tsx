"use client";
import ResizableBox from "../ResizableBox";
import useDemoConfig from "../useDemoConfig";
import React, { useMemo } from "react";
import { AxisOptions, Chart } from "react-charts";
import RandomizeBtn from "./RandomizeBtn";

const LineChartComponent = () => {
  const { data, randomizeData } = useDemoConfig({
    series: 7,
    dataType: "time",
  });

  const primaryAxis = useMemo<
    AxisOptions<(typeof data)[number]["data"][number]>
  >(
    () => ({
      getValue: (datum) => datum.primary as unknown as Date,
    }),
    []
  );

  const secondaryAxes = useMemo<
    AxisOptions<(typeof data)[number]["data"][number]>[]
  >(
    () => [
      {
        getValue: (datum) => datum.secondary,
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
          }}
        />
      </ResizableBox>
      <RandomizeBtn randomizeData={randomizeData} />
    </>
  );
};

export default LineChartComponent;

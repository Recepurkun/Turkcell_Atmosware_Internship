"use client";
import { useMemo } from "react";
import useDemoConfig from "../useDemoConfig";
import { AxisOptions, Chart } from "react-charts";
import ResizableBox from "../ResizableBox";
import RandomizeBtn from "./RandomizeBtn";

const BarChartComponent = () => {
  const { data, randomizeData } = useDemoConfig({
    series: 3,
    dataType: "ordinal",
  });

  const primaryAxis = useMemo<
    AxisOptions<(typeof data)[number]["data"][number]>
  >(
    () => ({
      getValue: (datum) => datum.primary,
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

export default BarChartComponent;

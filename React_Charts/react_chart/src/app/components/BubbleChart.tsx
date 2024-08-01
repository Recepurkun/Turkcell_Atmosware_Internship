"use client";
import { useMemo } from "react";
import useDemoConfig from "../useDemoConfig";
import { AxisOptions, Chart } from "react-charts";
import ResizableBox from "../ResizableBox";
import RandomizeBtn from "./RandomizeBtn";

const BubbleChartComponent = () => {
  const { data, randomizeData } = useDemoConfig({
    series: 7,
    dataType: "linear",
    useR: true,
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
        elementType: "bubble",
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
            interactionMode: "closest",
            getDatumStyle: (datum) =>
              ({
                circle: { r: datum.originalDatum.radius },
              } as any),
          }}
        />
      </ResizableBox>
      <RandomizeBtn randomizeData={randomizeData} />
    </>
  );
};

export default BubbleChartComponent;

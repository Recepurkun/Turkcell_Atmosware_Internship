"use client";
import { useMemo, useState } from "react";
import useDemoConfig from "../useDemoConfig";
import { AxisOptions, Chart } from "react-charts";
import ResizableBox from "../ResizableBox";

const CustomStylesComponent = () => {
  const [{ activeSeriesIndex, activeDatumIndex }, setState] = useState({
    activeSeriesIndex: -1,
    activeDatumIndex: -1,
  });
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center gap-32">
        <MyChart
          elementType="line"
          setState={setState}
          activeDatumIndex={activeDatumIndex}
          activeSeriesIndex={activeSeriesIndex}
        />
        <MyChart
          elementType="area"
          setState={setState}
          activeDatumIndex={activeDatumIndex}
          activeSeriesIndex={activeSeriesIndex}
        />
        <MyChart
          elementType="bar"
          setState={setState}
          activeDatumIndex={activeDatumIndex}
          activeSeriesIndex={activeSeriesIndex}
        />
      </div>
      <div className="my-4">
        <p>{`activeSeriesIndex: ${activeSeriesIndex}, activeDatumIndex: ${activeDatumIndex}`}</p>
      </div>
    </>
  );
};

function MyChart({
  elementType,
  activeDatumIndex,
  activeSeriesIndex,
  setState,
}: any) {
  const { data, interactionMode, randomizeData } = useDemoConfig({
    series: 3,
    interactionMode: "primary",
    dataType: "ordinal",
    show: ["elementType", "interactionMode"],
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
        elementType,
      },
    ],
    [elementType]
  );

  return (
    <>
      <ResizableBox>
        <Chart
          options={{
            data,
            interactionMode,
            primaryAxis,
            secondaryAxes,
            getDatumStyle: (datum, status) =>
              (activeDatumIndex === datum.index &&
              activeSeriesIndex === datum.seriesIndex
                ? {
                    opacity: 1,
                    circle: {
                      r: 5,
                    },
                    rectangle: {
                      stroke: "black",
                      strokeWidth: 3,
                    },
                  }
                : activeDatumIndex === datum.index
                ? {
                    opacity: 1,
                    circle: {
                      r: 3,
                    },
                    rectangle: {
                      stroke: "black",
                      strokeWidth: 1,
                    },
                  }
                : datum.seriesIndex === activeSeriesIndex
                ? {
                    circle: {
                      r: 3,
                    },
                    rectangle: {
                      stroke: "black",
                      strokeWidth: 1,
                    },
                  }
                : status === "groupFocused"
                ? {
                    circle: {
                      r: 2,
                    },
                    rectangle: {
                      stroke: "black",
                      strokeWidth: 0,
                    },
                  }
                : {
                    circle: {
                      r: 2,
                    },
                    rectangle: {
                      stroke: "black",
                      strokeWidth: 0,
                    },
                  }) as any,
            getSeriesStyle: (series) => {
              return {
                color: `url(#${series.index % 4})`,
                opacity:
                  activeSeriesIndex > -1
                    ? series.index === activeSeriesIndex
                      ? 1
                      : 0.3
                    : 1,
              };
            },
            onFocusDatum: (focused) =>
              setState({
                activeSeriesIndex: focused ? focused.seriesIndex : -1,
                activeDatumIndex: focused ? focused.index : -1,
              }),

            renderSVG: () => (
              <defs>
                <linearGradient id="0" x1="0" x2="0" y1="1" y2="0">
                  <stop offset="0%" stopColor="#17EAD9" />
                  <stop offset="100%" stopColor="#6078EA" />
                </linearGradient>
                <linearGradient id="1" x1="0" x2="0" y1="1" y2="0">
                  <stop offset="0%" stopColor="#ff8f10" />
                  <stop offset="100%" stopColor="#ff3434" />
                </linearGradient>
                <linearGradient id="2" x1="0" x2="0" y1="1" y2="0">
                  <stop offset="0%" stopColor="#42E695" />
                  <stop offset="100%" stopColor="#3BB2B8" />
                </linearGradient>
                <linearGradient id="3" x1="0" x2="0" y1="1" y2="0">
                  <stop offset="0%" stopColor="#ffb302" />
                  <stop offset="100%" stopColor="#ead700" />
                </linearGradient>
              </defs>
            ),
          }}
        />
      </ResizableBox>
    </>
  );
}

export default CustomStylesComponent;

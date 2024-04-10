import ReactEcharts from "echarts-for-react";
import * as echarts from "echarts";
import { useContext } from "react";
import { ThemeContext } from "../../../context/theme/ThemeContext";
import hexRgb, { RgbaTuple } from "hex-rgb";
import { barData, barDataChart } from "../../../interfaces/charts/barChart";

function BarChart(databar: barDataChart) {
  const { ThemeState } = useContext(ThemeContext);
  const { SelectedTheme } = ThemeState;
  const { isDarkTheme } = ThemeState;

  const paletteUse: string[] = SelectedTheme.palette.slice(3);

  const colorrgb: RgbaTuple = hexRgb(`${paletteUse[2]}`, { format: "array" });
  const rgbaColor: string = `rgba(${colorrgb[0]},${colorrgb[1]},${colorrgb[2]},0)`;

  const values: number[] = databar.data.map((item: barData) => item.value);
  const names: string[] = databar.data.map((item: barData) => item.name);

  const option = {
    color: paletteUse,
    tooltip: {
      trigger: "axis",
      backgroundColor: `${isDarkTheme ? "#33373e" : "#ffffff"}`,
      borderColor: `${isDarkTheme ? "#33373e" : "#ffffff"}`,
      textStyle: {
        color: "#5d657b",
      },
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: paletteUse[2],
        },
      },
    },

    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        axisLabel: {
          textStyle: {
            color: "#5d657b",
          },
        },

        axisLine: {
          show: true,
          lineStyle: {
            color: "#5d657b",
          },
        },

        type: "category",
        data: names,
      },
    ],
    yAxis: [
      {
        axisLabel: {
          textStyle: {
            color: "#5d657b",
          },
        },

        type: "value",
        splitLine: {
          lineStyle: {
            width: 0,
            // color:'#48475380'
          },
        },
      },
    ],
    series: [
      {
        name: "Rentas",
        type: "line",
        stack: "Total",
        smooth: true,
        lineStyle: {
          width: 2,
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: paletteUse[2],
            },
            {
              offset: 1,
              color: rgbaColor,
            },
          ]),
        },
        emphasis: {
          focus: "series",
        },
        data: values,
      },
    ],
  };

  return (
    <div className="dark:shadow-sha_dark w-full rounded-lg bg-primary_ shadow-xl3 transition-transform duration-300 hover:-translate-y-3 dark:bg-secondary_dark">
      <div className="initial pl-6 pt-4 font-semibold text-gray dark:text-white">
        {databar.title}
      </div>
      <div className="-mt-2 w-full justify-start">
        <div className="relative overflow-hidden">
          <ReactEcharts
            option={option}
            style={{
              width: "100%",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default BarChart;

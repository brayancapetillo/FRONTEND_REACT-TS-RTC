import ReactEcharts from "echarts-for-react";
import "./piechart.css";
import { useContext } from "react";
import { ThemeContext } from "../../../context/theme/ThemeContext";
import { PieDataChart, pieData } from "../../../interfaces/charts/pieChar";

import * as echarts from "echarts";

function PieChart(dataPie: PieDataChart) {
  const { ThemeState } = useContext(ThemeContext);
  const { SelectedTheme } = ThemeState;
  const { isDarkTheme } = ThemeState;

  const paletteUse: string[] = SelectedTheme.palette.slice(3);

  const totaldata: number = dataPie.data.reduce(
    (sum: number, item: pieData) => sum + item.value,
    0,
  );

  const option: echarts.EChartOption = {
    color: paletteUse,

    tooltip: {
      trigger: "item",
      backgroundColor: `${isDarkTheme ? "#33373e" : "#ffffff"}`,
    },

    series: [
      {
        type: "pie",
        radius: ["50%", "80%"],
        label: {
          position: "inside",
          formatter: "{c}",
          color: "white",
          fontSize: 8,
        },
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: `${isDarkTheme ? "#33373e" : "#ffffff"}`,
          borderWidth: 2,
        },

        emphasis: {
          label: {
            show: true,
            fontSize: 15,
            fontWeight: "bold",
          },
        },

        labelLine: {
          show: true,
        },
        data: dataPie.data,
      },
    ],
  };

  return (
    <div className="group h-full rounded-lg bg-primary_ shadow-xl3 transition-transform duration-300 hover:-translate-y-3 dark:bg-secondary_dark dark:shadow-sha_dark">
      <div className="initial pl-6 pt-4 font-semibold text-gray dark:text-white">
        {dataPie.title}
      </div>
      <div className=" grid h-4/5 w-full grid-cols-5 items-center">
        <div className="relative col-span-3 aspect-square overflow-hidden">
          <div className="shadow-Circle_Shadow absolute left-1/2 top-1/2 flex aspect-square w-2/5 -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center rounded-full">
            <h3 className="text-2xl font-semibold text-secundary transition duration-300 ease-in-out group-hover:text-primary dark:text-gray">
              {totaldata}
            </h3>
            <span className="text-gray-500 text-xs capitalize dark:text-white/50">
              {dataPie.subtitle}
            </span>
          </div>

          <ReactEcharts
            option={option}
            style={{
              height: "100%",
            }}
          />
        </div>
        <div className="relative col-span-2 h-4/5">
          <div className="Scroll absolute bottom-0 left-0 right-0 top-0 flex flex-col justify-start gap-3 overflow-y-auto p-2">
            {dataPie.data.map((item: pieData, index: number) => (
              <div key={item.name} className="flex flex-col">
                <div className="text-sm capitalize text-gray dark:text-white">
                  {item.name}
                </div>
                <div className="flex flex-row items-center justify-start gap-2">
                  <div
                    style={{
                      backgroundColor: `${paletteUse[index % paletteUse.length]}`,
                    }}
                    className="h-3 w-3 rounded-full"
                  ></div>
                  <div className="text-xl font-semibold text-secundary dark:text-gray">
                    {item.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PieChart;

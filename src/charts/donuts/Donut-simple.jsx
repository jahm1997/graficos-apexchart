import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

export default function DonutSimple() {
  const [state, setState] = useState({
    series: [44, 55, 13, 43, 22],
    options: {
      chart: {
        width: 380,
        type: "pie",
      },
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });

  return (
    <>
      <div id="chart1">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="pie"
          width={900}
          height={450}
        />
      </div>

      <div id="chart2">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="donut"
          width={900}
          height={450}
        />
      </div>
    </>
  );
}

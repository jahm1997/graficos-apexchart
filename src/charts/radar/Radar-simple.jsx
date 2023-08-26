import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

export default function RadarSimple() {
  const [state, setState] = useState({
    series: [
      {
        name: "Series 1",
        data: [80, 50, 30, 40, 100, 20],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "radar",
      },
      title: {
        text: "Basic Radar Chart",
      },
      xaxis: {
        categories: ["January", "February", "March", "April", "May", "June"],
      },
    },
  });

  return (
    <>
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="radar"
          width={800}
        />
      </div>
    </>
  );
}

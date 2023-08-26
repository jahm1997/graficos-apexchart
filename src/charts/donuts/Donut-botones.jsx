import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

export default function DonutBotones() {
  const [state, setState] = useState({
    series: [44, 55, 13, 33],
    options: {
      chart: {
        width: 380,
        type: "donut",
      },
      dataLabels: {
        enabled: false,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              show: false,
            },
          },
        },
      ],
      legend: {
        position: "right",
        offsetY: 0,
        height: 230,
      },
    },
  });

  function appendData() {
    var arr = state.series.slice();
    arr.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1);

    setState({
      series: arr,
    });
  }

  function removeData() {
    if (state.series.length === 1) return;

    var arr = state.series.slice();
    arr.pop();

    setState({
      series: arr,
    });
  }

  function randomize() {
    setState({
      series: state.series.map(function () {
        return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
      }),
    });
  }

  function reset() {
    setState({
      series: [44, 55, 13, 33],
    });
  }

  return (
    <>
      <div>
        <div class="chart-wrap">
          <div id="chart">
            <ReactApexChart
              options={state.options}
              series={state.series}
              type="donut"
              width={580}
            />
          </div>
        </div>

        <div class="actions">
          <button onClick={() => appendData()}>+ ADD</button>
          &nbsp;
          <button onClick={() => removeData()}>- REMOVE</button>
          &nbsp;
          <button onClick={() => randomize()}>RANDOMIZE</button>
          &nbsp;
          <button onClick={() => reset()}>RESET</button>
        </div>
      </div>
    </>
  );
}

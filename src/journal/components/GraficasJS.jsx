import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const GraficasJS = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ["Kevin", "Jhon", "Michael"],
      datasets: [
        {
          label: "Texto Prueba",
          data: [12, 55, 34],
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgb(53, 162, 235, 0.4)",
        },
      ],
    });

    setChartOptions({
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: 'Hola'
            }
        }
    })
  }, []);

  return <>
  <Bar options={chartOptions} data={chartData} />  
  
  </>;
};

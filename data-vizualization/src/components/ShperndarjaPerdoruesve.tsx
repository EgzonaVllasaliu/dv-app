import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Shperndarja e perdoruesve pergjate viteve 2016 - 2022',
    },
  },
};

const labels = [
  'TM1 2016',
  'TM2 2016',
  'TM3 2016',
  'TM4 2016',
  'TM1 2017',
  'TM2 2017',
  'TM3 2017',
  'TM4 2017',
  'TM1 2018',
  'TM2 2018',
  'TM3 2018',
  'TM4 2018',
  'TM1 2019',
  'TM2 2019',
  'TM3 2019',
  'TM4 2019',
  'TM1 2020',
  'TM2 2020',
  'TM3 2020',
  'TM4 2020',
  'TM1 2021',
  'TM2 2021',
  'TM3 2021',
  'TM4 2021',
  'TM1 2022',
  'TM2 2022',
];

const totali = [
  57332, 56656, 54983, 53011, 50952, 66527, 65847, 63816, 62048, 62852, 61456, 59838, 58156, 57674,
  56585, 55825, 54440, 77296, 76839, 76055, 75201, 74446, 74032, 72833, 72818, 71821,
];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Totali i perdoruesve per secilin 3 mujor',
      data: labels.map((value, index) => totali[index]),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export function ShperndarjaPerdoruesve() {
  return (
    <>
      <h1 style={{ margin: '10 0', padding: 20, lineHeight: 2, color: 'blue' }}>
        Shperndarja e perdoruesve
      </h1>

      <div
        style={{ width: '1400px', color: 'blue', lineHeight: 10, padding: 20, margin: '0 auto' }}
      >
        <Line options={options} data={data} />
      </div>
    </>
  );
}

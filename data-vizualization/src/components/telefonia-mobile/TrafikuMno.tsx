import React from 'react';
import { ArcElement, Chart as ChartJS, Legend, RadialLinearScale, Tooltip } from 'chart.js';
import { PolarArea } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export const data = {
  labels: ['TM1 2021', 'TM2 2021', 'TM2 2022'],
  datasets: [
    {
      label: 'Trafiku i origjinuar',
      data: [ 301394, 342937, 328700],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)'
      ],
      borderWidth: 1
    }
  ]
};

export function Trafiku() {
  return <>
    <h5 style={{ margin: '10 0', padding: 20, lineHeight: 2 }}>
    Totali i trafikut të origjinuar MNO - periudha 2021-2022
    </h5>

    <div style={{ maxWidth: '600px', color: 'blue', lineHeight: 10, padding: 20, margin: '0 auto' }}>
      <PolarArea data={data} />
    </div>
  </>;
}

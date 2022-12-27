import React from 'react';
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Vala', 'Ipko', 'D3 Mobile', 'Z Mobile', 'MTS DOO'],
  datasets: [
    {
      label: 'Nr. i perdoruesve',
      data: [ 872794, 827149, 45, 0,  28071],
      backgroundColor: [
        'rgba(255, 100, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }
  ]
};

export function NumriPerdoruesve() {
  return <>
    <h5 style={{ margin: '10 0', padding: 20, lineHeight: 2 }}>
      Numri i përdoruesve të telefonisë mobile
    </h5>

    <div style={{ maxWidth: '500px', color: 'blue', lineHeight: 10, padding: 20, margin: '0 auto' }}>
      <Doughnut
        data={data}
      />
    </div>
  </>;
}

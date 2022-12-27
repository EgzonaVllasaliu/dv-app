import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Telekomi', 'Ipko', 'Kujtesa', 'MTS'],
  datasets: [
    {
      label: 'Të hyrat në 3 mujorin e fundit në % ',
      data: [60.31, 10.28, 1.55, 27.86],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)'
      ],
      borderWidth: 1
    }
  ]
};

export function NdarjaTregut() {
  return (
    <>
      <h5 style={{ margin: '10 0', padding: 20, lineHeight: 2 }}>
        Ndarja e tregut - të hyrat në 3 mujorin e fundit
      </h5>

      <div style={{ color: 'blue', lineHeight: 10, padding: 20, margin: '0 auto' }}>
        <Pie data={data} />
      </div>
    </>
  );
}

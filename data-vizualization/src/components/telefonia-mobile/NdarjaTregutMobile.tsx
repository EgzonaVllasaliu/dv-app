import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const labels = [
  'TM4 - 2007', 'TM1 - 2008', 'TM2 - 2008', 'TM3 - 2008', 'TM3 - 2008',
  'TM1 - 2009', 'TM2 - 2009', 'TM3 - 2009', 'TM4 - 2009',
  'TM1 - 2010', 'TM2 - 2010', 'TM3 - 2010', 'TM4 - 2010'
];

const vala = {
  'TM4 - 2007': '97.69',
  'TM1 - 2008': '88.35',
  'TM2 - 2008': '80.32',
  'TM3 - 2008': '75.65',
  'TM4 - 2008': '75.92',
  'TM1 - 2009': '72.96',
  'TM2 - 2009': '73.70',
  'TM3 - 2009': '71.32',
  'TM4 - 2009': '65.11',
  'TM1 - 2010': '67.96',
  'TM2 - 2010': '72.61',
  'TM3 - 2010': '69.50',
  'TM4 - 2010': '69.24'
};

const ipko = {
  'TM4 - 2007': '2.31',
  'TM1 - 2008': '11.65',
  'TM2 - 2008': '19.68',
  'TM3 - 2008': '24.35',
  'TM4 - 2008': '24.08',
  'TM1 - 2009': '26.83',
  'TM2 - 2009': '23.94',
  'TM3 - 2009': '28.56',
  'TM4 - 2009': '34.75',
  'TM1 - 2010': '31.46',
  'TM2 - 2010': '26.13',
  'TM3 - 2010': '29.05',
  'TM4 - 2010': '28.46'
};

const d3 = {
  'TM4 - 2007': '0',
  'TM1 - 2008': '0',
  'TM2 - 2008': '0',
  'TM3 - 2008': '0',
  'TM4 - 2008': '0',
  'TM1 - 2009': '0',
  'TM2 - 2009': '0',
  'TM3 - 2009': '0.12',
  'TM4 - 2009': '0.14',
  'TM1 - 2010': '0.08',
  'TM2 - 2010': '0.11',
  'TM3 - 2010': '0.15',
  'TM4 - 2010': '0.18'
};

const zMobile = {
  'TM4 - 2007': '0',
  'TM1 - 2008': '0',
  'TM2 - 2008': '0',
  'TM3 - 2008': '0',
  'TM4 - 2008': '0',
  'TM1 - 2009': '0',
  'TM2 - 2009': '0',
  'TM3 - 2009': '0',
  'TM4 - 2009': '0',
  'TM1 - 2010': '0.50',
  'TM2 - 2010': '1.15',
  'TM3 - 2010': '1.30',
  'TM4 - 2010': '2.11'
};

export const data = {
  labels,
  datasets: [
    {
      label: 'Vala',
// @ts-ignore
      data: labels.map((label) => vala[label]),
      backgroundColor: '#bbff90'
    },
    {
      label: 'Ipko',
// @ts-ignore
      data: labels.map((label) => ipko[label]),
      backgroundColor: '#f06347'
    },
    {
      label: 'D3 Mobile',
// @ts-ignore
      data: labels.map((label) => d3[label]),
      backgroundColor: '#a26395'
    },
    {
      label: 'Z Mobile',
// @ts-ignore
      data: labels.map((label) => zMobile[label]),
      backgroundColor: 'rgba(53, 162, 235, 0.5)'
    }
  ]
};

export function NdarjaTregutMobile() {
  return (
    <>
      <h5 style={{ margin: '10 0', padding: 20, lineHeight: 2 }}>
        Ndarja e tregut sipas të hyrave - periudha 2007-2010
      </h5>

      <div style={{ color: 'blue', lineHeight: 10, padding: 20, margin: '0 auto' }}>
        <Bar
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: 'top' as const
              }
            }
          }}
          data={data}
        />
      </div>
    </>
  );
}

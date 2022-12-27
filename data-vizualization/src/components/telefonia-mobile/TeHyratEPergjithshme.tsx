import { FC, useEffect, useRef } from 'react';
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip
} from 'chart.js';
import { Chart } from 'react-chartjs-2';


ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip
);

function triggerTooltip(chart: ChartJS | null) {
  const tooltip = chart?.tooltip;

  if (!tooltip) {
    return;
  }

  if (tooltip.getActiveElements().length > 0) {
    tooltip.setActiveElements([], { x: 0, y: 0 });
  } else {
    const { chartArea } = chart;

    tooltip.setActiveElements(
      [
        {
          datasetIndex: 0,
          index: 2
        },
        {
          datasetIndex: 1,
          index: 2
        }
      ],
      {
        x: (chartArea.left + chartArea.right) / 2,
        y: (chartArea.top + chartArea.bottom) / 2
      }
    );
  }

  chart.update();
}

export const TeHyratEPergjithshme: FC = () => {
  const chartRef = useRef<ChartJS>(null);

  useEffect(() => {
    const chart = chartRef.current;

    triggerTooltip(chart);
  }, []);

  const labels = [
    'TM1 2017',
    'TM2 2017',
    'TM3 2017',
    'TM4 2017',
    'TM1 2018',
    'TM2 2018',
    'TM3 2018 ',
    'TM4 2018',
    'TM4 2018',
    'TM1 2019',
    'TM2 2019',
    'TM3 2019',
    'TM4 2019',
    'TM1 2020',
    'TM2 2020',
    'TM3 2020',
    'TM4 2020 ',
    'TM1 2021 ',
    'TM2 2021',
    'TM3 2021',
    'TM4-2021',
    'TM1-2022',
    'TM2-2022'
  ];

  const vala = [
    11602.74, 14444.05, 18742.69, 14350.57, 12782.43, 13398.00, 17253.47, 12586.84, 10536.84, 12608.56, 12608.55, 10186.57, 9300.17, 8978.73, 9293.12, 10587.56, 9148.79, 9634.51, 11844.13, 11166.15, 9237.53, 11001.59
  ];

  const ipko = [
    8884,
    10721, 12.706, 9374, 9230, 10112, 12954, 10262, 8457, 7710, 10330, 8798, 7967, 7140, 9167.8, 9434.0, 9181.0, 10116, 15336, 12124, 10999, 12736
  ];

  const d3 = [
    231.68, 222.44, 251.389, 302.941, 226.03, 245, 288, 288, 194, 288, 288, 288, 288, 288, 0, 0, 0, 288, 288, 288.15, 288, 288
  ];

  const zMobile = [
    989, 1088, 1463, 1435, 1137.25, 1717, 2061, 1839, 1711, 1565, 1565, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
  ];

  const mts = [
    0, 0, 688.09, 408.59, 411.41, 414, 469, 337, 310, 757, 757, 813.57, 782.04, 771.56, 854.07, 835.5, 831, 831.47, 873.04, 872.77, 863.1, 823.95
  ];

  const data = {
    labels,
    datasets: [
      {
        type: 'line' as const,
        label: 'Telekomi i Kosoves',
        borderColor: '#94d9ff',
        borderWidth: 2,
        fill: false,
        data: labels.map((value, index) => vala[index])
      },
      {
        type: 'bar' as const,
        label: 'Ipko',
        backgroundColor: '#00b890',
        data: labels.map((value, index) => ipko[index]),
        borderColor: 'white',
        borderWidth: 2
      },
      {
        type: 'bar' as const,
        label: 'D3',
        backgroundColor: '#aab890',
        data: labels.map((value, index) => d3[index])
      },
      {
        type: 'bar' as const,
        label: 'ZMobile',
        backgroundColor: '#6a5acd',
        data: labels.map((value, index) => zMobile[index])
      },
      {
        type: 'bar' as const,
        label: 'mts dos',
        backgroundColor: '#002b90',
        data: labels.map((value, index) => mts[index])
      }
    ]
  };

  return (
    <div style={{ lineHeight: 10, padding: 20 }}>
      <h5 style={{ margin: 0, lineHeight: 2 }}>Të hyrat nga tel. mobile - periudha 2017-2022</h5>
      <Chart ref={chartRef} type='bar' data={data} />
    </div>
  );
};

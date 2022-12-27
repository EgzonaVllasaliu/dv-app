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

export const NdarjaPerdoruesve: FC = () => {
  const chartRef = useRef<ChartJS>(null);

  useEffect(() => {
    const chart = chartRef.current;

    triggerTooltip(chart);
  }, []);

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
    'TM2 2022'
  ];

  const individual = [
    38306, 37394, 35656, 34082, 31741, 47781, 46254, 44292, 42463, 40857, 39116, 37568, 36104,
    35617, 34758, 33923, 32303, 31749, 29967, 2886, 28025, 27445, 26874, 25699, 25464, 24308
  ];

  const privat = [
    19026, 19262, 19327, 18929, 19211, 18746, 19593, 19524, 19585, 21995, 2234, 2227, 22052, 22057,
    21827, 21902, 22137, 45547, 46872, 47195, 47176, 47001, 47158, 47134, 47354, 47513
  ];

  const data = {
    labels,
    datasets: [
      {
        type: 'line' as const,
        label: 'Individual',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 2,
        fill: false,
        data: labels.map((value, index) => individual[index])
      },
      {
        type: 'line' as const,
        label: 'Biznese',
        backgroundColor: 'rgb(75, 192, 192)',
        data: labels.map((value, index) => privat[index]),
        borderColor: 'rgb(75, 192, 192)',
        borderWidth: 2
      }
    ]
  };

  return (
    <div style={{ lineHeight: 10, padding: 20 }}>
      <h5 style={{ margin: 0, lineHeight: 2 }}>Ndarja e përdoruesve</h5>
      <Chart ref={chartRef} type='bar' data={data} />
    </div>
  );
};

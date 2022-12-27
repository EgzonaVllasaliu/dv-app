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
import faker from 'faker';


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

export const Telefonia: FC = () => {
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

  const tk = [
    6253401, 5965977, 5899205, 5630683, 5902018, 4539316, 4726248, 4461703, 4577338, 6042174,
    6020550, 6394784, 6218118, 5725904, 4858497, 5220935, 4494485, 4396581, 4406866, 4389495,
    4261486, 4131095, 4163729.05, 4323183.66, 4188850.47, 3957444.43, 2148869.16, 2042473.09,
    1978303.54, 1802161.92, 1726388.63, 1138515.68, 1018947.66, 922053, 903603.17, 987826.93,
    848315.03, 855404.44, 901512.76, 868814.45, 851490.05, 749135.03, 897914.23, 921751, 916769,
    959525, 975867, 990951, 921956, 855164, 778663, 947711, 608798, 470103, 499417, 718229, 691820,
    691820, 821485
  ];

  const ipko = [
    0, 0, 0, 0, 0, 72832, 144521, 226035, 101985, 174850, 163134, 189860, 185527, 563929.54, 175559,
    158009, 230788, 242964, 235595.58, 181459, 190493, 164240.8, 174701.1, 184272.95, 199995.15,
    172856, 161141.82, 98770, 105147, 89704, 95588, 88203, 91846, 84777, 104951, 84043, 81256,
    84465, 90472, 112873, 103749, 104604, 116505, 130602, 149888, 110035, 101037, 122608, 134305,
    125867, 88110, 104379, 103817, 110905, 86580, 105236, 127154, 91083, 92910
  ];

  const kujtesa = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1227, 1500,
    1763.04, 4575.58, 6281.48, 8295.3, 9449.25, 10944.95, 14014.87, 14388.57, 16553.17, 16901.89,
    17577.96, 18263.41, 19541.85, 21202.9, 21424, 21637, 22286, 21225, 24964, 20695, 5781, 9379,
    15644, 15917, 16139, 16540, 15027, 14780, 20226
  ];

  const data = {
    labels,
    datasets: [
      {
        type: 'line' as const,
        label: 'Telekomi i Kosoves',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 2,
        fill: false,
        data: labels.map((value, index) => tk[index])
      },
      {
        type: 'bar' as const,
        label: 'Ipko',
        backgroundColor: 'rgb(75, 192, 192)',
        data: labels.map((value, index) => ipko[index]),
        borderColor: 'white',
        borderWidth: 2
      },
      {
        type: 'bar' as const,
        label: 'Kujtesa',
        backgroundColor: 'rgb(53, 162, 235)',
        data: labels.map((value, index) => kujtesa[index])
      },
      {
        type: 'bar' as const,
        label: 'MTS DOO',
        backgroundColor: 'rgb(53, 162, 135)',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 }))
      }
    ]
  };

  return (
    <div style={{ lineHeight: 10, padding: 20 }}>
      <h5 style={{ margin: 0, lineHeight: 2 }}>Të ardhurat për operatorë</h5>
      <Chart ref={chartRef} type='bar' data={data} />
    </div>
  );
};

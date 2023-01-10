import axios from 'axios';

import { FC, useEffect, useRef, useState } from 'react';
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
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
          index: 2,
        },
        {
          datasetIndex: 1,
          index: 2,
        },
      ],
      {
        x: (chartArea.left + chartArea.right) / 2,
        y: (chartArea.top + chartArea.bottom) / 2,
      }
    );
  }

  chart.update();
}

export const NdarjaTregutPerdoruesve: FC = () => {
  const chartRef = useRef<ChartJS>(null);
  const [labels, setLabels] = useState([]);
  const [telekomi, setTelekomi] = useState([]);
  const [ipko, setIpko] = useState([]);
  const [kujtesa, setKujtesa] = useState([]);
  const [mts, setMts] = useState([]);

  try {
    useEffect(() => {
      axios
        .get('http://localhost:5000/telefonia-fixe/Telefoniafikse')
        .then((res_1) => {
          setLabels(res_1.data.item.data[0]);
          setTelekomi(res_1.data.item.data[1]);
          setIpko(res_1.data.item.data[2]);
          setKujtesa(res_1.data.item.data[3]);
          setMts(res_1.data.item.data[4]);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
  } catch (error) {
    console.log(error);
  }

  const filteredLabels = labels.filter((e) => e);
  const telekomi_data = telekomi.filter((_, i) => i > 0);
  const ipko_data = ipko.filter((_, i) => i > 0);
  const kujtesa_data = kujtesa.filter((_, i) => i > 0);
  // const mts_data = mts?.filter((_, i) => i > 0);

  const data = {
    labels: filteredLabels,
    datasets: [
      {
        type: 'line' as const,
        label: filteredLabels[0],
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 2,
        fill: false,
        data: labels.map((value, index) => telekomi_data[index]),
      },
      {
        type: 'bar' as const,
        label: filteredLabels[1],
        backgroundColor: 'rgb(75, 192, 192)',
        data: labels.map((value, index) => ipko_data[index]),
        borderColor: 'white',
        borderWidth: 2,
      },
      {
        type: 'bar' as const,
        label: filteredLabels[2],
        backgroundColor: 'rgb(53, 162, 235)',
        data: labels.map((value, index) => kujtesa_data[index]),
      },
      // {
      //   type: 'bar' as const,
      //   label: 'MTS DOO',
      //   backgroundColor: 'rgb(53, 162, 135)',
      //   data: labels.map((value, index) => mts_data[index]),
      // },
    ],
  };

  return (
    <div style={{ lineHeight: 10, padding: 20 }}>
      <h5 style={{ margin: 0, lineHeight: 2 }}>Ndarja e tregut te perdoruesve</h5>
      <Chart ref={chartRef} type="bar" data={data} />
    </div>
  );
};

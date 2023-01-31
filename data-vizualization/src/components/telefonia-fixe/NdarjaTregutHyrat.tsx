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

export const NdarjaTregutHyrat: FC = () => {
  const chartRef = useRef<ChartJS>(null);
  const [label, setLabelsData] = useState([]);
  const [telekomis, setTelekomiData] = useState([]);
  const [ipkos, setIpkoData] = useState([]);
  const [kujtesas, setKujtesaData] = useState([]);
  const [mtss, setMtsData] = useState([]);

  try {
    useEffect(() => {
      axios
        .get('https://dv-arkep.vercel.app/telefonia-fixe/NdarjaTregut-tehyrat')
        .then((res_1) => {
          setLabelsData(res_1.data.item.data[0]);
          setTelekomiData(res_1.data.item.data[1]);
          setIpkoData(res_1.data.item.data[2]);
          setKujtesaData(res_1.data.item.data[3]);
          setMtsData(res_1.data.item.data[4]);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
  } catch (error) {
    console.log(error);
  }

  const filteredLabel = label.filter((e) => e);
  const telekomi_data = telekomis.filter((_, i) => i > 0);
  const ipko_data = ipkos.filter((_, i) => i > 0);
  const kujtesa_data = kujtesas.filter((_, i) => i > 0);
  const mts_data = mtss.filter((_, i) => i > 0);

  const data = {
    labels: filteredLabel,
    datasets: [
      {
        type: 'line' as const,
        label: filteredLabel[0],
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 2,
        fill: false,
        data: label.map((value, index) => telekomi_data[index]),
      },
      {
        type: 'bar' as const,
        label: filteredLabel[1],
        backgroundColor: 'rgb(75, 192, 192)',
        data: label.map((value, index) => ipko_data[index]),
        borderColor: 'white',
        borderWidth: 2,
      },
      {
        type: 'bar' as const,
        label: filteredLabel[2],
        backgroundColor: 'rgb(53, 162, 235)',
        data: label.map((value, index) => kujtesa_data[index]),
      },
      {
        type: 'bar' as const,
        label: 'MTS DOO',
        backgroundColor: 'rgb(53, 162, 135)',
        data: label.map((value, index) => mts_data[index]),
      },
    ],
  };

  return (
    <div style={{ lineHeight: 10, padding: 20 }}>
      <h5 style={{ margin: 0, lineHeight: 2 }}>Ndarja e tregut te te hyrave</h5>
      <Chart ref={chartRef} type="bar" data={data} />
    </div>
  );
};

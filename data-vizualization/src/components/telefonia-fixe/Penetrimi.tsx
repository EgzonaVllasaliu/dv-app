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
import axios from 'axios';

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip
);

export const Penetrimi: FC = () => {
  const chartRef = useRef<ChartJS>(null);
  const [labels, setLabels] = useState([]);
  const [penetrimi, setPenetrimi] = useState([]);

  try {
    useEffect(() => {
      axios
        .get('http://localhost:5000/telefonia-fixe/Telefoniafikse')
        .then((res_1) => {
          setLabels(res_1.data.item.data[0]);
          setPenetrimi(res_1.data.item.data[2]);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
  } catch (error) {
    console.log(error);
  }

  const filteretLabels = labels.filter((e) => e);
  const penetrimi_data = penetrimi.filter((_, i) => i > 0);

  const options: any = {
    plugins: {
      zoom: {
        zoom: {
          wheel: {
            enabled: true,
          },
          pinch: {
            enabled: true,
          },
          mode: 'y',
        },
      },
    },
  };

  const data = {
    labels: filteretLabels,
    datasets: [
      {
        fill: true,
        label: 'Penetrimi per secilin 3 mujor ne perqindje (%)',
        data: labels.map((value, index) => penetrimi_data[index]),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgb(53, 162, 235)',
      },
    ],
  };

  return (
    <div style={{ lineHeight: 10, padding: 20 }}>
      <h5 style={{ margin: 0, lineHeight: 2 }}>Penetrimi per secilin 3 mujor ne perqindje (%)</h5>
      <Chart ref={chartRef} type="bar" data={data} options={options}/>
    </div>
  );
};

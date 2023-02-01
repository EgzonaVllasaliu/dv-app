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
import faker from 'faker';
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

export const Perdoruesit: FC = () => {
  const chartRef = useRef<ChartJS>(null);
  const [labels, setLabels] = useState([]);
  const [perdoruesit, setPerdoruesit] = useState([]);
  const [penetrimi, setPenetrimi] = useState([]);
  const [teHyrat, setTeHyrat] = useState([]);

  try {
    useEffect(() => {
      axios
        .get('http://localhost:5000/telefonia-fixe/Telefoniafikse')
        .then((res_1) => {
          setLabels(res_1.data.item.data[0]);
          setPerdoruesit(res_1.data.item.data[1]);
          setPenetrimi(res_1.data.item.data[2]);
          setTeHyrat(res_1.data.item.data[3]);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
  } catch (error) {
    console.log(error);
  }

  const filteretLabels = labels.filter((e) => e);
  const perdoruesit_data = perdoruesit.filter((_, i) => i > 0);
  //   const penetrimi_data = penetrimi.filter((_, i) => i > 0);
  //   const te_hyrat_data = teHyrat.filter((_, i) => i > 0);

  const data = {
    labels: filteretLabels,
    datasets: [
      {
        fill: true,
        label: 'Totali i perdoruesve per secilin 3 mujor',
        data: labels.map((value, index) => perdoruesit_data[index]),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgb(53, 162, 135)',
      },
    ],
  };

  return (
    <div style={{ lineHeight: 10, padding: 20 }}>
      <h5 style={{ margin: 0, lineHeight: 2 }}>Perdoruesit e telefonise fixe</h5>
      <Chart ref={chartRef} type="bar" data={data} />
    </div>
  );
};

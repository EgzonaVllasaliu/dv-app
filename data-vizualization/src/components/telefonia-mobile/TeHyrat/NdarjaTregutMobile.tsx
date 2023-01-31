import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import axios from 'axios';
import zoomPlugin from 'chartjs-plugin-zoom';

ChartJS.register(ArcElement, Tooltip, Legend, zoomPlugin);

export function NdarjaTregutMobile() {
  const [labelsArray, setLabelsArray] = useState([]);
  const [valaValues, setValaValues] = useState([]);
  const [ipkoValues, setIpkoValues] = useState([]);
  const [zmobileValues, setZmobileValues] = useState([]);
  const [d3Values, setD3Values] = useState([]);

  try {
    useEffect(() => {
      axios
        .get('https://dv-arkep.vercel.app/telefonia-mobile/api/sheet/Ndarja_tregut_sipas_te_hyrave')
        .then((res_1) => {
          setLabelsArray(res_1.data.sheet.data[0]);
          setValaValues(res_1.data.sheet.data[1]);
          setIpkoValues(res_1.data.sheet.data[2]);
          setD3Values(res_1.data.sheet.data[3]);
          setZmobileValues(res_1.data.sheet.data[4]);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
  } catch (error) {
    console.log(error);
  }

  const filteretLabels = labelsArray.filter(function (e) {
    return e;
  });
  const valaMainValues = valaValues.filter((_, i) => i > 0);
  const ipkoMainValues = ipkoValues.filter((_, i) => i > 0);
  const zmobileMainValues = zmobileValues.filter((_, i) => i > 0);
  const d3MainValues = d3Values.filter((_, i) => i > 0);

  const options: any = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      zoom: {
        zoom: {
          wheel: {
            enabled: true,
          },
          pinch: {
            enabled: true,
          },
          mode: 'xy',
        },
      },
    },
  };

  const data = {
    labels: filteretLabels,
    datasets: [
      {
        label: 'Vala',
        // @ts-ignore
        data: filteretLabels.map((value, index) => valaMainValues?.[index] * 100 ?? 0),
        backgroundColor: 'rgb(255, 99, 132, 0.7)',
        borderColor: 'rgb(255, 99, 132)',
      },
      {
        label: 'Ipko',
        // @ts-ignore
        data: filteretLabels.map((value, index) => ipkoMainValues?.[index] * 100 ?? 0),
        backgroundColor: 'rgb(75, 192, 192, 0.7)',
        borderColor: 'rgb(75, 192, 192)',
      },
      {
        label: 'D3 Mobile',
        // @ts-ignore
        data: filteretLabels.map((value, index) => d3MainValues?.[index] * 100 ?? 0),
        backgroundColor: 'rgba(0, 43, 144, 0.7)',
      },
      {
        label: 'Z Mobile',
        // @ts-ignore
        data: filteretLabels.map((value, index) => zmobileMainValues?.[index] * 100 ?? 0),
        backgroundColor: 'rgba(255, 206, 86, 0.7)',
      },
    ],
  };

  return (
    <>
      <h5 style={{ margin: '10 0', padding: 20, lineHeight: 2 }}>
        Ndarja e tregut sipas të hyrave (%) - periudha 2010-2016
      </h5>

      <div style={{ color: 'blue', lineHeight: 10, padding: 20, margin: '0 auto' }}>
        <Bar options={options} data={data} />
      </div>
    </>
  );
}

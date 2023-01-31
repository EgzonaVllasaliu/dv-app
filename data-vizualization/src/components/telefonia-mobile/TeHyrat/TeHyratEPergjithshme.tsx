import { useEffect, useRef, useState } from 'react';
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
import zoomPlugin from 'chartjs-plugin-zoom';

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip
);

export function TeHyratEPergjithshme1216() {
  const chartRef = useRef<ChartJS>(null);
  const [labelsArray, setLabelsArray] = useState([]);
  const [valaValues, setValaValues] = useState([]);
  const [ipkoValues, setIpkoValues] = useState([]);
  const [zmobileValues, setZmobileValues] = useState([]);
  const [mtsValues, setMtsValues] = useState([]);
  ChartJS.register(zoomPlugin);

  try {
    useEffect(() => {
      axios
        .get(
          'https://dv-arkep.vercel.app/telefonia-mobile/api/sheet/Te_hyrat_pergjithshme_2012-2016'
        )
        .then((res_1) => {
          setLabelsArray(res_1.data.sheet.data[0]);
          setValaValues(res_1.data.sheet.data[1]);
          setIpkoValues(res_1.data.sheet.data[2]);
          setZmobileValues(res_1.data.sheet.data[3]);
          setMtsValues(res_1.data.sheet.data[4]);
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
  const mtsMainValues = mtsValues.filter((_, i) => i > 0);

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
          mode: 'xy',
        },
      },
    },
  };

  const data = {
    labels: filteretLabels,
    datasets: [
      {
        type: 'line' as const,
        label: zmobileValues[0],
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        borderColor: 'rgba(255, 206, 86)',
        borderWidth: 2,
        fill: true,
        data: filteretLabels.map((value, index) => zmobileMainValues?.[index] ?? 0),
      },
      {
        type: 'line' as const,
        label: mtsValues[0],
        backgroundColor: 'rgba(0, 43, 144, 0.2)',
        borderColor: 'rgba(0, 43, 144)',
        borderWidth: 2,
        fill: true,
        data: filteretLabels.map((value, index) => mtsMainValues?.[index] ?? 0),
      },
      {
        type: 'bar' as const,
        label: valaValues[0],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgb(255, 99, 132, 0.2)',
        borderWidth: 2,
        data: filteretLabels.map((value, index) => valaMainValues?.[index] ?? 0),
      },
      {
        type: 'bar' as const,
        label: ipkoValues[0],
        backgroundColor: 'rgb(75, 192, 192, 0.2)',
        borderColor: 'rgb(75, 192, 192)',
        borderWidth: 2,
        data: filteretLabels.map((value, index) => ipkoMainValues?.[index] ?? 0),
      },
    ],
  };

  return (
    <>
      <div style={{ lineHeight: 10, padding: 20 }}>
        <h5 style={{ margin: 0, lineHeight: 2 }}>Të hyrat e pergjithshme - Periudha 2012-2016</h5>
        <Chart ref={chartRef} type="bar" data={data} options={options} />
      </div>
    </>
  );
}

export function TeHyratEPergjithshme1722() {
  const chartRef = useRef<ChartJS>(null);
  ChartJS.register(zoomPlugin);

  const [labelsArray, setLabelsArray] = useState([]);
  const [valaValues, setValaValues] = useState([]);
  const [ipkoValues, setIpkoValues] = useState([]);
  const [zmobileValues, setZmobileValues] = useState([]);
  const [mtsValues, setMtsValues] = useState([]);

  try {
    useEffect(() => {
      axios
        .get(
          'https://dv-arkep.vercel.app/telefonia-mobile/api/sheet/Te_hyrat_pergjithshme_2017-2022'
        )
        .then((res_1) => {
          setLabelsArray(res_1.data.sheet.data[0]);
          setValaValues(res_1.data.sheet.data[1]);
          setIpkoValues(res_1.data.sheet.data[2]);
          setZmobileValues(res_1.data.sheet.data[3]);
          setMtsValues(res_1.data.sheet.data[4]);
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
  const mtsMainValues = mtsValues.filter((_, i) => i > 0);

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
          mode: 'xy',
        },
      },
    },
  };

  const data = {
    labels: filteretLabels,
    datasets: [
      {
        type: 'line' as const,
        label: zmobileValues[0],
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        borderColor: 'rgba(255, 206, 86)',
        borderWidth: 2,
        fill: true,
        data: filteretLabels.map((value, index) => zmobileMainValues?.[index] ?? 0),
      },
      {
        type: 'line' as const,
        label: mtsValues[0],
        backgroundColor: 'rgba(0, 43, 144, 0.2)',
        borderColor: 'rgba(0, 43, 144)',
        borderWidth: 2,
        fill: true,
        data: filteretLabels.map((value, index) => mtsMainValues?.[index] ?? 0),
      },
      {
        type: 'bar' as const,
        label: valaValues[0],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgb(255, 99, 132, 0.2)',
        borderWidth: 2,
        data: filteretLabels.map((value, index) => valaMainValues?.[index] ?? 0),
      },
      {
        type: 'bar' as const,
        label: ipkoValues[0],
        backgroundColor: 'rgb(75, 192, 192, 0.2)',
        borderColor: 'rgb(75, 192, 192)',
        borderWidth: 2,
        data: filteretLabels.map((value, index) => ipkoMainValues?.[index] ?? 0),
      },
    ],
  };

  return (
    <>
      <div style={{ lineHeight: 10, padding: 20 }}>
        <h5 style={{ margin: 0, lineHeight: 2 }}>Të hyrat e pergjithshme - Periudha 2017-2022</h5>
        <Chart ref={chartRef} type="bar" data={data} options={options} />
      </div>
    </>
  );
}

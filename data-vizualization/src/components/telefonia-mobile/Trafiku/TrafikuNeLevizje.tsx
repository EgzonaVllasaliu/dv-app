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

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip
);

export function IncomingTraffic() {
  const chartRef = useRef<ChartJS>(null);
  const [labelsArray, setLabelsArray] = useState([]);
  const [valaValues, setValaValues] = useState([]);
  const [ipkoValues, setIpkoValues] = useState([]);
  const [mtsValues, setMtsValues] = useState([]);

  try {
    useEffect(() => {
      axios
        .get('http://localhost:5000/telefonia-mobile/api/sheet/Incoming_traffic')
        .then((res_1) => {
          setLabelsArray(res_1.data.sheet.data[0]);
          setValaValues(res_1.data.sheet.data[1]);
          setIpkoValues(res_1.data.sheet.data[2]);
          setMtsValues(res_1.data.sheet.data[3]);
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
  const mtsMainValues = mtsValues.filter((_, i) => i > 0);

  const data = {
    labels: filteretLabels,
    datasets: [
      {
        type: 'bar' as const,
        label: mtsValues[0],
        backgroundColor: 'rgba(0, 43, 144, 0.2)',
        borderColor: 'rgba(0, 43, 144)',
        borderWidth: 2,
        fill: true,
        data: filteretLabels.map((value, index) => mtsMainValues?.[index] ?? 0),
      },
      {
        type: 'line' as const,
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
        <h5 style={{ margin: 0, lineHeight: 2 }}>Trafiku hyres - Periudha 2012-2016</h5>
        <Chart ref={chartRef} type="bar" data={data} />
      </div>
    </>
  );
}

export function OutgoingTraffic() {
  const chartRef = useRef<ChartJS>(null);
  const [labelsArray, setLabelsArray] = useState([]);
  const [valaValues, setValaValues] = useState([]);
  const [ipkoValues, setIpkoValues] = useState([]);
  const [mtsValues, setMtsValues] = useState([]);

  try {
    useEffect(() => {
      axios
        .get('http://localhost:5000/telefonia-mobile/api/sheet/Outgoing_traffic')
        .then((res_1) => {
          setLabelsArray(res_1.data.sheet.data[0]);
          setValaValues(res_1.data.sheet.data[1]);
          setIpkoValues(res_1.data.sheet.data[2]);
          setMtsValues(res_1.data.sheet.data[3]);
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
  const mtsMainValues = mtsValues.filter((_, i) => i > 0);

  const data = {
    labels: filteretLabels,
    datasets: [
      {
        type: 'bar' as const,
        label: mtsValues[0],
        backgroundColor: 'rgba(0, 43, 144, 0.2)',
        borderColor: 'rgba(0, 43, 144)',
        borderWidth: 2,
        fill: true,
        data: filteretLabels.map((value, index) => mtsMainValues?.[index] ?? 0),
      },
      {
        type: 'line' as const,
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
        <h5 style={{ margin: 0, lineHeight: 2 }}>Trafiku dales - Periudha 2012-2016</h5>
        <Chart ref={chartRef} type="bar" data={data} />
      </div>
    </>
  );
}

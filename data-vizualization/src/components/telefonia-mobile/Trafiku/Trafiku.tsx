import { useEffect, useRef, useState } from 'react';
import { ArcElement, Chart as ChartJS, Legend, RadialLinearScale, Tooltip } from 'chart.js';
import { PolarArea } from 'react-chartjs-2';
import axios from 'axios';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export function TrafikuBrendaRrjetit() {
  const [labelsArray, setLabelsArray] = useState([]);
  const [brendaRrjetit, setbrendaRrjetit] = useState([]);

  try {
    useEffect(() => {
      axios
        .get('https://dv-arkep.vercel.app/telefonia-mobile/api/sheet/Totali_trafikut_MNO')
        .then((res_1) => {
          setLabelsArray(res_1.data.sheet.data[0]);
          setbrendaRrjetit(res_1.data.sheet.data[1]);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
  } catch (error) {
    console.log(error);
  }

  const filteredLabels = labelsArray.filter(function (e) {
    return e;
  });
  const brendaRrjetitMain = brendaRrjetit.filter((_, i) => i > 0);

  const data = {
    labels: filteredLabels,
    datasets: [
      {
        label: labelsArray[1],
        data: brendaRrjetitMain,
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
        ],
        borderColor: ['rgba(255, 99, 132)', 'rgba(54, 162, 235)', 'rgba(255, 206, 86)'],
        borderWidth: 2,
      },
    ],
  };

  return (
    <>
      <h6
        style={{
          margin: '10 0',
          padding: 20,
          lineHeight: 2,
          display: 'block',
          marginRight: 'auto',
          marginLeft: 'auto',
          width: '40% ',
        }}
      >
        Totali i trafikut brenda rrjetit - periudha 2021-2022
      </h6>

      <div
        style={{ maxWidth: '500px', color: 'blue', lineHeight: 10, padding: 20, margin: '0 auto' }}
      >
        <PolarArea data={data} />
      </div>
    </>
  );
}

export function TrafikuTjeter() {
  const [labelsArray, setLabelsArray] = useState([]);
  const [trafikuTjeter, setTrafikuTjeter] = useState([]);

  try {
    useEffect(() => {
      axios
        .get('https://dv-arkep.vercel.app/telefonia-mobile/api/sheet/Totali_trafikut_MNO')
        .then((res_1) => {
          setLabelsArray(res_1.data.sheet.data[0]);
          setTrafikuTjeter(res_1.data.sheet.data[2]);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
  } catch (error) {
    console.log(error);
  }

  const filteredLabels = labelsArray.filter(function (e) {
    return e;
  });
  const trafikuTjeterMain = trafikuTjeter.filter((_, i) => i > 0);

  const data = {
    labels: filteredLabels,
    datasets: [
      {
        label: labelsArray[2],
        data: trafikuTjeterMain,
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
        ],
        borderColor: ['rgba(255, 99, 132)', 'rgba(54, 162, 235)', 'rgba(255, 206, 86)'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <h6
        style={{
          margin: '10 0',
          padding: 20,
          lineHeight: 2,
          display: 'block',
          marginRight: 'auto',
          marginLeft: 'auto',
          width: '40% ',
        }}
      >
        Totali i trafikut drejt rrjetit tjeter mobil - periudha 2021-2022
      </h6>

      <div
        style={{ maxWidth: '500px', color: 'blue', lineHeight: 10, padding: 20, margin: '0 auto' }}
      >
        <PolarArea data={data} />
      </div>
    </>
  );
}

export function TrafikuFiks() {
  const [labelsArray, setLabelsArray] = useState([]);
  const [trafikuFiks, setTrafikuFiks] = useState([]);

  try {
    useEffect(() => {
      axios
        .get('https://dv-arkep.vercel.app/telefonia-mobile/api/sheet/Totali_trafikut_MNO')
        .then((res_1) => {
          setLabelsArray(res_1.data.sheet.data[0]);
          setTrafikuFiks(res_1.data.sheet.data[3]);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
  } catch (error) {
    console.log(error);
  }

  const filteredLabels = labelsArray.filter(function (e) {
    return e;
  });
  const trafikuFiksMain = trafikuFiks.filter((_, i) => i > 0);

  const data = {
    labels: filteredLabels,
    datasets: [
      {
        label: labelsArray[3],
        data: trafikuFiksMain,
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
        ],
        borderColor: ['rgba(255, 99, 132)', 'rgba(54, 162, 235)', 'rgba(255, 206, 86)'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <h6
        style={{
          margin: '10 0',
          padding: 20,
          lineHeight: 2,
          display: 'block',
          marginRight: 'auto',
          marginLeft: 'auto',
          width: '40% ',
        }}
      >
        Totali i trafikut drejt rrjetit fiks - periudha 2021-2022
      </h6>

      <div
        style={{ maxWidth: '500px', color: 'blue', lineHeight: 10, padding: 20, margin: '0 auto' }}
      >
        <PolarArea data={data} />
      </div>
    </>
  );
}

export function TrafikuNderkombetar() {
  const [labelsArray, setLabelsArray] = useState([]);
  const [trafikuNderkombetar, setTrafikuNderkombetar] = useState([]);

  try {
    useEffect(() => {
      axios
        .get('https://dv-arkep.vercel.app/telefonia-mobile/api/sheet/Totali_trafikut_MNO')
        .then((res_1) => {
          setLabelsArray(res_1.data.sheet.data[0]);
          setTrafikuNderkombetar(res_1.data.sheet.data[4]);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
  } catch (error) {
    console.log(error);
  }

  const filteredLabels = labelsArray.filter(function (e) {
    return e;
  });
  const trafikuNderkombetarMain = trafikuNderkombetar.filter((_, i) => i > 0);

  const data = {
    labels: filteredLabels,
    datasets: [
      {
        label: labelsArray[4],
        data: trafikuNderkombetarMain,
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
        ],
        borderColor: ['rgba(255, 99, 132)', 'rgba(54, 162, 235)', 'rgba(255, 206, 86)'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <h6
        style={{
          margin: '10 0',
          padding: 20,
          lineHeight: 2,
          display: 'block',
          marginRight: 'auto',
          marginLeft: 'auto',
          width: '40% ',
        }}
      >
        Totali i trafikut drejt rrjetit nderkombetar - periudha 2021-2022
      </h6>

      <div
        style={{ maxWidth: '500px', color: 'blue', lineHeight: 10, padding: 20, margin: '0 auto' }}
      >
        <PolarArea data={data} />
      </div>
    </>
  );
}

export function TrafikuTerminuar() {
  const [labelsArray, setLabelsArray] = useState([]);
  const [trafikuTerminuar, setTrafikuTerminuar] = useState([]);

  try {
    useEffect(() => {
      axios
        .get('https://dv-arkep.vercel.app/telefonia-mobile/api/sheet/Totali_trafikut_terminuar')
        .then((res_1) => {
          setLabelsArray(res_1.data.sheet.data[0]);
          setTrafikuTerminuar(res_1.data.sheet.data[4]);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
  } catch (error) {
    console.log(error);
  }

  const filteredLabels = labelsArray.filter(function (e) {
    return e;
  });
  const trafikuTerminuarMain = trafikuTerminuar.filter((_, i) => i > 0);

  const data = {
    labels: filteredLabels,
    datasets: [
      {
        label: labelsArray[4],
        data: trafikuTerminuarMain,
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
        ],
        borderColor: ['rgba(255, 99, 132)', 'rgba(54, 162, 235)', 'rgba(255, 206, 86)'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <h6
        style={{
          margin: '10 0',
          padding: 20,
          lineHeight: 2,
          display: 'block',
          marginRight: 'auto',
          marginLeft: 'auto',
          width: '40% ',
        }}
      >
        Totali i trafikut te terminuar - periudha 2021-2022
      </h6>

      <div
        style={{ maxWidth: '500px', color: 'blue', lineHeight: 10, padding: 20, margin: '0 auto' }}
      >
        <PolarArea data={data} />
      </div>
    </>
  );
}

import { FC, useEffect, useRef, useState } from 'react';
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
import axios from 'axios';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { FormControl, InputLabel, SelectChangeEvent } from '@mui/material';
import { isPropertySignature } from 'typescript';
import React from 'react';


ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip
);



export const ISPGraph: FC = () => {
    const chartRef = useRef<ChartJS>(null);
    const [labels, setLabels] = useState(["TM1 2017"])
    const data = {
      labels,
      datasets: [
        {
          type: 'line' as const,
          label: '',
          borderColor: 'rgb(255, 99, 132)',
          borderWidth: 2,
          fill: false,
          data: [0]
        }
      ]
    };

    const [data1, setData1] = useState<typeof data>();
    
    useEffect(() => {

    }, []);



    return(<></>)
}
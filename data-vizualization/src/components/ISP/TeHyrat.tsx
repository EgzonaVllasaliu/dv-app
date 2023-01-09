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


ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip
);


export const TeHyrat: FC = () => {
    const chartRef = useRef<ChartJS>(null);
    const [provider, setProvider] = useState<string[]>([]);
    const [labels, setLabels] = useState(["TM1 2017"])
    const [selectedProvider, setSelectedProvider] = useState<string[]>([]);

    const handleProviderChange = (event: SelectChangeEvent<typeof selectedProvider>) => {
      const {
        target: { value },
      } = event;
      setSelectedProvider(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
    };
  
    
  
    
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

    const [data1, setData1] = useState(data) ;
    const [data2, setData2] = useState(data) ;
    

    // let data1 : number []= []
    try{ 
        useEffect(() => {
          axios.get('http://localhost:5000/investimet-isp/api/investimet/get_time')
          .then(response => {
            
            // labels.push(response.data);
            let labels = [...response.data]
            setLabels(labels);

            axios.get('http://localhost:5000/investimet-isp/api/investimet/get_operators')
            .then(response => {
              setProvider(response.data);
            })

            axios.get('http://localhost:5000/investimet-isp/api/investimet/all_data/kujtesa')
        .then((res_1) => {

            axios.get('http://localhost:5000/investimet-isp/api/investimet/all_data/ipko')
            .then((res_2 => {

              axios.get('http://localhost:5000/investimet-isp/api/investimet/all_data/telekomi i kosovës')
              .then((res_3) => {

                axios.get('http://localhost:5000/investimet-isp/api/investimet/all_data/artmotion')
                .then(res_4 => {
                  console.log('Request Data : ',res_1)
                  let arr = [];
                  for(let i = 0; i < res_1.data.data.length; i++){
                      arr.push(res_1.data.data[i].income);
                  }
    
                  let arr2 = [];
                  for(let i = 0; i < res_2.data.data.length; i++){
                      arr2.push(res_2.data.data[i].income);
                  }
    
                  let arr3 = [];
                  for(let i = 0; i < res_3.data.data.length; i++){
                    arr3.push(res_3.data.data[i].income);
                  }

                  let arr4 = [];
                  for(let i = 0; i < res_4.data.data.length; i++){
                    arr4.push(res_4.data.data[i].income);
                  }
          
                  let arr_investimet = [];
                  for(let i = 0; i < res_1.data.data.length; i++){
                      arr_investimet.push(res_1.data.data[i].investments as number);
                  } 

                  let arr_investimet2 = [];
                  for(let i = 0; i < res_2.data.data.length; i++){
                      arr_investimet2.push(res_2.data.data[i].investments as number);
                  } 
      
                  setData1({
                      labels,
                      datasets: [
                      {
                          type: 'line' as const,
                          label: 'Kujtesa Te Hyrat',
                          borderColor: 'rgb(255, 99, 132)',
                          borderWidth: 2,
                          fill: false,
                          data: arr
                      },
                      {
                        type: 'line' as const,
                        label: 'Ipko Te Hyrat',
                        borderColor: 'rgb(100, 200, 50)',
                        borderWidth: 2,
                        fill: false,
                        data: arr2
                    },{
                      type: 'line' as const,
                      label: 'Telekomi Te Hyrat',
                      borderColor: 'rgb(50, 100, 250)',
                      borderWidth: 2,
                      fill: false,
                      data: arr3
                  },
                  {
                    type: 'line' as const,
                    label: 'Artmotion Te Hyrat',
                    borderColor: 'rgb(150, 150, 150)',
                    borderWidth: 2,
                    fill: false,
                    data: arr4
                  }
                      ]
                  })
      
                  setData2({
                      labels,
                      datasets: [
                      {
                          type: 'line' as const,
                          label: 'Kujtesa Investimet',
                          borderColor: 'rgb(255, 99, 132)',
                          borderWidth: 2,
                          fill: false,
                          data: arr_investimet 
                      },
                      {
                        type: 'line' as const,
                        label: 'Ipko Investimet',
                        borderColor: 'rgb(100, 200, 50)',
                        borderWidth: 2,
                        fill: false,
                        data: arr_investimet2 
                    },
                      ]
                  })
                })
                .catch(err => {
                  console.log(err);
                })

              })
              .catch(err => {
                console.log(err);
              })
              
            })).catch((err) => {
              console.log(err);
            })

            
            
        })
          })
        .catch((err) => {
            console.log(err);
        })
        }, [])   
        
    }
    catch(error){
        console.log(error);
    }
    if(!data) return null;
    return (
      <div style={{ lineHeight: 10, padding: 20, }}>
        {/* <h5 style={{ margin: 0, lineHeight: 2 }}>Të ardhurat për operatorë</h5> */}
        {/* <Chart ref={chartRef} type='bar' data={data} /> */}
        
        <h5 style={{ margin: 0, lineHeight: 2 }}>Të ardhurat për operatorë</h5>
        <Chart ref={chartRef} type='bar' data={data1} />
        <h5 style={{ margin: 0, lineHeight: 2 }}>Investimet për operatorë</h5>
        <Chart ref={chartRef} type='bar' data={data2} />
      </div>
    );
  };
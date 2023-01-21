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
import zoomPlugin from 'chartjs-plugin-zoom';
import { Chart } from 'react-chartjs-2';
import faker from 'faker';
import axios from 'axios';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { FormControl, InputLabel, SelectChangeEvent } from '@mui/material';
import { IndexInfo, IndexType } from 'typescript';
// import { isPropertySignature } from 'typescript';
// import React from 'react';


ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  zoomPlugin
);

interface Props {
  comparison : string,
  providers : string[],
  timeFrom : string,
  timeTo : string,
}

export const ISPGraph = (props : Props) => {
    const chartRef = useRef<ChartJS>(null);
    const [labels, setLabels] = useState([""])
    const colors = [
      "rgb(255, 200, 100)",
      "rgb(100, 150, 100)",
      "rgb(255, 30, 200)",
      "rgb(100, 60, 230)",
      "rgb(255, 150, 250)",
      "rgb(100, 120, 170)",
      "rgb(255, 200, 150)",
      "rgb(70, 200, 200)",
      "rgb(255, 200, 255)",
      "rgb(100, 100, 100)",
      "rgb(255, 100, 100)",
      "rgb(100, 150, 150)",
      "rgb(100, 200, 150)",
      "rgb(100, 150, 250)",
      "rgb(100, 200, 100)",
      "rgb(255, 150, 200)",
      "rgb(100, 200, 200)",
      "rgb(100, 200, 255)",
      "rgb(20, 180, 35)",
      "rgb(120, 10, 95)"
    ]

    const toCompare = props.comparison;
    

    const ispData = {
      
      "year": "",
      "income": "",
      "investments": "",
      "individual_users": "",
      "business_users": "",
      "total_users": ""
    
  }
  interface apiData {
    data : {
      name : string,
      data : typeof ispData[]  
    }
    
  }

    const chartData = {
      labels,
      datasets: [
        {
          type: 'line' as const,
          label: '',
          borderColor: 'rgb(255, 99, 132)',
          borderWidth: 2,
          fill: false,
          data: [1]
        }
      ]
    };

    const options : any =  {
      plugins: {
        zoom: {
          zoom: {
            wheel: {
              enabled: true,
            },
            pinch: {
              enabled: true
            },
            mode: 'x',
          }
        }
      }
    }

    
    const [data1, setData1] = useState(chartData);

    
    useEffect(() => {
      axios.get('http://localhost:5000/investimet-isp/api/investimet/get_time')
      .then(response => {
        let time_array : string[] = response.data;
        let labels : string [] = response.data;
        setLabels(labels);

        let promise_array : Promise<apiData>[] = 
        [new Promise((resolve, reject) => {
          resolve({
            "data":{
            "name": "",
            "data": [
            {
                "year": "TM1 2017",
                "income": "",
                "investments": "",
                "individual_users": "",
                "business_users": "",
                "total_users": ""
            }]
          }})
        })]

        props.providers.forEach(provider => {
          

          promise_array.push(axios.get(`http://localhost:5000/investimet-isp/api/investimet/all_data/${provider}`))
        });
        promise_array.shift();

        Promise.all(promise_array).then(values => {
          
          let chartDatasets : typeof chartData.datasets = [];
          values.forEach((val, index) => {
            let val_data : number[] = [];
            
            val.data.data.forEach(block => {
              if((block as any)[props.comparison] === ""){
                
                val_data.push(0.001)
              }
              else {
                val_data.push(Number((block as any)[props.comparison]))  
              }
              
            })

            let indexTimeFrom = time_array.indexOf(props.timeFrom);
            let indexTimeTo = time_array.indexOf(props.timeTo);

            val_data = val_data.filter((row, index) => {
              if(index >= indexTimeFrom && index <= indexTimeTo){
                return row;
              }
            })
             chartDatasets.push(
                {
                    type: 'line',
                    label: val.data.name,
                    borderColor: colors[index],
                    borderWidth: 2,
                    fill: false,
                    data: val_data, 
                }
              )
            
          })
          let indexTimeFrom = time_array.indexOf(props.timeFrom);
          let indexTimeTo = time_array.indexOf(props.timeTo);
          labels = labels.filter((row, index) => {
            if(index >= indexTimeFrom && index <= indexTimeTo){
              return row;
            }  
          })
          setData1({
            labels,
            datasets:chartDatasets
          }) 
          // console.log('ChartData',{
          //   labels,
          //   datasets:chartDatasets
          // });
        })

      })
    },[props]);



    return(<div style={{marginTop:"10px"}}>
          <Chart ref={chartRef} type='bar' options={options} data={data1} />
          </div>)
}
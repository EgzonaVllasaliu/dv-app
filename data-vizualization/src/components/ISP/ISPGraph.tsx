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
import { Chart, PolarArea } from 'react-chartjs-2';
import faker from 'faker';
import axios from 'axios';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { dividerClasses, FormControl, InputLabel, SelectChangeEvent } from '@mui/material';
import { IndexInfo, IndexType } from 'typescript';
import { color } from '@mui/system';
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
  graph : string,
  pietime : string
}

export const ISPGraph = (props : Props) => {
    const chartRef = useRef<ChartJS>(null);
    const [labels, setLabels] = useState([""])

    const generateColors = (l : Number) => {
      let colors : string[] = [];
      for(let i = 0; i < l; i++){
        let r = Math.round(Math.random()*256);
        let g = Math.round(Math.random()*256);
        let b = Math.round(Math.random()*256);

        let c = `rgb(${r},${g},${b})`

        colors.push(c);
      }

      

      return colors;
    }
    const colors = [
      "rgb(255, 200, 100)",
      "rgb(100, 150, 100)",
      "rgb(255, 30, 200)",
      "rgb(100, 60, 230)",
      "rgb(128, 76, 123)",
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
      ],
      // spanGaps: true
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

    const piechartdata = {
      labels: ['1','2','3'],
      datasets: [
        {
          label: '1',
          data: [20,40,50],
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
          ],
          borderColor: [
            'rgba(255, 99, 132)',
            'rgba(54, 162, 235)',
            'rgba(255, 206, 86)'
          ],
          borderWidth: 1
        }
      ],
    }; 

    const [data2, setData2] = useState(piechartdata);

    useEffect(() => {
      // setColors(generateColors(props.providers.length))


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
                // val_data.push(0.001)
                val_data.push(NaN)
              }
              else {
                val_data.push(Number((block as any)[props.comparison]))  
              }
              
            })

            

            let indexTimeFrom = time_array.indexOf(props.timeFrom);
            let indexTimeTo = time_array.indexOf(props.timeTo);

            // val_data = val_data.filter((row, index) => {
            //   if(index >= indexTimeFrom && index <= indexTimeTo){
            //     
            //     return row;
            //   }
            // })

            let temp_val_data : number[] = [...val_data];
            val_data = [];

            temp_val_data.forEach((element, index) => {
              if(index >= indexTimeFrom && index <= indexTimeTo){
               val_data.push(element);
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
            // spanGaps: true
          }) 

          
        })

      })

      axios.get(`http://localhost:5000/investimet-isp/api/investimet/users/${props.pietime}`)
      .then((response) => {
        let data_u : number[] = [0];
        let label_u : string [] = ['Të tjera'];
        
        let total : Number;
        response.data.data.forEach((row : any)  => {
          if((row.company_name as string).trim().toLowerCase() == 'total'){
            total = row[props.comparison]
          }
        })
        

        response.data.data.forEach((row : any)  => {
          if((row.company_name as string).trim().toLowerCase() != 'total'
              && !(row.company_name as string).trim().toLowerCase().includes('sub total')){
                
              if(row[props.comparison]  > ((total as number)*0.05)){
                data_u.push(Number(row[props.comparison] as string))
                label_u.push(row.company_name as string)
              } else {
                data_u[0] += isNaN(row[props.comparison]) ? 0 : row[props.comparison];
              }  
          }
        })

        console.log(data_u[0],"Data from 0")
        console.log(data_u, 'data uuu')
        setData2({
          labels: label_u,
          datasets: [
            {
              label: '1',
              data: data_u,
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(190, 99, 132, 0.5)',
                'rgba(10, 22, 255, 0.5)',
                'rgba(20, 101, 26, 0.5)',
                'rgba(70, 10, 250, 0.5)',
                'rgba(252, 85, 139,0.5)',
                'rgba(167, 182, 17,0.5)',
                'rgba(228, 145, 240,0.5)',
                'rgba(27 , 177, 72, 0.5)'
              ],
              borderColor: [
                'rgba(255, 99 , 132)',
                'rgba(54 , 162, 235)',
                'rgba(255, 206, 86 )',
                'rgba(190, 99 , 132)',
                'rgba(10 , 22 , 255)',
                'rgba(20 , 101, 26 )',
                'rgba(70 , 10 , 250)',
                'rgba(252, 85 , 139)',
                'rgba(167, 182, 17 )',
                'rgba(228, 145, 240)',
                'rgba(27 , 177, 72 )'
              ],
              borderWidth: 1
            }
          ],
        })
        console.log(response,'Response')
      })
    },[props]);


    console.log(props.comparison, ' Comparison')
    return(<div style={{marginTop:"10px"}}>
          {/* <Chart ref={chartRef} type='bar' options={options} data={data1} />
          {(props.comparison.toLowerCase() === 'individual_users' 
                || props.comparison.toLowerCase() === 'business_users'
                    || props.comparison.toLowerCase() === 'total_users') ?
                      
                    <div style={{height:"700px"}}><Chart style={{width:"200px",height:"200px"}}  type='pie' options={{ maintainAspectRatio: false,}} data={data2} /></div> : ""
                                    }       */}
          {(props.graph.toLowerCase() == 'lakore') ? 
            <Chart ref={chartRef} type='bar' options={options} data={data1} />
                                    :
            <div style={{height:"700px"}}><Chart style={{width:"200px",height:"200px"}}  type='pie' options={{ maintainAspectRatio: false,}} data={data2} /></div>
          }
          
          </div>)
}
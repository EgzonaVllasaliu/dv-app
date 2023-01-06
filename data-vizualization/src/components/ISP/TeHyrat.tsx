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
  
    useEffect(() => {
      const chart = chartRef.current;
  
      
    }, []);
  
    const labels = [
      'TM1 2017',
      'TM2 2017',
      'TM3 2017',
      'TM4 2017',
      'TM1 2018',
      'TM2 2018',
      'TM3 2018 ',
      'TM4 2018',
      'TM4 2018',
      'TM1 2019',
      'TM2 2019',
      'TM3 2019',
      'TM4 2019',
      'TM1 2020',
      'TM2 2020',
      'TM3 2020',
      'TM4 2020 ',
      'TM1 2021 ',
      'TM2 2021',
      'TM3 2021',
      'TM4-2021',
      'TM1-2022',
      'TM2-2022'
    ];
  
    const tk = [
      6253401, 5965977, 5899205, 5630683, 5902018, 4539316, 4726248, 4461703, 4577338, 6042174,
      6020550, 6394784, 6218118, 5725904, 4858497, 5220935, 4494485, 4396581, 4406866, 4389495,
      4261486, 4131095, 4163729.05, 4323183.66, 4188850.47, 3957444.43, 2148869.16, 2042473.09,
      1978303.54, 1802161.92, 1726388.63, 1138515.68, 1018947.66, 922053, 903603.17, 987826.93,
      848315.03, 855404.44, 901512.76, 868814.45, 851490.05, 749135.03, 897914.23, 921751, 916769,
      959525, 975867, 990951, 921956, 855164, 778663, 947711, 608798, 470103, 499417, 718229, 691820,
      691820, 821485
    ];
  
    const data = {
        labels,
        datasets: [
          {
            type: 'line' as const,
            label: 'Telekomi i Kosoves Te Hyrat',
            borderColor: 'rgb(255, 99, 132)',
            borderWidth: 2,
            fill: false,
            data: labels.map((value, index) => tk[index])
          }
          // {
          //   type: 'bar' as const,
          //   label: 'Ipko',
          //   backgroundColor: 'rgb(75, 192, 192)',
          //   data: labels.map((value, index) => ipko[index]),
          //   borderColor: 'white',
          //   borderWidth: 2
          // },
        ]
      };

    const [data1, setData1] = useState(data) ;
    const [data2, setData2] = useState(data) ;

    // let data1 : number []= []
    try{ 
        useEffect(() => {
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
                  arr4.push(0);
                  arr4.push(0);
                  arr4.push(0);
                  for(let i = 0; i < res_4.data.data.length; i++){
                    arr4.push(res_4.data.data[i].income);
                  }
    
    
      
                  // let labels : string[] = [];
                  // for(let i = 0; i < res_1.data.data.length; i++){
                  //     arr.push(res_1.data.data[i].year);
                  // }
      
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
      <div style={{ lineHeight: 10, padding: 20 }}>
        {/* <h5 style={{ margin: 0, lineHeight: 2 }}>Të ardhurat për operatorë</h5> */}
        {/* <Chart ref={chartRef} type='bar' data={data} /> */}
        <h5 style={{ margin: 0, lineHeight: 2 }}>Të ardhurat për operatorë</h5>
        <Chart ref={chartRef} type='bar' data={data1} />
        <h5 style={{ margin: 0, lineHeight: 2 }}>Investimet për operatorë</h5>
        <Chart ref={chartRef} type='bar' data={data2} />
      </div>
    );
  };
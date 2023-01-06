import axios from 'axios';
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { JsxElement } from 'typescript';

ChartJS.register(ArcElement, Tooltip, Legend);



export const data = {
  labels: ['Telekomi', 'Ipko', 'Kujtesa', 'MTS'],
  datasets: [
    {
      label: 'Të hyrat në 3 mujorin e fundit në % ',
      data: [60.31, 10.28, 1.55, 27.86],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)'
      ],
      borderWidth: 1
    }
  ]
};

// const [data1, setData1] = useState(data);
// export default class NdarjaTregut  extends Comment {
//   constructor() {
//     super();
//   }

  

//   componentDidMount(){

//   }

//   render(){
//     return (
//           <>
//             <h5 style={{ margin: '10 0', padding: 20, lineHeight: 2 }}>
//               Ndarja e tregut - të hyrat në 3 mujorin e fundit
//             </h5>
      
//             <div style={{ color: 'blue', lineHeight: 10, padding: 20, margin: '0 auto' }}>
//               <Pie data={data} />
//               <Pie data={data1}/>
//             </div>
//           </>
//         );
//   }
// }


export function NdarjaTregut() {
    
 const [data1, setData1] = useState(data);

//  useEffect(() => {
   axios.get("http://localhost:5000/telefonia-mobile/api/Ndarja_e_tregut/vala")
   .then((res_1) => {
     axios.get("http://localhost:5000/telefonia-mobile/api/Ndarja_e_tregut/ipko")
     .then((res_2) => {
       let result_data = [];
       result_data.push(res_1.data.data[10].value)
       result_data.push(res_2.data.data[10].value)
       console.log('Res Data: ',res_1.data.data[10]);
       setData1({
         labels:['Vala', 'Ipko'],
         datasets : [
           {
             label:"Te hhhhhhhhhhyyyyyyyyyyyyyyyyyyyyyyrat",
             data : result_data,
             backgroundColor: [
               'rgba(255, 99, 132, 0.2)',
               'rgba(54, 162, 235, 0.2)',
              
               
             ],
             borderColor: [
               'rgba(255, 99, 132, 1)',
               'rgba(54, 162, 235, 1)',
               
             ],
             borderWidth: 1
           }
         ]
       }) 
       

     })
   }).catch(() => {
     console.log("Not Working!")
   })
//  })

  return (
    <>
      <h5 style={{ margin: '10 0', padding: 20, lineHeight: 2 }}>
        Ndarja e tregut - të hyrat në 3 mujorin e fundit
      </h5>

      <div style={{ color: 'blue', lineHeight: 10, padding: 20, margin: '0 auto' }}>
        <Pie data={data} />
        {/* <Pie data={data1}/> */}
      </div>
    </>
  );
}

import { FC, ReactElement, useState } from 'react';
import { TeHyrat } from './TeHyrat';
import { ISPProviders } from './ISPProviders';
import { ISPGraph } from './ISPGraph';
import { ChooseComparisonType } from './ChooseComparisonType';
import { ChooseTimeline } from './ChooseTimeline';
import { ChooseGraph } from './ChooseGraph';
import { ChooseTimePieChart } from './ChooseTimePieChart';
import { useSearchParams } from 'react-router-dom';

const ISP: FC = (): ReactElement => {
  const [providers, setProviders] = useState<string[]>(["Totali"]);
  const [comparisons,setComparisons] = useState<string>("");
  const [timeFrom, setTimeFrom] = useState<string>("TM1 2017")
  const [timeTo, setTimeTo] = useState<string>("TM2 2022")
  const [graph, setGraph] = useState<string>("lakore")
  const [pieTime, setPieTime] = useState<string>("TM2 2022")

  
  const setSelectedProviders = (value : string []) : String[] => {
      console.log(value)
      setProviders([...value]);
      return ["abc"]
    }

  const setSelectedComparison = (value : string) => {
    setComparisons(value)
    console.log("Comparisons : ",value);
  }

  const handleSetTimeFrom = (value : string) => {
    setTimeFrom(value);    
    console.log("Time From : ",value);
  }
  
  const handleSetTimeTo = (value : string) => {
    setTimeTo(value);
    console.log("Time To : ",value);
  } 
  
  const setGraphType = (value : string) => {
    setGraph(value);
    console.log("Graph Type : ",value);
  }

  const handlePieTimeChange = (value : string) => {
    setPieTime(value);
    console.log("Pie time : ",value);
  }
  return(
    <div style={{marginTop:"30px"}}>
    <h3 style={{marginLeft:"20px"}}>Internet Service Provider</h3>
      <ChooseComparisonType parentCallback={setSelectedComparison}/>
      {(comparisons.toLowerCase() === 'individual_users' 
                || comparisons.toLowerCase() === 'business_users'
                    || comparisons.toLowerCase() === 'total_users') ?                      
      (graph.trim().toLowerCase() == "lakore" ? 
      <>
        <ChooseGraph parentCallback={setGraphType}/> 
        <ISPProviders parentCallback={setSelectedProviders} />
        <ChooseTimeline parentCallback1={handleSetTimeFrom} parentCallback2={handleSetTimeTo}/>
        <ISPGraph pietime={pieTime+''} graph={'lakore'} comparison={comparisons+''} providers={[...providers]} timeFrom={timeFrom} timeTo={timeTo}/>
      </>
       :
      <>
        <ChooseGraph parentCallback={setGraphType}/> 
        <ChooseTimePieChart parentCallback={handlePieTimeChange}/>
        <ISPGraph pietime={pieTime+''} graph={graph+''} comparison={comparisons+''} providers={[...providers]} timeFrom={timeFrom} timeTo={timeTo}/>
      </>
      )    
      // <ChooseGraph parentCallback={setGraphType}/>  
         :
      <>
        <ISPProviders parentCallback={setSelectedProviders} />
        <ChooseTimeline parentCallback1={handleSetTimeFrom} parentCallback2={handleSetTimeTo}/>
        <ISPGraph pietime={pieTime+''} graph={'lakore'} comparison={comparisons+''} providers={[...providers]} timeFrom={timeFrom} timeTo={timeTo}/>
      </>
      }  
      
    </div>
  )
  };

export default ISP;
import { FC, ReactElement, useState } from 'react';
import { TeHyrat } from './TeHyrat';
import { ISPProviders } from './ISPProviders';
import { ISPGraph } from './ISPGraph';
import { ChooseComparisonType } from './ChooseComparisonType';
import { ChooseTimeline } from './ChooseTimeline';
// import ISPGraph from './ISPGraph';
// import ISPProviders from './ISPProviders';
import { useSearchParams } from 'react-router-dom';
// import { Telefonia } from './Telefonia';
// import { NdarjaPerdoruesve } from './NdarjaPerdoruesve';
// import { ShperndarjaPerdoruesve } from './ShperndarjaPerdoruesve';
// import { NdarjaTregut } from './NdarjaTregut';



const ISP: FC = (): ReactElement => {
  const [providers, setProviders] = useState<string[]>([]);
  const [comparisons,setComparisons] = useState<string>("");
  const [timeFrom, setTimeFrom] = useState<string>("TM1 2017")
  const [timeTo, setTimeTo] = useState<string>("TM2 2022")

  
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
  

  return(
    <div style={{marginTop:"30px"}}>
      <h1>ISP</h1>
      <ChooseComparisonType parentCallback={setSelectedComparison}/>
      <ISPProviders parentCallback={setSelectedProviders} />
      <ChooseTimeline parentCallback1={handleSetTimeFrom} parentCallback2={handleSetTimeTo}/>
      <ISPGraph comparison={comparisons+''} providers={[...providers]} timeFrom={timeFrom} timeTo={timeTo}/>
    </div>
  )
  };

export default ISP;
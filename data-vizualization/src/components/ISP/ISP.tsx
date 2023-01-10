import { FC, ReactElement, useState } from 'react';
import { TeHyrat } from './TeHyrat';
import { ISPProviders } from './ISPProviders';
import { ISPGraph } from './ISPGraph';
import { ChooseComparisonType } from './ChooseComparisonType';
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
  
  const setSelectedProviders = (value : string []) : String[] => {
      console.log(value)
      setProviders([...value]);
      return ["abc"]
    }

  const setSelectedComparison = (value : string) => {
    setComparisons(value)
    console.log("Comparisons : ",value);
  }  
  

  return(
    <>
    <h1>ISP</h1>
    <ISPProviders parentCallback={setSelectedProviders} />
    <ChooseComparisonType parentCallback={setSelectedComparison}/>
    {/* <TeHyrat providers={providers}/> */}
    <ISPGraph comparison={comparisons+''} providers={[...providers]}/>

    {/* <Telefonia />
    <NdarjaPerdoruesve />
    <NdarjaTregut />
    <ShperndarjaPerdoruesve /> */}
  </>
  )
  };

export default ISP;
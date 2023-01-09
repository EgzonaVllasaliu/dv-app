import { FC, ReactElement, useState } from 'react';
import { TeHyrat } from './TeHyrat';
import { ISPProviders } from './ISPProviders';
import { ISPGraph } from './ISPGraph';
// import ISPGraph from './ISPGraph';
// import ISPProviders from './ISPProviders';
import { useSearchParams } from 'react-router-dom';
// import { Telefonia } from './Telefonia';
// import { NdarjaPerdoruesve } from './NdarjaPerdoruesve';
// import { ShperndarjaPerdoruesve } from './ShperndarjaPerdoruesve';
// import { NdarjaTregut } from './NdarjaTregut';



const ISP: FC = (): ReactElement => {
  const [proiders, setProviders] = useState<string[]>([]);
  return(
    <>
    <h1>ISP</h1>
    <ISPProviders  />
    <TeHyrat/>
    {/* <ISPGraph /> */}

    {/* <Telefonia />
    <NdarjaPerdoruesve />
    <NdarjaTregut />
    <ShperndarjaPerdoruesve /> */}
  </>
  )
  };

export default ISP;
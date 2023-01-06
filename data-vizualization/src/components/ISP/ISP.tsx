import { FC, ReactElement } from 'react';
import { TeHyrat } from './TeHyrat';
// import { Telefonia } from './Telefonia';
// import { NdarjaPerdoruesve } from './NdarjaPerdoruesve';
// import { ShperndarjaPerdoruesve } from './ShperndarjaPerdoruesve';
// import { NdarjaTregut } from './NdarjaTregut';

const ISP: FC = (): ReactElement => (
  <>
    <h1>ISP</h1>
    <TeHyrat/>
    {/* <Telefonia />
    <NdarjaPerdoruesve />
    <NdarjaTregut />
    <ShperndarjaPerdoruesve /> */}
  </>
);

export default ISP;
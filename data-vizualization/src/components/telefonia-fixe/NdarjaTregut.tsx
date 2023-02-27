import { FC, ReactElement } from 'react';
import { NdarjaTregutHyrat } from './NdarjaTregutHyrat';
import { NdarjaTregutPerdoruesve } from './NdarjaTregutPerdoruesit';

const NdarjaTregut: FC = (): ReactElement => (
  <>
    <h3 style={{marginLeft:"20px", marginTop: "30px"}}>Telefonia Fikse</h3>
    <NdarjaTregutPerdoruesve />
    <NdarjaTregutHyrat />
  </>
);

export default NdarjaTregut;

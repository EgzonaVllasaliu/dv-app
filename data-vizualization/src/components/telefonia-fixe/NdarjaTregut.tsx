import { FC, ReactElement } from 'react';
import { NdarjaTregutHyrat } from './NdarjaTregutHyrat';
import { NdarjaTregutPerdoruesve } from './NdarjaTregutPerdoruesit';

const NdarjaTregut: FC = (): ReactElement => (
  <>
    <NdarjaTregutPerdoruesve />
    <NdarjaTregutHyrat />
  </>
);

export default NdarjaTregut;

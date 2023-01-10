import { FC, ReactElement } from 'react';
import { Telefonia } from './Telefonia';
import { NdarjaPerdoruesve } from './NdarjaPerdoruesve';
import { ShperndarjaPerdoruesve } from './ShperndarjaPerdoruesve';

const TelefoniaFixe: FC = (): ReactElement => (
  <>
    <Telefonia />
    <NdarjaPerdoruesve />
    <ShperndarjaPerdoruesve />
  </>
);

export default TelefoniaFixe;

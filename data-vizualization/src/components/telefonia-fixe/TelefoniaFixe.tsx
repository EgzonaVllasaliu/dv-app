import { FC, ReactElement } from 'react';
import { Telefonia } from './Telefonia';
import { NdarjaPerdoruesve } from './NdarjaPerdoruesve';
import { ShperndarjaPerdoruesve } from './ShperndarjaPerdoruesve';
import { NdarjaTregut } from './NdarjaTregut';

const TelefoniaFixe: FC = (): ReactElement => (
  <>
    <Telefonia />
    <NdarjaPerdoruesve />
    <NdarjaTregut />
    <ShperndarjaPerdoruesve />
  </>
);

export default TelefoniaFixe;

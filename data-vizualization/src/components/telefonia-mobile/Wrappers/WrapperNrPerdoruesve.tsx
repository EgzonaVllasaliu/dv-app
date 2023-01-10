import { FC, ReactElement } from 'react';
import { NumriPerdoruesve } from '../NumriPerdoruesve/NumriPerdoruesveMeKontrate';
import { NumriPerdoruesveParapagim } from '../NumriPerdoruesve/NumriPerdoruesveMeParapagim';
import { NumriPerdoruesveTotal } from '../NumriPerdoruesve/NumriPerdoruesveTotal';
import { Toggle } from '../NumriPerdoruesve/Toggle';

const NrPerdoruesve: FC = (): ReactElement => (
  <>
    <Toggle />
    <NumriPerdoruesve />
    <NumriPerdoruesveParapagim />
    <NumriPerdoruesveTotal />
  </>
);

export default NrPerdoruesve;

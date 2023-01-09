import { FC, ReactElement } from 'react';
import { NumriPerdoruesve } from '../NumriPerdoruesveMeKontrate';
import { NumriPerdoruesveParapagim } from '../NumriPerdoruesveMeParapagim';

const NrPerdoruesve: FC = (): ReactElement => (
  <>
    <NumriPerdoruesve />
    <NumriPerdoruesveParapagim />
  </>
);

export default NrPerdoruesve;

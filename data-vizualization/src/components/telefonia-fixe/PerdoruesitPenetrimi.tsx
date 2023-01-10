import { FC, ReactElement } from 'react';
import { Penetrimi } from './Penetrimi';
import { Perdoruesit } from './Perdoruesit';
import { TeHyrat } from './TeHyrat';

const PerdoruesitPenetrimi: FC = (): ReactElement => (
  <>
    <Perdoruesit />
    <Penetrimi />
    <TeHyrat />
  </>
);

export default PerdoruesitPenetrimi;

import { FC, ReactElement } from 'react';
import { Penetrimi } from './Penetrimi';
import { Perdoruesit } from './Perdoruesit';
import { TeHyrat } from './TeHyrat';

const PerdoruesitPenetrimi: FC = (): ReactElement => (
  <>
    <h3 style={{marginLeft:"20px", marginTop: "30px"}}>Telefonia Fikse</h3>
    <Perdoruesit />
    <Penetrimi />
    <TeHyrat />
  </>
);

export default PerdoruesitPenetrimi;

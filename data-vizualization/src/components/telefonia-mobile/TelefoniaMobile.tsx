import { FC, ReactElement } from 'react';
import { NdarjaTregutMobile } from './NdarjaTregutMobile';
import { TeHyratEPergjithshme } from './TeHyratEPergjithshme';
import { Trafiku } from './TrafikuMno';
import { NumriPerdoruesve } from './NumriPerdoruesve';

const TelefoniaMobile: FC = (): ReactElement => (
  <>
    <NdarjaTregutMobile />
    <Trafiku />
    <TeHyratEPergjithshme />
    <NumriPerdoruesve />
  </>
);

export default TelefoniaMobile;

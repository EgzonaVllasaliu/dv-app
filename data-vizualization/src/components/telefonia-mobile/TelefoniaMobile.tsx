import { FC, ReactElement } from 'react';
import { NdarjaTregutMobile } from './NdarjaTregutMobile';
import { TeHyratEPergjithshme1216, TeHyratEPergjithshme1722 } from './TeHyratEPergjithshme';
import { TrafikuBrendaRrjetit, TrafikuNderkombetar, TrafikuTjeter, TrafikuFiks, TrafikuTerminuar } from './Trafiku';
import { NumriPerdoruesve } from './NumriPerdoruesveMeKontrate';
import { NumriPerdoruesveParapagim } from './NumriPerdoruesveMeParapagim';
import { MegaBytes2g, MegaBytes3g, MegaBytesLte } from './MegaBytes';
import { MegaBytesTotal } from './MegaBytesTotal';
import { IncomingTraffic, OutgoingTraffic } from './TrafikuNeLevizje'

const TelefoniaMobile: FC = (): ReactElement => (
  <>
    <NdarjaTregutMobile />
    <TeHyratEPergjithshme1216 />
    <TeHyratEPergjithshme1722 />
    <NumriPerdoruesve />
    <NumriPerdoruesveParapagim />
    <MegaBytes2g />
    <MegaBytes3g />
    <MegaBytesLte />
    <MegaBytesTotal/>
    <TrafikuBrendaRrjetit />
    <TrafikuNderkombetar />
    <TrafikuTjeter />
    <TrafikuFiks />
    <TrafikuTerminuar />
    <IncomingTraffic />
    <OutgoingTraffic />
  </>
);

export default TelefoniaMobile;

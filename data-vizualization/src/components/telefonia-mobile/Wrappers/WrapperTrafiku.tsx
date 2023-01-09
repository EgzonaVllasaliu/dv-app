import { FC, ReactElement } from 'react';
import { TrafikuBrendaRrjetit, TrafikuNderkombetar, TrafikuTjeter, TrafikuFiks, TrafikuTerminuar } from '../Trafiku/Trafiku';
import { IncomingTraffic, OutgoingTraffic } from '../Trafiku/TrafikuNeLevizje'
import { Toggle } from '../Trafiku/Toggle';

const Trafiku: FC = (): ReactElement => (
  <>
    <Toggle />
    <IncomingTraffic />
    <OutgoingTraffic />
    <TrafikuBrendaRrjetit />
    <TrafikuNderkombetar />
    <TrafikuTjeter />
    <TrafikuFiks />
    <TrafikuTerminuar />
  </>
);

export default Trafiku;

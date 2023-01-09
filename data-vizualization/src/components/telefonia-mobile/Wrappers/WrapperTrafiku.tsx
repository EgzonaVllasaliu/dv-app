import { FC, ReactElement } from 'react';
import { TrafikuBrendaRrjetit, TrafikuNderkombetar, TrafikuTjeter, TrafikuFiks, TrafikuTerminuar } from '../Trafiku';
import { IncomingTraffic, OutgoingTraffic } from '../TrafikuNeLevizje'

const Trafiku: FC = (): ReactElement => (
  <>
    <TrafikuBrendaRrjetit />
    <TrafikuNderkombetar />
    <TrafikuTjeter />
    <TrafikuFiks />
    <TrafikuTerminuar />
    <IncomingTraffic />
    <OutgoingTraffic />
  </>
);

export default Trafiku;

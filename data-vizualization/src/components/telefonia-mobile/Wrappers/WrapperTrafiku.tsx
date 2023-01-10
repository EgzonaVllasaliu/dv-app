import { FC, ReactElement } from 'react';
import { TrafikuBrendaRrjetit, TrafikuNderkombetar, TrafikuTjeter, TrafikuFiks, TrafikuTerminuar } from '../Trafiku/Trafiku';
import { IncomingTraffic, OutgoingTraffic } from '../Trafiku/TrafikuNeLevizje'
import { Toggle } from '../Trafiku/Toggle';
import { Outlet, useOutlet } from 'react-router-dom';

const Trafiku = () => {
  const outlet = useOutlet();

  return <>
    <Toggle/>

    {outlet ? <Outlet/> : <>
      <IncomingTraffic />
      <OutgoingTraffic />
      <TrafikuBrendaRrjetit />
      <TrafikuNderkombetar />
      <TrafikuTjeter />
      <TrafikuFiks />
      <TrafikuTerminuar />
    </>}
  </>
};

export default Trafiku;

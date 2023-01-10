import { Outlet, useOutlet } from 'react-router-dom';
import { MegaBytes2g, MegaBytes3g, MegaBytesLte } from '../MegaBytes/MegaBytes';
import { MegaBytesTotal } from '../MegaBytes/MegaBytesTotal';
import { Toggle } from '../MegaBytes/Toggle';

const MegaBytes = () => {
  const outlet = useOutlet();

  return <>
    <Toggle/>

    {outlet ? <Outlet/> : <>
      <MegaBytesTotal/>
      <MegaBytes2g />
      <MegaBytes3g />
      <MegaBytesLte />
    </>}
  </>
};

export default MegaBytes;

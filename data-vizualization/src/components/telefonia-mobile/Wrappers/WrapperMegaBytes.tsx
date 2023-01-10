import { FC, ReactElement } from 'react';
import { MegaBytes2g, MegaBytes3g, MegaBytesLte } from '../MegaBytes/MegaBytes';
import { MegaBytesTotal } from '../MegaBytes/MegaBytesTotal';
import { Toggle } from '../MegaBytes/Toggle';

const MegaBytes: FC = (): ReactElement => (
  <>
    <Toggle/>
    <MegaBytesTotal/>
    <MegaBytes2g />
    <MegaBytes3g />
    <MegaBytesLte />
  </>
);

export default MegaBytes;

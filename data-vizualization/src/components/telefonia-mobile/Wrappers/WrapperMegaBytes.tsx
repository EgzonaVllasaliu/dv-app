import { FC, ReactElement } from 'react';
import { MegaBytes2g, MegaBytes3g, MegaBytesLte } from '../MegaBytes';
import { MegaBytesTotal } from '../MegaBytesTotal';

const MegaBytes: FC = (): ReactElement => (
  <>
    <MegaBytesTotal/>
    <MegaBytes2g />
    <MegaBytes3g />
    <MegaBytesLte />
  </>
);

export default MegaBytes;

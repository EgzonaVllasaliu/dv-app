import { FC, ReactElement } from 'react';
import { NdarjaTregutMobile } from '../TeHyrat/NdarjaTregutMobile';
import { TeHyratEPergjithshme1216, TeHyratEPergjithshme1722 } from '../TeHyrat/TeHyratEPergjithshme';
import { Toggle } from '../TeHyrat/Toggle';
import { MDBContainer } from 'mdb-react-ui-kit';

const TeHyrat: FC = (): ReactElement => (
  <>
  <Toggle/>
  
  <MDBContainer>
    <NdarjaTregutMobile />
    <TeHyratEPergjithshme1216 />
    <TeHyratEPergjithshme1722 />
  </MDBContainer>
  </>
);

export default TeHyrat;

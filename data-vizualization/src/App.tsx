import { ReactElement } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import TelefoniaFixe from './components/telefonia-fixe/TelefoniaFixe';
import Navbar from './components/Navbar';
import { MDBContainer } from 'mdb-react-ui-kit';
import TelefoniaMobile from './components/telefonia-mobile/TelefoniaMobile';
import ISP from './components/ISP/ISP';

export const App = (): ReactElement => (
  <>
    <Navbar />

    <MDBContainer>
      <Routes>
        <Route path='/' element={<TelefoniaFixe />} />
        <Route
          path='/telefonia-fixe'
          element={<TelefoniaFixe />}
        />
        <Route
          path='/telefonia-mobile'
          element={<TelefoniaMobile />}
        />
         <Route
          path='/isp'
          element={<ISP />}
        />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </MDBContainer>
  </>
);

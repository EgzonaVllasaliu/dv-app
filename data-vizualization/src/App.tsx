import { ReactElement } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import TelefoniaFixe from './components/telefonia-fixe/TelefoniaFixe';
import Navbar from './components/Navbar';
import { MDBContainer } from 'mdb-react-ui-kit';
import TelefoniaMobile from './components/telefonia-mobile/TelefoniaMobile';
import MegaBytes from './components/telefonia-mobile/Wrappers/WrapperMegaBytes';
import NrPerdoruesve from './components/telefonia-mobile/Wrappers/WrapperNrPerdoruesve';
import TeHyrat from './components/telefonia-mobile/Wrappers/WrapperTeHyrat';
import Trafiku from './components/telefonia-mobile/Wrappers/WrapperTrafiku';
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
          path='/megabytes'
          element={<MegaBytes />}
        />
        <Route
          path='/nr-perdoruesve'
          element={<NrPerdoruesve />}
        />
        <Route
          path='/te-hyrat'
          element={<TeHyrat />}
        />
        <Route
          path='/trafiku'
          element={<Trafiku />}
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

import { ReactElement } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import { MDBContainer } from 'mdb-react-ui-kit';
import TelefoniaFixe from './components/telefonia-fixe/TelefoniaFixe';
import ISP from './components/ISP/ISP';
import MegaBytes from './components/telefonia-mobile/Wrappers/WrapperMegaBytes';
import NrPerdoruesve from './components/telefonia-mobile/Wrappers/WrapperNrPerdoruesve';
import TeHyrat from './components/telefonia-mobile/Wrappers/WrapperTeHyrat';
import Trafiku from './components/telefonia-mobile/Wrappers/WrapperTrafiku';
import { NumriPerdoruesve } from './components/telefonia-mobile/NumriPerdoruesve/NumriPerdoruesveMeKontrate';
import { NumriPerdoruesveParapagim } from './components/telefonia-mobile/NumriPerdoruesve/NumriPerdoruesveMeParapagim';
import { NumriPerdoruesveTotal } from './components/telefonia-mobile/NumriPerdoruesve/NumriPerdoruesveTotal';
import { TeHyratEPergjithshme1216, TeHyratEPergjithshme1722 } from './components/telefonia-mobile/TeHyrat/TeHyratEPergjithshme';
import { NdarjaTregutMobile } from './components/telefonia-mobile/TeHyrat/NdarjaTregutMobile';
import { TrafikuBrendaRrjetit, TrafikuTjeter, TrafikuTerminuar, TrafikuNderkombetar, TrafikuFiks } from './components/telefonia-mobile/Trafiku/Trafiku';
import { MegaBytes2g, MegaBytes3g, MegaBytesLte } from './components/telefonia-mobile/MegaBytes/MegaBytes';
import { MegaBytesTotal } from './components/telefonia-mobile/MegaBytes/MegaBytesTotal';

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
          path='/isp'
          element={<ISP />}
        />
        
        // #region Telefonia Mobile
        <Route
          path='/telefonia-mobile/nr-perdoruesve'
          element={<NrPerdoruesve />}
        />
        <Route
          path='/telefonia-mobile/nr-perdoruesve/total'
          element={<NumriPerdoruesveTotal />}
        />
        <Route
          path='/telefonia-mobile/nr-perdoruesve/kontrate'
          element={<NumriPerdoruesve />}
        />
        <Route
          path='/telefonia-mobile/nr-perdoruesve/parapagim'
          element={<NumriPerdoruesveParapagim />}
        />
        <Route
          path='/telefonia-mobile/nr-perdoruesve/kontrate'
          element={<NrPerdoruesve />}
        />
        <Route
          path='/telefonia-mobile/megabytes'
          element={<MegaBytes />}
        />
        <Route
          path='/telefonia-mobile/megabytes/total'
          element={<MegaBytesTotal />}
        />
        <Route
          path='/telefonia-mobile/megabytes/2g'
          element={<MegaBytes2g />}
        />
        <Route
          path='/telefonia-mobile/megabytes/3g'
          element={<MegaBytes3g />}
        />
        <Route
          path='/telefonia-mobile/megabytes/lte'
          element={<MegaBytesLte />}
        />
        <Route
          path='/telefonia-mobile/te-hyrat'
          element={<TeHyrat />}
        />
        <Route
          path='/telefonia-mobile/te-hyrat/12-16'
          element={<TeHyratEPergjithshme1216 />}
        />
        <Route
          path='/telefonia-mobile/te-hyrat/17-22'
          element={<TeHyratEPergjithshme1722 />}
        />
        <Route
          path='/telefonia-mobile/te-hyrat/ndarja-tregut'
          element={<NdarjaTregutMobile />}
        />
        <Route
          path='/telefonia-mobile/trafiku'
          element={<Trafiku />}
        />
        <Route
          path='/telefonia-mobile/trafiku/brenda-rrjetit'
          element={<TrafikuBrendaRrjetit />}
        />
        <Route
          path='/telefonia-mobile/trafiku/rrjeti-tjeter'
          element={<TrafikuTjeter />}
        />
        <Route
          path='/telefonia-mobile/trafiku/rrjeti-nderkombetar'
          element={<TrafikuNderkombetar />}
        />
        <Route
          path='/telefonia-mobile/trafiku/rrjeti-fiks'
          element={<TrafikuFiks />}
        />
        <Route
          path='/telefonia-mobile/trafiku/rrjeti-terminuar'
          element={<TrafikuTerminuar />}
        />
        //#endregion

        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </MDBContainer>

    <Footer />
  </>
);

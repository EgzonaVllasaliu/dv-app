import { ReactElement } from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import { MDBContainer } from 'mdb-react-ui-kit';
import TelefoniaFixe from './components/telefonia-fixe/TelefoniaFixe';
import ISP from './components/ISP/ISP';
import MegaBytes from './components/telefonia-mobile/Wrappers/WrapperMegaBytes';
import NrPerdoruesve from './components/telefonia-mobile/Wrappers/WrapperNrPerdoruesve';
import TeHyrat from './components/telefonia-mobile/Wrappers/WrapperTeHyrat';
import Trafiku from './components/telefonia-mobile/Wrappers/WrapperTrafiku';
import { NumriPerdoruesveKontrate } from './components/telefonia-mobile/NumriPerdoruesve/NumriPerdoruesveMeKontrate';
import { NumriPerdoruesveParapagim } from './components/telefonia-mobile/NumriPerdoruesve/NumriPerdoruesveMeParapagim';
import { NumriPerdoruesveTotal } from './components/telefonia-mobile/NumriPerdoruesve/NumriPerdoruesveTotal';
import { TeHyratEPergjithshme1216, TeHyratEPergjithshme1722 } from './components/telefonia-mobile/TeHyrat/TeHyratEPergjithshme';
import { NdarjaTregutMobile } from './components/telefonia-mobile/TeHyrat/NdarjaTregutMobile';
import { TrafikuBrendaRrjetit, TrafikuTjeter, TrafikuTerminuar, TrafikuNderkombetar, TrafikuFiks } from './components/telefonia-mobile/Trafiku/Trafiku';
import { MegaBytes2g, MegaBytes3g, MegaBytesLte } from './components/telefonia-mobile/MegaBytes/MegaBytes';
import { MegaBytesTotal } from './components/telefonia-mobile/MegaBytes/MegaBytesTotal';
import { IncomingTraffic, OutgoingTraffic } from './components/telefonia-mobile/Trafiku/TrafikuNeLevizje';

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
          >
            <Route
              path='total'
              element={<NumriPerdoruesveTotal />}
            />
            <Route
              path='kontrate'
              element={<NumriPerdoruesveKontrate />}
            />
            <Route
              path='parapagim'
              element={<NumriPerdoruesveParapagim />}
            />
        </Route>
        <Route
          path='/telefonia-mobile/megabytes'
          element={<MegaBytes />}
        >
          <Route
            path='total'
            element={<MegaBytesTotal />}
          />
          <Route
            path='2g'
            element={<MegaBytes2g />}
          />
          <Route
            path='3g'
            element={<MegaBytes3g />}
          />
          <Route
            path='lte'
            element={<MegaBytesLte />}
          />
        </Route>
        <Route
          path='/telefonia-mobile/te-hyrat'
          element={<TeHyrat />}
        >
          <Route
            path='ndarja-tregut'
            element={<NdarjaTregutMobile />}
          />
          <Route
            path='12-16'
            element={<TeHyratEPergjithshme1216 />}
          />
          <Route
            path='17-22'
            element={<TeHyratEPergjithshme1722 />}
          />
        </Route>
        <Route
          path='/telefonia-mobile/trafiku'
          element={<Trafiku />}
        >
          <Route
          path='brenda-rrjetit'
          element={<TrafikuBrendaRrjetit />}
          />
          <Route
            path='rrjeti-tjeter'
            element={<TrafikuTjeter />}
          />
          <Route
            path='rrjeti-nderkombetar'
            element={<TrafikuNderkombetar />}
          />
          <Route
            path='rrjeti-fiks'
            element={<TrafikuFiks />}
          />
          <Route
            path='rrjeti-terminuar'
            element={<TrafikuTerminuar />}
          />
          <Route
            path='hyrje'
            element={<IncomingTraffic />}
          />
          <Route
            path='dalje'
            element={<OutgoingTraffic />}
          />
        </Route>
        
        //#endregion

        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </MDBContainer>

    <Footer />
  </>
);

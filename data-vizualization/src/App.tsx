import { ReactElement } from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
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
import {
  TeHyratEPergjithshme1216,
  TeHyratEPergjithshme1722,
} from './components/telefonia-mobile/TeHyrat/TeHyratEPergjithshme';
import { NdarjaTregutMobile } from './components/telefonia-mobile/TeHyrat/NdarjaTregutMobile';
import {
  TrafikuBrendaRrjetit,
  TrafikuTjeter,
  TrafikuTerminuar,
  TrafikuNderkombetar,
  TrafikuFiks,
} from './components/telefonia-mobile/Trafiku/Trafiku';
import {
  MegaBytes2g,
  MegaBytes3g,
  MegaBytesLte,
} from './components/telefonia-mobile/MegaBytes/MegaBytes';
import { MegaBytesTotal } from './components/telefonia-mobile/MegaBytes/MegaBytesTotal';
import {
  IncomingTraffic,
  OutgoingTraffic,
} from './components/telefonia-mobile/Trafiku/TrafikuNeLevizje';
import PerdoruesitPenetrimi from './components/telefonia-fixe/PerdoruesitPenetrimi';
import NdarjaTregut from './components/telefonia-fixe/NdarjaTregut';
import path from 'path';

export const App = (): ReactElement => (
  <>
    <Navbar />

    <MDBContainer>
      <Routes>
        <Route path="/" element={<PerdoruesitPenetrimi />} />
        <Route path="/telefonia-fixe" element={<TelefoniaFixe />} />
        <Route path="/perdoruesit" element={<PerdoruesitPenetrimi />} />
        <Route path="/ndarja-tregut-perdoruesve" element={<NdarjaTregut />} />
        <Route path="/isp" element={<ISP />} />
        // #region Telefonia Mobile
        <Route path="/telefonia-mobile/nr-perdoruesve" element={<NrPerdoruesve />}>
          <Route path="total/:koha" element={<NumriPerdoruesveTotal />} />
          <Route path="kontrate/:koha" element={<NumriPerdoruesveKontrate />} />
          <Route path="parapagim/:koha" element={<NumriPerdoruesveParapagim />} />
        </Route>
        <Route path="/telefonia-mobile/megabytes" element={<MegaBytes />}>
          <Route path="total/:koha" element={<MegaBytesTotal />} />
          <Route path="2g/:koha" element={<MegaBytes2g />} />
          <Route path="3g/:koha" element={<MegaBytes3g />} />
          <Route path="lte/:koha" element={<MegaBytesLte />} />
        </Route>
        <Route path="/telefonia-mobile/te-hyrat" element={<TeHyrat />}>
          <Route path="ndarja-tregut/:koha" element={<NdarjaTregutMobile />} />
          <Route path="12-16/:koha" element={<TeHyratEPergjithshme1216 />} />
          <Route path="17-22/:koha" element={<TeHyratEPergjithshme1722 />} />
        </Route>
        <Route path="/telefonia-mobile/trafiku" element={<Trafiku />}>
          <Route path="brenda-rrjetit/:koha" element={<TrafikuBrendaRrjetit />} />
          <Route path="rrjeti-tjeter/:koha" element={<TrafikuTjeter />} />
          <Route path="rrjeti-nderkombetar/:koha" element={<TrafikuNderkombetar />} />
          <Route path="rrjeti-fiks/:koha" element={<TrafikuFiks />} />
          <Route path="rrjeti-terminuar/:koha" element={<TrafikuTerminuar />} />
          <Route path="hyrje/:koha" element={<IncomingTraffic />} />
          <Route path="dalje/:koha" element={<OutgoingTraffic />} />
        </Route>
        //#endregion
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </MDBContainer>

    <Footer />
  </>
);

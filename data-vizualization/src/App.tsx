import { ReactElement } from 'react';
import './App.css';

// router
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import TelefoniaFixe from './components/TelefoniaFixe';
import { Telefonia } from './components/App';
import { NdarjaPerdoruesve } from './components/NdarjaPerdoruesve';
import { NdarjaTregut } from './components/NdarjaTregut';
import { ShperndarjaPerdoruesve } from './components/ShperndarjaPerdoruesve';

export const App = (): ReactElement => (
  <Router>
    <Routes>
      <Route path="/" element={<TelefoniaFixe />} />
      <Route
        path="/telefonia-fixe"
        element={
          <>
            <Telefonia />
            <NdarjaPerdoruesve />
            <NdarjaTregut />
            <ShperndarjaPerdoruesve />
          </>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </Router>
);

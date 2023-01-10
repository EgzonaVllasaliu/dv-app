import { FC, ReactElement } from 'react';
import { Outlet, useOutlet } from 'react-router-dom';
import { NumriPerdoruesveKontrate } from '../NumriPerdoruesve/NumriPerdoruesveMeKontrate';
import { NumriPerdoruesveParapagim } from '../NumriPerdoruesve/NumriPerdoruesveMeParapagim';
import { NumriPerdoruesveTotal } from '../NumriPerdoruesve/NumriPerdoruesveTotal';
import { Toggle } from '../NumriPerdoruesve/Toggle';

const NrPerdoruesve = () => {
  const outlet = useOutlet();

  return <>
    <Toggle/>

    {outlet ? <Outlet/> : <>
      <NumriPerdoruesveKontrate />
      <NumriPerdoruesveParapagim />
      <NumriPerdoruesveTotal />
    </>}
  </>
};

export default NrPerdoruesve;

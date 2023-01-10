import { FC, ReactElement, useEffect, useState } from 'react';
import { Toggle } from '../TeHyrat/Toggle';
import { Outlet, useLocation, useOutlet } from 'react-router-dom';
import { NdarjaTregutMobile } from '../TeHyrat/NdarjaTregutMobile';
import { TeHyratEPergjithshme1216, TeHyratEPergjithshme1722 } from '../TeHyrat/TeHyratEPergjithshme';

const TeHyrat = () => {
  const outlet = useOutlet();

  return <>
    <Toggle/>

    {outlet ? <Outlet/> : <>
      <NdarjaTregutMobile />
      <TeHyratEPergjithshme1216 />
      <TeHyratEPergjithshme1722 />
    </>}
  </>
};

export default TeHyrat;

import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { FormControl, InputLabel } from '@mui/material';
import { FC } from 'react';
import { Link } from 'react-router-dom';

export const Toggle : FC = () => {
    return (
      <div style={{ display : "flex", alignItems : 'center', justifyContent : 'center', flexDirection : 'column', marginTop: 50}}>
        <div style={{width : "33%"}}>
            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Zgjedh të dhënat për vizualizim</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Zgjedh-te-dhenat-per-vizualizim"
            >
                <Link to='/telefonia-mobile/trafiku/brenda-rrjetit'><MenuItem>Trafiku brenda rrjetit</MenuItem></Link>
                <Link to='/telefonia-mobile/trafiku/rrjeti-tjeter'><MenuItem>Trafiku drejt rrjetit tjetër</MenuItem></Link>
                <Link to='/telefonia-mobile/trafiku/rrjeti-nderkombetar'><MenuItem>Trafiku drejt rrjetit ndërkombëtar</MenuItem></Link>
                <Link to='/telefonia-mobile/trafiku/rrjeti-fiks'><MenuItem>Trafiku drejt rrjetit fiks</MenuItem></Link>
                <Link to='/telefonia-mobile/trafiku/rrjeti-terminuar'><MenuItem>Trafiku i terminuar</MenuItem></Link>
            </Select>
            </FormControl>
        </div>
      </div>  
    );
}
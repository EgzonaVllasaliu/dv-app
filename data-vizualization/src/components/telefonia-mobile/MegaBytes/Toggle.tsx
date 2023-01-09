import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { FormControl, InputLabel } from '@mui/material';
import { FC, useState } from 'react';
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
                <Link to='/telefonia-mobile/megabytes/total'><MenuItem>Numri total i përdorimit të megabytes</MenuItem></Link>
                <Link to='/telefonia-mobile/megabytes/2g'><MenuItem>Totali i përdorimit të rrjetit 2g</MenuItem></Link>
                <Link to='/telefonia-mobile/megabytes/3g'><MenuItem>Totali i përdorimit të rrjetit 3g</MenuItem></Link>
                <Link to='/telefonia-mobile/megabytes/lte'><MenuItem>Totali i përdorimit të rrjetit 4g/LTE</MenuItem></Link>
            </Select>
            </FormControl>
        </div>
      </div>  
    );
}
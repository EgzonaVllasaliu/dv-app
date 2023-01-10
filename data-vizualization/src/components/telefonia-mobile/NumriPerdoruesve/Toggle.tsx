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
                <Link to='/telefonia-mobile/nr-perdoruesve/total'><MenuItem>Numri total i përdoruesve</MenuItem></Link>
                <Link to='/telefonia-mobile/nr-perdoruesve/kontrate'><MenuItem>Numri i përdoruesve me kontratë</MenuItem></Link>
                <Link to='/telefonia-mobile/nr-perdoruesve/parapagim'><MenuItem>Numri i përdoruesve me parapagim</MenuItem></Link>
            </Select>
            </FormControl>
        </div>
      </div>  
    );
}
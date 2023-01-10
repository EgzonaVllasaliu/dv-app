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
                <Link to='/telefonia-mobile/te-hyrat/ndarja-tregut'><MenuItem>Ndarja e tregut në bazë të të hyrave</MenuItem></Link>
                <Link to='/telefonia-mobile/te-hyrat/17-22'><MenuItem>Të hyrat 2017-2022</MenuItem></Link>
                <Link to='/telefonia-mobile/te-hyrat/12-16'><MenuItem>Të hyrat 2012-2016</MenuItem></Link>
            </Select>
            </FormControl>
        </div>
      </div>  
    );
}
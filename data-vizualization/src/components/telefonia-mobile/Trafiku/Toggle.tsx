import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { FormControl, InputLabel } from '@mui/material';
import { Link } from 'react-router-dom';

export const Toggle = () => {
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
                <Link to='/telefonia-mobile/trafiku/brenda-rrjetit'><MenuItem id={"1"}>Trafiku brenda rrjetit</MenuItem></Link>
                <Link to='/telefonia-mobile/trafiku/rrjeti-tjeter'><MenuItem id={"2"}>Trafiku drejt rrjetit tjetër</MenuItem></Link>
                <Link to='/telefonia-mobile/trafiku/rrjeti-nderkombetar'><MenuItem id={"3"}>Trafiku drejt rrjetit ndërkombëtar</MenuItem></Link>
                <Link to='/telefonia-mobile/trafiku/rrjeti-fiks'><MenuItem id={"4"}>Trafiku drejt rrjetit fiks</MenuItem></Link>
                <Link to='/telefonia-mobile/trafiku/rrjeti-terminuar'><MenuItem id={"5"}>Trafiku i terminuar</MenuItem></Link>
                <Link to='/telefonia-mobile/trafiku/hyrje'><MenuItem id={"6"}>Trafiku hyrës</MenuItem></Link>
                <Link to='/telefonia-mobile/trafiku/dalje'><MenuItem id={"7"}>Trafiku dalës</MenuItem></Link>
            </Select>
            </FormControl>
        </div>
      </div>  
    );
}
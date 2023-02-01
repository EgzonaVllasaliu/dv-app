import { Link } from 'react-router-dom';
import { MDBBtn } from 'mdb-react-ui-kit';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

export const Toggle = () => {
  const quarters = ['TM1', 'TM2', 'TM3', 'TM4'];
  const [years, setYears] = useState<string[]>([]);
  useEffect(() => {
    axios
      .get('http://localhost:5000/telefonia-mobile/api/mobile/get_years')
      .then((response) => {
        setYears(response.data);
      });
  }, []);

  return (
    <div>
      <div style={{ display: 'flex', marginTop: 30, marginLeft: 20 }}>
        <div>
          <h6 style={{ marginLeft: 10 }}>PREJ: </h6>
          <FormControl style={{ minWidth: 175, marginLeft: 0 }}>
            <InputLabel id="demo-simple-select-label">Zgjedh tre-mujorin</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Zgjedh-tre-mujorin"
            >
              {quarters.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl style={{ minWidth: 130, marginLeft: 18 }}>
            <InputLabel id="demo-simple-select-label">Zgjedh vitin</InputLabel>
            <Select labelId="demo-simple-select-label" id="demo-simple-select" label="Zgjedh-vitin">
              {years.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div>
          <h6 style={{ marginLeft: 25 }}>DERI: </h6>
          <FormControl style={{ minWidth: 175, marginLeft: 18 }}>
            <InputLabel id="demo-simple-select-label">Zgjedh tre-mujorin</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Zgjedh-tre-mujorin"
            >
              {quarters.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl style={{ minWidth: 130, marginLeft: 18 }}>
            <InputLabel id="demo-simple-select-label">Zgjedh vitin</InputLabel>
            <Select labelId="demo-simple-select-label" id="demo-simple-select" label="Zgjedh-vitin">
              {years.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginTop: 30, marginLeft: 12 }}>
        <Link to="/telefonia-mobile/te-hyrat/ndarja-tregut" id={'1'}>
          <MDBBtn outline className="mx-2">
            Ndarja e tregut
          </MDBBtn>
        </Link>
        <Link to="/telefonia-mobile/te-hyrat/17-22" id={'2'}>
          <MDBBtn outline className="mx-2">
            Të hyrat 2017-2022
          </MDBBtn>
        </Link>
        <Link to="/telefonia-mobile/te-hyrat/12-16" id={'3'}>
          <MDBBtn outline className="mx-2">
            Të hyrat 2012-2016
          </MDBBtn>
        </Link>
      </div>
    </div>
  );
};

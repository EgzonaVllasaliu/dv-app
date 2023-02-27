import { Link } from 'react-router-dom';
import { MDBBtn } from 'mdb-react-ui-kit';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

export const Toggle = () => {
  const quarters = ['TM1', 'TM2', 'TM3', 'TM4'];
  const [years, setYears] = useState<string[]>([]);
  const [fromQuarter, setFromQuarter]: any = useState('');
  const [toQuarter, setToQuarter]: any = useState('');
  const [fromYear, setFromYear]: any = useState('');
  const [toYear, setToYear]: any = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:5000/telefonia-mobile/api/mobile/get_years')
      .then((response) => {
        setYears(response.data);
      });
  }, []);

  var handleChangeFromQuarter = (value : string) => {
    setFromQuarter(value);
  }

  var handleChangeToQuarter = (value : string) => {
    setToQuarter(value);
  }

  var handleChangeFromYear = (value : string) => {
    setFromYear(value);
  }

  var handleChangeToYear = (value : string) => {
    setToYear(value);
  }

  var goToLink12 = () => {
    if (typeof window !== 'undefined') {
         window.location.href = `/telefonia-mobile/te-hyrat/12-16/${fromQuarter}-${fromYear};${toQuarter}-${toYear}`;
    }
  }

  var goToLink17 = () => {
    if (typeof window !== 'undefined') {
         window.location.href = `/telefonia-mobile/te-hyrat/17-22/${fromQuarter}-${fromYear};${toQuarter}-${toYear}`;
    }
  }

  var goToLinkNdarja = () => {
    if (typeof window !== 'undefined') {
         window.location.href = `/telefonia-mobile/te-hyrat/ndarja-tregut/${fromQuarter}-${fromYear};${toQuarter}-${toYear}`;
    }
  }

  return (
    <div style={{marginTop:"30px"}}>
      <h3 style={{marginLeft:"20px"}}>Telefonia Mobile</h3>
      <div style={{ display: 'flex', alignItems: 'center', marginTop: 30, marginLeft: 12 }}>
        <Link to={`/telefonia-mobile/te-hyrat/ndarja-tregut/${fromQuarter}-${fromYear};${toQuarter}-${toYear}`} id={'1'} onClick={goToLinkNdarja}>
          <MDBBtn outline className="mx-2 p-2" style={{fontSize: '14px'}}>
            Ndarja e tregut
          </MDBBtn>
        </Link>
        <Link to={`/telefonia-mobile/te-hyrat/17-22/${fromQuarter}-${fromYear};${toQuarter}-${toYear}`} id={'2'} onClick={goToLink17}>
          <MDBBtn outline className="mx-2 p-2" style={{fontSize: '14px'}}>
            Të hyrat 2017-2022
          </MDBBtn>
        </Link>
        <Link to={`/telefonia-mobile/te-hyrat/12-16/${fromQuarter}-${fromYear};${toQuarter}-${toYear}`} id={'3'} onClick={goToLink12}>
          <MDBBtn outline className="mx-2 p-2" style={{fontSize: '14px'}}>
            Të hyrat 2012-2016
          </MDBBtn>
        </Link>
      </div>
      
      <div style={{ display: 'flex', marginTop: 30, marginLeft: 20 }}>
        <div>
          <h6 style={{ marginLeft: 10 }}>PREJ: </h6>
          <FormControl style={{ minWidth: 175, marginLeft: 0, marginTop: 8 }}>
            <InputLabel id="demo-simple-select-label">Zgjedh tre-mujorin</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Zgjedh-tre-mujorin"
            >
              {quarters.map((name) => (
                <MenuItem key={name} value={name}
                onClick={() => handleChangeFromQuarter(name)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl style={{ minWidth: 130, marginLeft: 18, marginTop: 8 }}>
            <InputLabel id="demo-simple-select-label">Zgjedh vitin</InputLabel>
            <Select labelId="demo-simple-select-label" id="demo-simple-select" label="Zgjedh-vitin">
              {years.map((name) => (
                <MenuItem key={name} value={name}
                onClick={() => handleChangeFromYear(name)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div>
          <h6 style={{ marginLeft: 25 }}>DERI: </h6>
          <FormControl style={{ minWidth: 175, marginLeft: 18, marginTop: 8}}>
            <InputLabel id="demo-simple-select-label">Zgjedh tre-mujorin</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Zgjedh-tre-mujorin"
            >
              {quarters.map((name) => (
                <MenuItem key={name} value={name}
                onClick={() => handleChangeToQuarter(name)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl style={{ minWidth: 130, marginLeft: 18, marginTop: 8 }}>
            <InputLabel id="demo-simple-select-label">Zgjedh vitin</InputLabel>
            <Select labelId="demo-simple-select-label" id="demo-simple-select" label="Zgjedh-vitin">
              {years.map((name) => (
                <MenuItem key={name} value={name}
                onClick={() => handleChangeToYear(name)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  );
};

import { Link, useNavigate } from 'react-router-dom';
import { MDBBtn } from 'mdb-react-ui-kit';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

export const Toggle = () => {
  const quarters = ['TM1', 'TM2', 'TM3', 'TM4'];
  const [years, setYears] = useState<string[]>([]);
  const [fromQuarter, setFromQuarter]: any = useState<string>("TM1");
  const [toQuarter, setToQuarter]: any = useState<string>("TM2");
  const [fromYear, setFromYear]: any = useState<string>("2017");
  const [toYear, setToYear]: any = useState<string>("2022");

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
  
  var goToLinkTotal = () => {
    if (typeof window !== 'undefined') {
         window.location.href = `/telefonia-mobile/nr-perdoruesve/total/${fromQuarter}-${fromYear};${toQuarter}-${toYear}`;
    }
  }

  var goToLinkKontrate = () => {
    if (typeof window !== 'undefined') {
         window.location.href = `/telefonia-mobile/nr-perdoruesve/kontrate/${fromQuarter}-${fromYear};${toQuarter}-${toYear}`;
    }
  }

  var goToLinkParapagim = () => {
    if (typeof window !== 'undefined') {
         window.location.href = `/telefonia-mobile/nr-perdoruesve/parapagim/${fromQuarter}-${fromYear};${toQuarter}-${toYear}`;
    }
  }

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', marginTop: 30, marginLeft: 12 }}>
        <Link to={`/telefonia-mobile/nr-perdoruesve/total/${fromQuarter}-${fromYear};${toQuarter}-${toYear}`} id={'1'} onClick={goToLinkTotal}>
          <MDBBtn outline className="mx-2">
            Numri total i përdoruesve
          </MDBBtn>
        </Link>
        <Link to={`/telefonia-mobile/nr-perdoruesve/kontrate/${fromQuarter}-${fromYear};${toQuarter}-${toYear}`} id={'2'} onClick={goToLinkKontrate}>
          <MDBBtn outline className="mx-2">
            Përdoruesit me kontratë
          </MDBBtn>
        </Link>
        <Link to={`/telefonia-mobile/nr-perdoruesve/parapagim/${fromQuarter}-${fromYear};${toQuarter}-${toYear}`} id={'3'} onClick={goToLinkParapagim}>
          <MDBBtn outline className="mx-2">
            Përdoruesit me parapagim
          </MDBBtn>
        </Link>
      </div>

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
                <MenuItem key={name} value={name}
                onClick={() => handleChangeFromQuarter(name)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl style={{ minWidth: 130, marginLeft: 18 }}>
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
          <FormControl style={{ minWidth: 175, marginLeft: 18 }}>
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
          <FormControl style={{ minWidth: 130, marginLeft: 18 }}>
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

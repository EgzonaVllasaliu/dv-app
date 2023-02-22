import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { FormControl, InputLabel } from '@mui/material';
import { Link } from 'react-router-dom';
import { MDBBtn } from 'mdb-react-ui-kit';
import { ChangeEvent, useEffect, useState } from 'react';
import axios from 'axios';

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
         window.location.href = `/telefonia-mobile/megabytes/total/${fromQuarter}-${fromYear};${toQuarter}-${toYear}`;
    }
  }

  var goToLinkTwo = () => {
    if (typeof window !== 'undefined') {
         window.location.href = `/telefonia-mobile/megabytes/2g/${fromQuarter}-${fromYear};${toQuarter}-${toYear}`;
    }
  }

  var goToLinkThree = () => {
    if (typeof window !== 'undefined') {
         window.location.href = `/telefonia-mobile/megabytes/3g/${fromQuarter}-${fromYear};${toQuarter}-${toYear}`;
    }
  }

  var goToLinkLte = () => {
    if (typeof window !== 'undefined') {
         window.location.href = `/telefonia-mobile/megabytes/3g/${fromQuarter}-${fromYear};${toQuarter}-${toYear}`;
    }
  }

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', marginTop: 30, marginLeft: 12 }}>
        <Link to={`/telefonia-mobile/megabytes/total/${fromQuarter}-${fromYear};${toQuarter}-${toYear}`} id={'1'} onClick={goToLinkTotal}>
          <MDBBtn outline className="mx-2">
            Numri total i përdorimit
          </MDBBtn>
        </Link>
        <Link to={`/telefonia-mobile/megabytes/2g/${fromQuarter}-${fromYear};${toQuarter}-${toYear}`} id={'2'} onClick={goToLinkTwo}>
          <MDBBtn outline className="mx-2">
            Totali për 2g
          </MDBBtn>
        </Link>
        <Link to={`/telefonia-mobile/megabytes/3g/${fromQuarter}-${fromYear};${toQuarter}-${toYear}`} id={'3'} onClick={goToLinkThree}>
          <MDBBtn outline className="mx-2">
            Totali për 3g
          </MDBBtn>
        </Link>
        <Link to={`/telefonia-mobile/megabytes/3g/${fromQuarter}-${fromYear};${toQuarter}-${toYear}`} id={'4'} onClick={goToLinkLte}>
          <MDBBtn outline className="mx-2">
            Totali për 4g/LTE
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
                <MenuItem key={name} 
                value={name} 
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

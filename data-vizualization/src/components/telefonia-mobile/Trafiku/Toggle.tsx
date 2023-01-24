import { Link } from 'react-router-dom';
import { MDBBtn } from 'mdb-react-ui-kit';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';


export const Toggle = () => {
      const quarters = ["TM1","TM2","TM3","TM4"]
      const [years, setYears] = useState<string[]>([])
      useEffect(() => {
        axios.get("http://localhost:5000/telefonia-mobile/api/mobile/get_years")
        .then(response => {
            setYears(response.data)
        })
    },[])
    
      return (
        <div>
              <div style={{ display : "flex", marginTop: 30, marginLeft: 20}}> 
                    <div>
                    <h6 style={{ marginLeft: 10}}>PREJ: </h6>
                    <FormControl style={{minWidth: 175, marginLeft: 0}}>
                    <InputLabel id="demo-simple-select-label">Zgjedh tre-mujorin</InputLabel>
                    <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          label="Zgjedh-tre-mujorin"
                    >
                          {quarters.map((name) => (
                          <MenuItem
                          key={name}
                          value={name}
                          >
                          {name}
                          </MenuItem>
                          ))}  
                    </Select>
                    </FormControl>
                    <FormControl style={{minWidth: 130, marginLeft: 18}}>
                    <InputLabel id="demo-simple-select-label">Zgjedh vitin</InputLabel>
                    <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          label="Zgjedh-vitin"
                    >
  
                      {years.map((name) => (
                      <MenuItem
                          key={name}
                          value={name}
                      >
                          {name}
                      </MenuItem>
                      ))}  
                    </Select>
                    </FormControl>
                    </div>
  
                    <div>
                    <h6 style={{ marginLeft: 25}}>DERI: </h6>
                    <FormControl style={{minWidth: 175, marginLeft: 18}}>
                    <InputLabel id="demo-simple-select-label">Zgjedh tre-mujorin</InputLabel>
                    <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          label="Zgjedh-tre-mujorin"
                    >
                          {quarters.map((name) => (
                          <MenuItem
                          key={name}
                          value={name}
                          >
                          {name}
                          </MenuItem>
                          ))}  
                    </Select>
                    </FormControl>
                    <FormControl style={{minWidth: 130, marginLeft: 18}}>
                    <InputLabel id="demo-simple-select-label">Zgjedh vitin</InputLabel>
                    <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          label="Zgjedh-vitin"
                    >
                      {years.map((name) => (
                      <MenuItem
                          key={name}
                          value={name}
                      >
                          {name}
                      </MenuItem>
                      ))}  
                    </Select>
                    </FormControl> 
                    </div>
              </div>
              <div style={{ display : "flex", alignItems : 'center', marginTop: 30, marginLeft: 12}}> 
                  <Link to='/telefonia-mobile/trafiku/hyrje' id={"6"}>
                        <MDBBtn outline className='mx-2'>Hyrës</MDBBtn>
                  </Link>
                  <Link to='/telefonia-mobile/trafiku/dalje' id={"7"}>
                        <MDBBtn outline className='mx-2'>Dalës</MDBBtn>
                  </Link>
                  <Link to='/telefonia-mobile/trafiku/brenda-rrjetit' id={"1"}>
                        <MDBBtn outline className='mx-2'>Brenda rrjetit</MDBBtn>
                  </Link>
                  <Link to='/telefonia-mobile/trafiku/rrjeti-tjeter' id={"2"}>
                        <MDBBtn outline className='mx-2'>Jashtë rrjetit</MDBBtn>
                  </Link>
                  <Link to='/telefonia-mobile/trafiku/rrjeti-nderkombetar' id={"3"}>
                        <MDBBtn outline className='mx-2'>Ndërkombëtar</MDBBtn>
                  </Link>
                  <Link to='/telefonia-mobile/trafiku/rrjeti-fiks' id={"4"}>
                        <MDBBtn outline className='mx-2'>Rrjeti fiks</MDBBtn>
                  </Link>
                  <Link to='/telefonia-mobile/trafiku/rrjeti-terminuar' id={"5"}>
                        <MDBBtn outline className='mx-2'>I terminuar</MDBBtn>
                  </Link>
              </div>
        </div>
      );
  }
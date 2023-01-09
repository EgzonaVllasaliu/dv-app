import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='/'>ARKEP</MDBNavbarBrand>
        <MDBNavbarNav>
        <MDBNavbarItem>
            <MDBDropdown group className='shadow-0'>
                <MDBDropdownToggle color='light'>Telefonia Fikse</MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <Link to='/telefonia-fixe'><MDBDropdownItem link>Telefonia Fikse</MDBDropdownItem></Link>
                  </MDBDropdownMenu>
              </MDBDropdown>
          </MDBNavbarItem>
          <MDBNavbarItem>
              <MDBDropdown group className='shadow-0'>
                <MDBDropdownToggle color='light'>Telefonia Mobile</MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <Link to='/megabytes'><MDBDropdownItem link>Megabytes</MDBDropdownItem></Link>
                    <Link to='/nr-perdoruesve'><MDBDropdownItem link>Numri i perdoruesve</MDBDropdownItem></Link>
                    <Link to='/te-hyrat'><MDBDropdownItem link>Te hyrat</MDBDropdownItem></Link>
                    <Link to='/trafiku'><MDBDropdownItem link>Trafiku</MDBDropdownItem></Link>
                  </MDBDropdownMenu>
              </MDBDropdown>
          </MDBNavbarItem>
          <MDBNavbarItem>
          <MDBDropdown group className='shadow-0'>
                <MDBDropdownToggle color='light'>ISP</MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <Link to='/isp'><MDBDropdownItem link>ISP</MDBDropdownItem></Link>
                  </MDBDropdownMenu>
              </MDBDropdown>
          </MDBNavbarItem>
        </MDBNavbarNav>
      </MDBContainer>
    </MDBNavbar>
  );
}

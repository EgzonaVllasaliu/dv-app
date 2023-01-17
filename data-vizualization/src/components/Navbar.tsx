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
    <MDBNavbar expand="lg" light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand href="/">ARKEP</MDBNavbarBrand>
        <MDBNavbarNav>
          <MDBNavbarItem>
            <MDBDropdown group className="shadow-0">
              <MDBDropdownToggle color="light">Telefonia Fikse</MDBDropdownToggle>
              <MDBDropdownMenu>
                <Link to="/perdoruesit">
                  <MDBDropdownItem link>Telefonia fikse perdoruesit dhe penetrimi</MDBDropdownItem>
                </Link>
                <Link to="/ndarja-tregut-perdoruesve">
                  <MDBDropdownItem link>Ndarja e tregut</MDBDropdownItem>
                </Link>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavbarItem>
          <MDBNavbarItem>
            <MDBDropdown group className="shadow-0">
              <MDBDropdownToggle color="light">Telefonia Mobile</MDBDropdownToggle>
              <MDBDropdownMenu>
                <Link to="/telefonia-mobile/megabytes">
                  <MDBDropdownItem link>Megabytes</MDBDropdownItem>
                </Link>
                <Link to="/telefonia-mobile/nr-perdoruesve">
                  <MDBDropdownItem link>Numri i perdoruesve</MDBDropdownItem>
                </Link>
                <Link to="/telefonia-mobile/te-hyrat">
                  <MDBDropdownItem link>Te hyrat</MDBDropdownItem>
                </Link>
                <Link to="/telefonia-mobile/trafiku">
                  <MDBDropdownItem link>Trafiku</MDBDropdownItem>
                </Link>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavbarItem>
          <MDBNavbarItem>
            <MDBDropdown group className="shadow-0">
              <MDBDropdownToggle color="light">ISP</MDBDropdownToggle>
              <MDBDropdownMenu>
                <Link to="/isp">
                  <MDBDropdownItem link>Karakteristikat e ISP-ve</MDBDropdownItem>
                </Link>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavbarItem>
        </MDBNavbarNav>
      </MDBContainer>
    </MDBNavbar>
  );
}

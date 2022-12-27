import React from 'react';
import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarItem, MDBNavbarNav } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='/'>ARKEP</MDBNavbarBrand>
        <MDBNavbarNav>
          <MDBNavbarItem className={'mr-2'}>
            <Link to='/telefonia-fixe'>Telefonia Fikse</Link>
          </MDBNavbarItem>
          <MDBNavbarItem>
            <Link to='/telefonia-mobile'>Telefonia Mobile</Link>
          </MDBNavbarItem>
        </MDBNavbarNav>
      </MDBContainer>
    </MDBNavbar>
  );
}

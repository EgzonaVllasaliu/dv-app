import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>

      <section className=''>
        <MDBContainer className='p-1'>
          <MDBRow className='mt-0'>
            <MDBCol lg='6' md='12' className='mb-0 mb-md-0'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3 pt-3" />
                Autoriteti Rregullativ i Komunikimeve Elektronike dhe Postare - ARKEP
              </h6>
              <p>
              ARKEP me qëllim të informimit të ndërmarrjeve/operatorëve, palëve të interesuara dhe opinionit të gjerë, publikon të dhënat: "Pasqyra e Indikatorëve të Tregut të Komunikimeve Elektronike"
              </p>
            </MDBCol>

            <MDBCol lg='6' md='12' className='mb-0 mb-md-0 pt-2'>
              <h6 className='text-uppercase fw-bold mb-3'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Rr. Bedri Pejani Nr.23, 10000 Prishtinë
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@arkep-rks.org
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 383 38 212 345
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-1' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2022 Copyright:
        <a className='text-reset fw-bold' href='http://www.arkep-rks.org/'>
         arkep-rks.org
        </a>
      </div>
    </MDBFooter>
  );
}
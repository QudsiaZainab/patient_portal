
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function OffcanvasExample() {
  const bgNav = {
    backgroundColor: '#3182CE',
  }
  const bgSide = {
    backgroundColor: '#E2E8F0',
  }
  return (
    <>
      <Navbar variant='dark' style={bgNav} expand="false" className="mb-3 ">
        <Container fluid>
          <Navbar.Toggle aria-controls={`offcanvasNavbar`} variant="dark" />
          <Container>
            <Navbar.Brand href="#home" >
              <img
                alt=""
                src="logo.jpg"
                width="30"
                height="30"
                className="d-inline-block align-top rounded-circle"
              />{' '}
              <span ><b>Dynamics of Mind</b></span>
            </Navbar.Brand>
            <Navbar.Text className="float-end" >
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
          </Container>
          <Navbar.Offcanvas
            id={`offcanvasNavbar`}
            aria-labelledby={`offcanvasNavbarLabel`}
            placement="start"
            style={bgSide}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>
                Dynamics of Mind
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Link to="/" className="text-black m-2" style={{ textDecoration: 'none' }}>Home</Link>

                <Link to="/Doctors" className="text-black m-2" style={{ textDecoration: 'none' }}>Doctors</Link>
                <Link to="/requestsent" className="text-black m-2" style={{ textDecoration: 'none' }}>Requested Appointments</Link>
                <Link to="/changepassword" className="text-black m-2" style={{ textDecoration: 'none' }}>Change Password</Link>
                <Button variant="primary" className = "mt-5">Logout</Button>{' '}
              </Nav>

            </Offcanvas.Body>
          </Navbar.Offcanvas>

          {/* <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand> */}
          
          
        </Container>
      </Navbar>
      
    </>
  );
}

export default OffcanvasExample;

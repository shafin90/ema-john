
import './NavBar.css'
import { Navbar, Nav, Container } from 'react-bootstrap';
import img from '../../../public/images/Logo.svg'

function NavBar() {
  return (
    <Navbar className='nav' expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={img}
            width="150px"
            height="40"
            className="d-inline-block align-top"
            alt="Your Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className='text-white small' href="/">Home</Nav.Link>
            <Nav.Link className='text-white small' href="#home">Order</Nav.Link>
            <Nav.Link className='text-white small' href="#order-review">Order Review</Nav.Link>
            <Nav.Link className='text-white small' href="#manage-inventory">Manage Inventory</Nav.Link>
            <Nav.Link className='text-white small' href="#login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

import { Container, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
      <Navbar>
        <Container>
        <Navbar.Brand to="/" as={ Link }>
          <img
            src="./images/logo-40x40.png"
            width="40"
            height="40"
            className="d-inline-block align-bottom"
            alt="GBC Logo"
          />{' '}
          Gay Bear Capital
        </Navbar.Brand>
        <NavDropdown  title="Inventory" id="basic-nav-dropdown">
            <NavDropdown.Item to="/inventory" as={ Link }>View</NavDropdown.Item>
            <NavDropdown.Item to="/inventory/create" as={ Link } >Create</NavDropdown.Item>
          </NavDropdown>
        </Container>
      </Navbar>
    );
  }
   
  export default NavBar;
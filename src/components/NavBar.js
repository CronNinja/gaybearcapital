import { Container, Navbar, Button } from 'react-bootstrap';
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
          <Link to="/inventory">Inventory</Link>
          <Button variant="primary">
            Cart
        </Button>
        </Container>
      </Navbar>
    );
  }
   
  export default NavBar;
import { Auth } from 'aws-amplify';
import { Container, Navbar, NavDropdown, Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import UserDropdown from './UserDropdown';

const NavBar = ({isAuthenticated, userHasAuthenticated, handleShowOpen, cart}) => {
  const history = useHistory();
  async function handleLogout() {
    await Auth.signOut();
    history.push("/");
  }
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
          {
            isAuthenticated && <UserDropdown handleLogout={ handleLogout }/>
          }
          {
            cart.length > 0 &&
              <Button variant="primary" onClick={handleShowOpen}>
                Cart
              </Button>
          }
        </Container>
      </Navbar>
    );
  }
   
  export default NavBar;
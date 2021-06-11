import { Auth } from 'aws-amplify';
import { NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
const UserDropdown = ({ handleLogout }) => {
    return (
        <>
            <NavDropdown  title={Auth.user.username} id="basic-nav-dropdown">
                <NavDropdown.Item to="/account" as={ Link }>Account</NavDropdown.Item>
                <NavDropdown.Item to="/account/history" as={ Link } >History</NavDropdown.Item>
                <NavDropdown.Item as={ Button } onClick={ handleLogout }>Signout</NavDropdown.Item>
          </NavDropdown>
        </>
    );
}
 
export default UserDropdown;
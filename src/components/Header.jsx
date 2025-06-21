
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Search from './Search';
import UserProfile from './UserProfile';

function Header() {

  return (
    <Navbar expand="lg" fixed='top' className="bg-body-tertiary">
      <Container className='d-flex justify-content-between align-items-center'>
        <Navbar.Brand ><Link to='/' className='nav-link fw-bold fs-3'>Alishan</Link> </Navbar.Brand>
             <Search />
        <Navbar.Collapse id="basic-navbar-nav "  >
          <Nav className="ms-auto">
            <Nav.Item>
             <Link className='nav-link' to='/'>Home</Link> 
              </Nav.Item>
            <Nav.Item>
             <Link className='nav-link' to='/product'>Product</Link> 
            </Nav.Item>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
              <Nav.Item>
           
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
        <div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <UserProfile/>
           
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;
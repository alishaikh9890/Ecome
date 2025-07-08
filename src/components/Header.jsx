import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import Search from "./Search";
import UserProfile from "./UserProfile";
import { useSelector } from "react-redux";
import { Badge } from "react-bootstrap";

function Header() {
  const cartLength = useSelector((state) => state.cart.cartLength);

  return (
    <Navbar expand="lg" fixed="top" className="bg-body-tertiary shadow">
      <Container className="d-flex justify-content-between align-items-center px-1">
        <Navbar.Brand className="logo">
          <Link to="/" className="nav-link fw-bold fs-3">
            Alishan
          </Link>{" "}
        </Navbar.Brand>
        <div className="">
          <Search/>
        </div>

     {/*    <Navbar.Collapse id="basic-navbar-nav" className="order-5 order-sm-2">
          <Nav className="ms-auto">
            <Nav.Item>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to="/product">
                Product
              </Link>
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
            <Nav.Item></Nav.Item>
          </Nav>
        </Navbar.Collapse> */}
        
        <div className=" d-flex align-items-center gap-1 ">
         {/*  <Navbar.Toggle
            className="p-1 fs-6"
            aria-controls="basic-navbar-nav"
          /> */}
          <UserProfile />
          <Link
            to="/cart"
            className="py-0 btn btn-sm btn-outline-secondary position-relative"
          >
            <i className="bi bi-cart3  fs-5"></i>
            <Badge bg="danger" className="position-absolute rounded-circle p-1 " style={{left:"13px", top:"0px"}}>
              {cartLength}
            </Badge>
          </Link>
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;

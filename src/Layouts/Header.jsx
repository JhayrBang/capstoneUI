import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";




const Header = () => {
  return (
    <Navbar collapseOnSelect expand="sm" bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home"><b>TaskMaster</b></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
          </Nav>
          <Nav>
          <Nav.Link as={Link} to="/login">Login</Nav.Link>
          </Nav>
          <Nav>
          <Nav.Link as={Link} to="/register">Register</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};

export default Header
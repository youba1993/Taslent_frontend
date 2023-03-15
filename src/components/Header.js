import {
    Figure,
    Container,
    Nav,
    Navbar,
    NavDropdown,
} from 'react-bootstrap';

import logo from "../images/logo-no-background.png"

function Header() {
    return (
        <Navbar bg="light" expand="lg" sticky="top">
            <Container>
                
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home">About</Nav.Link>
                        <Nav.Link href="#link">Projects</Nav.Link>
                        <Nav.Link href="#home">Links</Nav.Link>
                        <NavDropdown title="Activity" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Blogs</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Q&A</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Gallery</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Contacts</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Nav className="mx-auto justify-content-center">
                    <Navbar.Brand href="#home" >
                        <img className="d-inline-block align-top" height={60} alt="My Village Logo" src={logo} />
                    </Navbar.Brand>
                </Nav>
                <Nav>
                    <Nav.Link href="#home">Login</Nav.Link>
                </Nav>

            </Container>
        </Navbar>
    );
}

export default Header;

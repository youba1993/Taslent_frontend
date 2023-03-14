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

            <Container className='justify-element-center'>
                <Navbar.Brand href="#home">
                    <Figure><Figure.Image width={80} height={45} alt="logo" src={logo} /></Figure>
                </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">About</Nav.Link>
                        <Nav.Link href="#link">Projects</Nav.Link>
                        <Nav.Link href="#home">Links</Nav.Link>
                        <NavDropdown title="Activity" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Blogs</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Q&A
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Gallery</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Contacts
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Nav gap={1} >
                    <Nav.Link href="#home">Login</Nav.Link>
                    <div className="vr" />
                    <Nav.Link href="#link">Signup</Nav.Link>
                </Nav>

            </Container>

        </Navbar>
    );
}

export default Header;
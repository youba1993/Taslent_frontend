import {
    Button,
    Container,
    Nav,
    Navbar,
    NavDropdown,
} from 'react-bootstrap';
import React, { useState } from "react";
import logo from "../images/logo-no-background.png"
import Login from '../pages/Login';

function Header() {
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = (event) => {
        event.preventDefault();
        setShow(true);
    }

    return (
        <Navbar collapseOnSelect bg="light" expand="lg" sticky="top">
            <Container className='justify-content-center' id='header' >

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto" >
                        <Nav.Link className=' me-3' href="/about">About Taslent</Nav.Link>
                        <Nav.Link href="/projects">Projects</Nav.Link>
                        <Nav.Link href="/gallery">Gallery</Nav.Link>
                        <NavDropdown title="Activity" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/news&events">News & Events</NavDropdown.Item>
                            <NavDropdown.Item href="/qa">Q&A</NavDropdown.Item>
                            <NavDropdown.Item href="/links">Links</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/contact">Contacts</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Nav className="mx-auto col-6">
                    <Navbar.Brand href="/" >
                        <img className="d-inline-block align-top" height={60} alt="My Village Logo" src={logo} />
                    </Navbar.Brand>
                </Nav>
                <Nav>
                    <Button variant="outline-info" onClick={(e)=>handleShow(e)}>
                        Login
                    </Button>
                </Nav>

            </Container>
            <Login show={show} handleClose={handleClose} />
        </Navbar>
    );
}

export default Header;

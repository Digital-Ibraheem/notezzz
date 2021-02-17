import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Nav, Navbar, Container } from 'react-bootstrap'

const Header = () => {
    return (
        <Container>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand>Notesss</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <LinkContainer to='/'>
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/notes'>
                            <Nav.Link>Notes</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/create'>
                            <Nav.Link>Create</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    )
}

export default Header

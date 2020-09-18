import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import style from 'bootstrap/dist/css/bootstrap.css';
import CartIcon from './CartIcon';
import Counter from './Counter';

class mainNavBar extends React.Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Ariel Suarez</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="https://www.instagram.com/arisuarez_/">Instagram</Nav.Link>
                        <Nav.Link href="#link">Envíos</Nav.Link>
                        <Nav.Link href="#link">Contacto</Nav.Link>
                        <Nav.Link href="#link">Ubicación</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    <CartIcon />
                </Navbar.Collapse>
            </Navbar>
        );
    }
}


export default mainNavBar;
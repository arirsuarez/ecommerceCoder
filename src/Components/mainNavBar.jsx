import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import style from 'bootstrap/dist/css/bootstrap.css';
import CartIcon from './CartIcon';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../Pages/Home';
import Contact from '../Pages/Contact';
import Location from '../Pages/Location';
import Shipping from '../Pages/Shipping';


class mainNavBar extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Navbar bg="light" expand="lg">
                    <LinkContainer to='/'>
                        <Navbar.Brand href="#home">Ariel Suarez</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="https://www.instagram.com/arisuarez_/">Instagram</Nav.Link>
                            <LinkContainer to='/Shipping'>
                                <Nav.Link>Envíos</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/Contact'>
                                <Nav.Link>Contacto</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/Location'>
                                <Nav.Link>Ubicación</Nav.Link>
                            </LinkContainer>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                        <CartIcon />
                    </Navbar.Collapse>
                </Navbar>

                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/Shipping">
                        <Shipping />
                    </Route>
                    <Route path="/Contact">
                        <Contact />
                    </Route>
                    <Route path="/Location">
                        <Location />
                    </Route>
                </Switch>

            </BrowserRouter>

        );
    }
}


export default mainNavBar;
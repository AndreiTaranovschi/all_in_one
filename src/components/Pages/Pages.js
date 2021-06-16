import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
const Pages = () => {
    return (
        <div className="grid">
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Taranovschi's App</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/AppToDo">TodoApp</Nav.Link>
                    <Nav.Link href="/AppWeather">Weather App</Nav.Link>
                    <Nav.Link href="/aboutMe">About Me</Nav.Link>
                    <Nav.Link href="/images">images</Nav.Link>
                </Nav>

            </Navbar>




        </div>

    );
}
export default Pages;
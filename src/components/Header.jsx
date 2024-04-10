import React from "react"
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import logo from '../assets/images/logo.webp'
import '../assets/styles/header.css'
import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <NavLink to="/" className={"navbar-brand"}>
                        <img
                        src={logo} 
                        className="d-inline-block align-top logo"
                        alt="un mexicain qui joue de la guitare"
                        />
                    </NavLink>
                    <Navbar.Collapse className="justify-content-end">
                        <Nav>
                            <NavLink to="/" className={"nav-link"}>Accueil</NavLink>
                            <NavLink to="/a-propos" className={"nav-link"}>A propos</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}
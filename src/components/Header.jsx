import React from "react"
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import logo from '../assets/images/logo.webp'
import '../assets/styles/header.css'

export default function Header() {
    return (
        <header>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                        src={logo} 
                        className="d-inline-block align-top logo"
                        alt="un mexicain qui joue de la guitare"
                        />
                    </Navbar.Brand>
                    <Navbar.Collapse className="justify-content-end">
                        <Nav>
                            <Nav.Link href="/">Accueil</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}
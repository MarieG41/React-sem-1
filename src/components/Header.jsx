import React from "react"
import Navbar from 'react-bootstrap/Navbar'
import '../styles/header.css'

export default function Header() {
    return (
        <Navbar className="bg-body-tertiary">
            <img className="logo" src="https://cdn.pixabay.com/photo/2018/03/26/14/18/man-3262834_960_720.png" 
            alt="un mexicain qui joue de la guitare" />
            <nav>
                <a href="/">Accueil</a>
                <a href="/">A propos</a>
            </nav>
        </Navbar>
    )
}
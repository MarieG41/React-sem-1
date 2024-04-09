import React from "react";
import Card from 'react-bootstrap/Card'
import '../assets/styles/dish.css'
import { Link } from "react-router-dom";


export default function Dish( {name, img, price, slug} ) {
    return (
        <div className="main--div-dish">
            <Card>
                <Card.Img variant="top" className="dish-img" src={img} alt={name}/>
                    <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {price}€
                    </Card.Text>
                    <Card.Link>
                        <Link to={slug}>Détails</Link>
                    </Card.Link>
                </Card.Body>
            </Card>
        </div>
    )
}
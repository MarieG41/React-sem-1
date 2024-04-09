import React from "react";
import Card from 'react-bootstrap/Card'
import '../assets/styles/dish.css'

export default function Dish( {name, img, price} ) {
    return (
        <div className="main--div-dish">
            <Card>
                <Card.Img variant="top" className="dish-img" src={img} alt={name}/>
                    <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {price}€
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}
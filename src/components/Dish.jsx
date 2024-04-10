import React from "react";
import Card from 'react-bootstrap/Card'
import '../assets/styles/dish.css'
import { Link } from "react-router-dom";
import Badge from 'react-bootstrap/Badge';

export default function Dish({ name, img, price, slug, isNew }) {
    console.log(name);
    return (
        <div className="main--div-dish">
            <Link to={`plat/${slug}`}><Card>
                <Card.Img variant="top" className="dish-img" src={img} alt={name}/>
                {isNew && <Badge bg="primary">Nouveau</Badge>}
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {price}€
                        </Card.Text>
                </Card.Body>
            </Card></Link>
        </div>
    )
}
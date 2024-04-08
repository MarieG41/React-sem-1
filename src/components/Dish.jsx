import React from "react";
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Dish( {name, img, price} ) {
    return (
        <Card>
            <Container className="justify-content-md-center">
                <Row>
                    <img src={img} alt="plats méxicains à la carte" />
                    <Col>
                        <h2>{name}</h2>
                        <p>{price}€</p>
                    </Col>
                </Row>
            </Container>
        </Card>
    )
}
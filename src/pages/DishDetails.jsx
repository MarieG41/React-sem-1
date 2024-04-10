import React from "react";
import { useParams} from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function DishDetails() {
    const { slug } = useParams()
    return (
        <div>
            <Container>
                <Row><h1>Slug: {slug}</h1></Row>
            </Container>
        </div>
    )
}
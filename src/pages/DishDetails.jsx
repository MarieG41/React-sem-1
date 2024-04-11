import React, { useEffect, useState } from "react";
import { useParams} from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DishesDatas from '../datas/dishes.json'
import Button from 'react-bootstrap/Button';

export default function DishDetails({addToCart}) {
    const { slug } = useParams()
    const [ dish, setDish ] = useState(null)

    useEffect(() => {
        const currentDish = DishesDatas.find((dish) => dish.slug === slug)
        setDish(currentDish)
    }, [slug])
    return (
        <div>
            <Container>
                {dish ? (<Row>
                    <Col>
                        <img src={dish.img} alt={dish.name} className="mw-100"/>
                    </Col>
                    <Col>
                        <h1>{dish.name}</h1>
                        <p>{dish.description}</p>
                        <p>{dish.price}€</p>
                        <Button variant="primary" onClick={() => addToCart(dish)}>Commander</Button>
                    </Col>
                </Row>) :
                (<Row>
                    <p>Chargement de la page</p>
                </Row>)}
                
            </Container>
        </div>
    )
}
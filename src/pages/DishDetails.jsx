import React, { useContext, useEffect, useState } from "react";
import { useParams} from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DishesDatas from '../datas/dishes.json'
import Button from 'react-bootstrap/Button';
import { CartContext } from '../utils/context/CartContext'
import {Helmet} from "react-helmet";

export default function DishDetails() {
    const { slug } = useParams()
    const [ dish, setDish ] = useState(null)
    const { addToCart } = useContext(CartContext)
    useEffect(() => {
        const currentDish = DishesDatas.find((dish) => dish.slug === slug)
        setDish(currentDish)
    }, [slug])
    return (
        <>
            <head>
                <Helmet>
                    <title>{DishesDatas.name}</title>
                </Helmet>
            </head>
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
        </>
    )
}
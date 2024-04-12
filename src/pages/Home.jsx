import Dish from '../components/Dish';
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useState, useEffect } from 'react';
import DishesDatas from '../datas/dishes.json'
import {Helmet} from "react-helmet";

export default function Home() {
    const [ showNewOnly, setShowNewOnly ] = useState(false)
    const [ dishes, setDishes ] = useState([])
    
    function handleShowNewOnly() {
        setShowNewOnly(!showNewOnly)
    }
    
    useEffect(() => {
        const filteredDishes = showNewOnly ? DishesDatas.filter((dish) => dish.isNew) : DishesDatas;
        setDishes(filteredDishes)
    }, [showNewOnly]);

    return (
        <>
        <Helmet>
            <title>Mexican Food</title>
        </Helmet>
        <Container>
           <Button variant="primary" onClick={handleShowNewOnly}> {showNewOnly ? ("Voir tous les plats") : ("Nouveauté uniquement") }</Button>
            <Stack direction="horizontal" gap={3} className="justify-content-lg-center">
                {dishes.length > 0 && dishes.map((dish, index) => (
                    <Dish 
                        key={index} 
                        name={dish.name}
                        img={dish.img}
                        price={dish.price}
                        slug={dish.slug}
                        description={dish.description}
                        isNew={dish.isNew}
                    />
                ))}                 
            </Stack>
        </Container>
        </>
    )
}

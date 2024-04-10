import React from 'react';
import Dish from '../components/Dish';
import Stack from 'react-bootstrap/Stack'

export default function Home() {
    const dishes = [
        {name:"Tacos à l’unité", img:"https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg", price:3, slug:"tacos-a-l-unite", isNew: true},
        {name:"Enchiladas",  img:"https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg", price:12, slug:"enchiladas", isNew: false},
        {name:"Mole poblano", img:"https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg", price:15, slug:"mole-poblano", isNew: false}
    ]
    return (
        <>
            <Stack direction="horizontal" gap={3} className="justify-content-md-center">
                {dishes.map((dish, index) => (
                    <Dish key={index} {...dish}/>
                ))}                 
            </Stack>
        </>
    )
}

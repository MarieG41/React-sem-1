import React from "react";

export default function Dish( {name, img, price} ) {
    return (
        <main>
            <h3>{name}</h3>
            <img src={img} alt="plats méxicains à la carte" />
            <p>{price}€</p>
        </main>
    )
}
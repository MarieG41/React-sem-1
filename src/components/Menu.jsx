import React from "react";

export default function Menu( {name, img, price} ) {
    return (
        <div>
            <h3>{name}</h3>
            <img src={img} alt="plats méxicains à la carte" />
            <p>{price}€</p>
        </div>
    )
}
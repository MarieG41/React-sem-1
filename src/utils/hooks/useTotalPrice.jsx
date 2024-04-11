import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";

export default function useTotalPrice() {
    const { cart } = useContext(CartContext)
    const [ totalPrice, setTotalPrice ] = useState(0)

    useEffect(() => {
        let priceTotal = 0
        cart.forEach((dish) => {
            priceTotal+= dish.price * dish.quantity
        });
        setTotalPrice(priceTotal)
    }, [cart])
    return totalPrice
    
}
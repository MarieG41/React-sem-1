import { useContext, useEffect, useState } from "react"
import { CartContext } from "../context/CartContext"

export default function useTotalQuantity() {
    const { cart } = useContext(CartContext)
    const [ totalQnty, setTotalQnty ] = useState(0)

    useEffect(() => {
        let totalQuantity = 0
        cart.forEach(dish => {
            totalQuantity+= dish.quantity
        });
        setTotalQnty(totalQuantity)
    }, [cart])
    return totalQnty
}

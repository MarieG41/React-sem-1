import { createContext, useState } from "react";
export const CartContext = createContext()

export default function CartProvider({ children }) {
    const [ cart, setCart ] = useState([])
    function addToCart(product) {
        const newCart = [...cart]
        const productCart = newCart.findIndex((currentDish) => currentDish.slug === product.slug)
        if(productCart === -1) {
            product.quantity = 1
            newCart.push(product)
        } else {
            newCart[productCart].quantity++
        }

        setCart(newCart)
      }

      return (
        <CartContext.Provider value = {{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
      )
}
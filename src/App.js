import React, { useState } from 'react';
import './App.css';
import Home from "./pages/Home"
import {Route, Routes} from "react-router-dom"
import Layout from './components/Layout';
import DishDetails from './pages/DishDetails';
import NotFound from './pages/NotFound';
import About from './pages/About'
import Cart from './pages/Cart'

function App() {
  const [ cart, setCart ] = useState([])
  function addToCart(product) {
    setCart(cart => [...cart, product])
  }
  return (
    <div>
        <Routes>
          <Route element={<Layout cart={cart}/>}>
            <Route index element={<Home/>} />
            <Route path='/a-propos' element={<About />} />
            <Route path='/plat/:slug' element={<DishDetails addToCart={addToCart}/>} />
            <Route path='/panier' element={<Cart cart={cart}/>} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer';
import Dish from './components/Dish';

function App() {
  return (
    <div>
      <Header />
      <Dish name="Tacos à l’unité" 
            img="https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg"
            price={3}
      />
      <Dish name="Enchiladas"
            img="https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg"
            price={12}
      />
      <Dish name="Mole poblano"
            img="https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg"
            price={15}
      />
      <Footer />
    </div>
  );
}

export default App;

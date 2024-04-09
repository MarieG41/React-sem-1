import React from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer';
import Home from "./pages/Home"
import {Route, Routes} from "react-router-dom"

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route index={<Home />} />
        </Routes>
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;

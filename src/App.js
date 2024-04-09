import React from 'react';
import './App.css';
import Home from "./pages/Home"
import {Route, Routes} from "react-router-dom"
import Layout from './components/Layout';
import DishDetails from './pages/DishDetails';

function App() {
  return (
    <div>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home/>} />
            <Route path='plat/:slug' element={<DishDetails />} />
          </Route>
        </Routes>
    </div>
  );
}

export default App;

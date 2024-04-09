import React from 'react';
import './App.css';
import Home from "./pages/Home"
import {Route, Routes} from "react-router-dom"
import Layout from './components/Layout';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home/>} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

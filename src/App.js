import React from 'react'
// import Cart from './components/Cart'
import Home from './components/Home'
import SingleProduct from './components/SingleProduct';
import Cart from './components/Cart';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      {/* <Cart/> */}
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/details/:id" element={<SingleProduct />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App


import React, { useState } from 'react';
import Header from './header/header.jsx';
import Home from './home/home.jsx';
import Com from './computer/computer.jsx';
import Cart from './cart/cart.jsx'; // Import the Cart component
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Tel from './television/television.jsx'
import Pay from './payment/payment.jsx';

export default function App() {
  const [cartItems, setCartItems] = useState([]); // State to manage cart items

  // computer add to carting
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  /*television add to carting*/
  const addToCart1 = (item) => {
    setCartItems([...cartItems, item]);
  };
  


  return (
    <div>
      <BrowserRouter>
      <Header cartCounts={cartItems.length} />
      
        <Routes>
          {/*home page*/}
          <Route path='/' element={<Home />} />
          {/*computer*/}
          <Route
            path='/com'
            element={<Com addToCart={addToCart} />} // Pass addToCart function to Com component
          />
          {/*cart*/}
          <Route
            path='/cart'
            element={<Cart cartItems={cartItems} />} // Pass cartItems to Cart component
          />
          {/*televsion*/}
          <Route path='/tel' element={<Tel addToCart={addToCart1} />}/>

          {/*payment*/}
          <Route path='/pay' element={<Pay />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

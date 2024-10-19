import React, { useState } from 'react';
import Header from './header/header.jsx';
import Home from './home/home.jsx';
import Com from './computer/computer.jsx';
import Cart from './cart/cart.jsx'; // Import the Cart component
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  const [cartItems, setCartItems] = useState([]); // State to manage cart items

  // Function to add item to cart
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };
  


  return (
    <div>
      <BrowserRouter>
      <Header cartCounts={cartItems.length} />
      
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/com'
            element={<Com addToCart={addToCart} />} // Pass addToCart function to Com component
          />
          <Route
            path='/cart'
            element={<Cart cartItems={cartItems} />} // Pass cartItems to Cart component
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

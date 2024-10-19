// Header.js
import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
import './header.css';
import { useNavigate } from 'react-router-dom';

export default function Header({ cartCounts }) {
  const navigate = useNavigate();

  // Function to navigate to the cart page
  const goToCart = () => {
    navigate('/cart');
  };

  return (
    <div className='header'>
      <div className='heading'>
        <div>
          <h1>Techub</h1>
        </div>
        <div onClick={goToCart} className='icon1'>
          <FaShoppingCart  className='iconfont' />
          {/* number of iteams in the cart*/}
          <span className='cartcount'>{cartCounts}</span> {/* Display cart count */}
        </div>
      </div>
      <br />
      <hr />
    </div>
  );
}

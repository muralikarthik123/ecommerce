import React, { useState } from 'react';
import './television.css';
import Data from '../tele.json';
import { FaSearch } from "react-icons/fa";

export default function Computer({ addToCart }) {
  const [data, setData] = useState('');
  const [cartCount, setCartCount] = useState(0);

  // Function to handle adding item to cart
  const handleAddToCart = (item) => {
    addToCart(item);
    setCartCount(cartCount + 1); 
    alert('Iteam is added to Cart Successfully')
  };

  return (
    <div className='tel'>
      <div className='heading'>
      {/*laptop heading*/}
        <div>
          <h1>Laptops</h1>
        </div>

        {/*input search button*/}
        <div className='inputs'>
          <span>
            <input
              className='search'
              placeholder='Search'
              type='text'
              value={data}
              onChange={(e) => setData(e.target.value)}
            />
          </span>
          <span className='icondim'>
            <FaSearch className='icon2' />
          </span>
          
        </div>
      </div>


      {/* filtering data */}
      {Data.filter(item =>
        item.name.toLowerCase().includes(data.toLowerCase())
      ).map(item => (
        <div className='items' key={item.id}>
          {/*left side*/}
          <div className='left'>
            {/*images*/}
            <img src={item.image} alt='' className='image' />
          </div>

          {/*right side*/}
          <div className='right'>
            <h2>{item.name}</h2>
            <h2>Price: {item.price} Rs</h2>
            {/*add to cart button*/}
            <button onClick={() => handleAddToCart(item)} className='addcart'>
              Add to Cart
            </button>
            <hr />
          </div>
        </div>
      ))}
    </div>
  );
}

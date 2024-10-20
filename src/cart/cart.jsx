import React from 'react';
import './cart.css';
import {Link} from 'react-router-dom'

export default function Cart({ cartItems }) {
  
  
  return (
    <div className='cart'>
    
      <h1 className='heading'>Shopping Cart</h1>
      {/*cart is emplty*/}
      {cartItems.length === 0 ? (
        <p style={{textAlign:'center'}}>Your Cart is Empty</p>
      ) : (
        cartItems.map((item, index) => (
  
          <div className='cartitem' key={index}>
            {/*left side image*/}
            <div className='left'>
              <img src={item.image} alt='' className='image' />
            </div>

            {/*right side data like price*/}
            <div className='right'>
              <h2>{item.name}</h2>
              <h2>Price: {item.price} Rs</h2>
              <button className='buy' ><Link to='/pay' style={{textDecoration:'none',color:'white'}}>Buy Now</Link></button>
            </div>
            
          </div>
        ))
      )}
    </div>
  );
}

import React from 'react'
import './home.css'
import { FaShoppingCart } from "react-icons/fa";

import {Link} from  "react-router-dom";
export default function home() {
  return (
    <div className='home'>
        
        {/*heading*/}
        <div className='heading'>
          <div>
            <h1>Techub</h1>
          </div>
          <div className='icon1'>
            <FaShoppingCart className='iconfont'/>
            
          </div>
        </div>

      {/*container 2*/}
      <div className='c2'>
        <ul>
            <li><Link  style={{textDecoration:'none',color:'black'}}to='/'>Our Products</Link></li>
            <li><Link style={{textDecoration:'none',color:'black'}}to='/com'>Laptops</Link></li>
            <li Link to='lap'>Computers</li>
            <li Link to='/mob'>Mobile</li>
            <li Link to='/tab'>Tablet</li>
            <li Link to='/drone'>Drones & Camera</li>
        </ul>
      </div>

      {/*contain 3*/}
      <div className='c3'>
        <h1>Incrediable Prices on All Your Favorite Items</h1>
        <button className='bt1'>Shop Now</button>
      </div>

      {/*container 4*/}
      <div className='c4'>
      <div className='space'>

      </div>
        <div className='c5'>
          <h1>Up to 30% Off</h1>
        </div>

        <div className='space'>

        </div>

        <div className='c6'>
            <h1>Take your Sound Anywhere</h1>
        </div>
      </div>
    </div>
  )
}

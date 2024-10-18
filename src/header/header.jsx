import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import './header.css'
export default function header() {
  return (
    <div className='header'>
      {/*heading*/}
      <div className='heading'>
          <div>
            <h1>Techub</h1>
          </div>
          <div className='icon1'>
            <FaShoppingCart className='iconfont'/>
          </div>
        </div>
    </div>
  )
}

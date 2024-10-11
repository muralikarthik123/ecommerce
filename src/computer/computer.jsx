import React from 'react'
import { FaSearch } from "react-icons/fa";
export default function computer() {
  return (
    <div>
        {/*input*/}
        <input className='search' placeholder='Search' type='text'/>
        <div className='icon1'>
            <FaSearch  className='iconsize'/>
        </div>
    </div>
  )
}

import React from 'react'
import './footer.css'
import {Link} from  "react-router-dom";
export default function footer() {
  return (
    <div className='footer'>
      {/*coloumn 1*/}
      <div className='c1'>
        <h2>Store Location</h2>
        <p>400 Terry Francine StreetSan Francisco, CA 94158 muralikarthik851@gmail.com  7386427924</p>
      </div>

      {/*coloumn 2*/}
      <div className='c1'>
        <h2>Shop</h2>
        <p><Link to='/' style={{textDecoration:'none',color:'black'}}>Home</Link></p>
        <p ><Link to='/com' style={{textDecoration:'none',color:'black'}}>Laptop</Link></p>
        <p>Mobile</p>
        <p>Tablet</p>
        <p><Link to='/tel' style={{textDecoration:'none',color:'black'}}>Television</Link></p>
      </div>

      {/*coloumn 3*/}
      <div className='c1'>
        <h2>Customer Support</h2>
        <p>Contact Us</p>
        <p>Help Center</p>
        <p>About Us</p>
        <p>Careers</p>
      </div>

      {/*coloumn 4*/}
      <div className='c1'>
        <h2>Policy</h2>
        <p>Shipping & Returns</p>
        <p>Terms & Conditions</p>
        <p>Payment Methods </p>
        <p>FAQ</p>
      </div>
    </div>
  )
}

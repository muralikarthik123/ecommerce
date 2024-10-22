import React from 'react'
import './home.css'
import {Link,useNavigate} from  "react-router-dom";
export default function Home() {
  const nav=useNavigate()
  const mobiles=()=>{
      nav('/mob')
  }

  const earpodes=()=>{
    nav('/ear')
}
  return (
    <div className='home'>
        

      {/*container 2*/}
      <div className='c2'>
        <ul>
            <li><Link  style={{textDecoration:'none',color:'black'}}to='/'>Our Offers</Link></li>
            <li><Link style={{textDecoration:'none',color:'black'}}to='/com'>Laptops</Link></li>
            <li><Link style={{textDecoration:'none',color:'black'}}to='/ear'>Earpodes</Link></li>
            <li><Link style={{textDecoration:'none',color:'black'}}to='/mob'>Mobiles</Link></li>
            <li><Link style={{textDecoration:'none',color:'black'}}to='/mob'>Tablets</Link></li>
            <li>< Link to='/tel' style={{textDecoration:'none',color:'black'}} >Television</Link></li>
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
          <button className='bt1' onClick={mobiles}>Shop Now</button>
        </div>

        <div className='space'>

        </div>

        <div className='c6'>
            <h1>Take your Sound Anywhere</h1>
            <button className='bt1' onClick={earpodes}>Shop Now</button>
        </div>
      </div>
    </div>
  )
}

import React,{useState} from 'react'
import './computer.css'
import Data from '../data.json'
export default function Computer() {
  const [data,setData]=useState('')
  return (
    <div className='com'>
      {/*techtub heading*/}
      <div className='heading'>
        <div>
          <h1 >Techub</h1>
        </div>
        <div>
          <input className='search' placeholder='Search' type='text' value={data} onChange={(e)=>setData(e.target.value)} />
        </div>
      </div>

      <h1 style={{textAlign:"center",textDecoration:'underline'}}>Macbooks</h1>
      {/*searching */}
      {Data.filter(item=> item.name.toLowerCase().includes(data.toLowerCase())).map((item)=>(
      <div className='items' key={item.id}>
        {/*left side*/}
        <div className='left'>
        <img src={item.image} alt=' ' className='image'/>
        </div>

        {/*right side*/}
        <div className='right'>
        <h2>{item.name}</h2>
        <h2>Price:{item.price}Rs</h2>
          {/*add to cart button*/}
        <button className='addcart'>Add to Cart</button>
        </div>
      </div>
      ))}
    </div>
  )
}

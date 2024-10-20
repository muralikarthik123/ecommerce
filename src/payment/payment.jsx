import React ,{useState}from 'react'
import './payment.css'
import { useNavigate } from 'react-router-dom';
export default function Payment() {
  const [data,setData]=useState(0)
 
  /*inputs adding*/
  const cod=()=>{
    setData(data+1)
    
  }

  /*order details*/
  const check=()=>{
    if(data>=8){
      alert('Order Placed Successfully')
    }
    else{
      alert('Please fill all the details')
    }
  }

  /*back button*/

  const navigate = useNavigate(); 
  const back=()=>{
    navigate('/');
  }

  return (
    <div className='payment'>
      <form className='c1'>
        {/*address details*/}
        <h1>Address Details</h1>
        <hr></hr>
        <p>Full name (First and Last name)</p>
        <input onClick={cod}  className='inputs' type='text' placeholder='Full name ' required/>
        <p>Mobile number</p>
        <input onClick={cod} className='inputs' type='number' placeholder='Mobile Number' required/>
        <p>Pincode</p>
        <input onClick={cod} className='inputs' type='number' placeholder='Pincode' required/>
        <p>Flat, House no., Building, Company, Apartment</p>
        <input onClick={cod}className='inputs' type='text' placeholder='House no' required/>
        <p>Area, Street, Sector, Village</p>
        <input onClick={cod} className='inputs' type='text' placeholder='Area, Street, Sector, Village' required/>
        <p>Landmark</p>
        <input onClick={cod} className='inputs' type='text' placeholder='Landmark' required/>
        <p>Town/City</p>
        <input onClick={cod} className='inputs' type='text' placeholder='Town/City' required/>
        <p>State</p>
        <select className='inputs'>
          <option >Andhra Pradesh</option>
          <option>Telangana</option>
          <option>Maharastra</option>
        </select>
        <p>Reenter the name of Iteam </p>
        <input onClick={cod} className='inputs' type='text' placeholder='Iteam name' required/>
        <h1>Payment Mode</h1>
        <input onClick={cod} type='radio' />
        <span>Cash on Delivery</span>
        <br></br>
        <div className='c2'>
          <div>
            <button className='order' onClick={check}>Place order</button>
          </div>
          <div>
            <button className='orders' onClick={back} >Back to home</button>
          </div>
        </div>
        
      </form>
    </div>
  )
}

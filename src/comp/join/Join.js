import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import imge from './Psgpraveen.png'
import './join.css'
export let user ='';
const Join = () => {
  let [v,setV]=useState('');
const va=(e)=>{
  setV(e.target.value);
}
const login =()=>{
  if (v.length>0) {
    user = v;
    setV('');
  } else {
    alert('Please Enter Your Name');  
  }
  console.log(user)
}
  return (
    <div className='joinPage'>
      <div className='joinContent'>
      <h1><img className='img2'src={imge}alt='img1'/> Chat-App</h1>
      <input placeholder='Enter Your Name'type='text' value={v} onChange={va}/><br/>
     <Link to={v.length>0?'/chat-app':'/chat'}>
     <button className='joinbtn' onClick={login}>Login</button>
     </Link> 
      </div>
    </div>
  )

}
export default Join
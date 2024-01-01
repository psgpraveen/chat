import React from 'react'
import img from './Psgpraveen.png'
import './header.css'
import Close from './Close.jpg'
const header = () => {
  return (<div className='main'>
    <div className='head'>
      <img src={img} alt='img' />
    </div>
    <a href={'/chat-app'} > <img className='img1'alt='img3'src={Close}/></a>
  </div>

  )
}

export default header

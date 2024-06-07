import React from 'react'
import './offers.css'
import exclusive_image from '../Asset/exclusive_image.png'
const Offers = () => {
  return (
    <div className='offers'>
      <div className='offers-left'>
        <h2>Exclusive</h2>
        <h2>Offers for you</h2>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className='offers-right'>
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  )
}
export default Offers

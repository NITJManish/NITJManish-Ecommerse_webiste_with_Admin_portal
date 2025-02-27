import React from 'react'
import './hero.css'
import hand_icon from '../Asset/hand_icon.png'
import arrow_icon from '../Asset/arrow.png'
import hero_image from '../Asset/hero_image.png'
const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-left'>
        <h2>New Arrival only</h2>
        <div>
            <div className='hero-hand-icon'>
                <p>New</p>
                <img src={hand_icon} alt="" />
            </div>
            <p>Collection</p>
            <p>For everyone</p>
        </div>
        <div className='hero-latest-btn'>
            <div>Latest Collection</div>
            <img src={arrow_icon} alt=""/>
        </div>
      </div>
      <div className='hero-right'>
         <img src={hero_image} alt=""/>
      </div>
    </div>
  )
}
export default Hero

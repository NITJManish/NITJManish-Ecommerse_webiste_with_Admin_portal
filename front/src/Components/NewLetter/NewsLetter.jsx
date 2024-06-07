import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='news-letter'>
      <h2>Get Exclusive Offer on your mail</h2>
      <p>Subscribe to our newsLetter and stay updated</p>
      <div>
        <input type="email" placeholder='Enter you email' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter

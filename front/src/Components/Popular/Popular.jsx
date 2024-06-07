import React from 'react'
import './popular.css'
import Item from '../Item/Item'
import { useState } from 'react'
import { useEffect } from 'react'
const Popular = () => {
  const [popularproduct,setPopularproduct]=useState([]);

  useEffect(()=>{
    fetch('http://localhost:8000/popularinwomen')
    .then((response)=>response.json())
    .then((data)=>{setPopularproduct(data)});
  },[]);
  return (
    <div className='popular'>
      <h2>POPULAR IN WOMEN</h2>
      <hr/>
      <div className='popular-item'>
        {popularproduct.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        })}
      </div>
    </div>

   )
}
export default Popular 

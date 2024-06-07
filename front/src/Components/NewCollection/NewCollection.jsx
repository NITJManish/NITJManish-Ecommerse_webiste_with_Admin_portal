import React from 'react'
import './NewCollection.css'
import Item from '../Item/Item'
import { useState } from 'react'
import { useEffect } from 'react'
const NewCollection = () => {
  const [newcollections,setNewcollection]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:8000/newcollection')
    .then((response)=>response.json())
    .then((data)=>{setNewcollection(data)});
  },[]);
  return (
    <div className='newCollection'>
      <h2>New Collection</h2>
      <hr/>
      <div className='collection'>
          {newcollections.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          })}
      </div>
    </div>
  )
}
export default NewCollection

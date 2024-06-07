import React, { useEffect, useState } from 'react'
import './ListProduct.css'
import cross_icon from '../../assets/cart_cross_icon.png'

const ListProduct = () => {
  const [allProducts,setAllProducts]=useState([]);
  
  const FtechInfo= async ()=>{
     await fetch('http://localhost:8000/allproducts')
     .then((resp)=>resp.json())
     .then((data)=>{setAllProducts(data)});
  }

  useEffect(()=>{
    FtechInfo();
  },[]);

  const remove_product= async (id)=>{
    await fetch('http://localhost:8000/removeProduct',{
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify({id:id}),
    });
    await FtechInfo();
  }

  return (
    <div className='listProduct'>
      <h1>All product List</h1>
      <div className='listProduct-format-main'>
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className='listProduct-allproducts'>
        <hr/>
        {allProducts.map((product,index)=>{
          return <><div key={index} className='listProduct-format-main listproduct-format'>
                 <img src={product.image} alt="" className='listProduct-product-icon'/>
                 <p>{product.name}</p>
                 <p>${product.old_price}</p>
                 <p>${product.new_price}</p>
                 <p>{product.category}</p>
                 <img onClick={()=>{remove_product(product.id)}} src={cross_icon} alt="" className='listProduct-remove-icon' />
          </div>
          <hr/>
          </>
        })}
      </div>
    </div>
  )
}

export default ListProduct

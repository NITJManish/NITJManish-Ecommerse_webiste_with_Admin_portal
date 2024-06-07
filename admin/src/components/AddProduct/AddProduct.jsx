import React, { useState } from 'react'
import './AddProduct.css'
import upload_area from '../../assets/upload_area1.jpg'
const AddProduct = () => {
  const [image,setImage]=useState(false);
  const [produtDetails,setProductDetails]=useState({
    name:"",
    image:"",
    category:"women",
    old_price:"",
    new_price:""
  })
  const chanHandler=(e)=>{
    setProductDetails({...produtDetails,[e.target.name]:e.target.value});
  }

  const imageHandler=(e)=>{
    setImage(e.target.files[0]);
  }

  const Add_product= async ()=>{
     let responseData;
     let product=produtDetails;

     let formData=new FormData();
     formData.append('product',image);

     await fetch('http://localhost:8000/upload',{
      method:'POST',
      headers:{
        Accept:'application/json',
      },
      body:formData,
     }).then((resp)=>resp.json()).then((data)=>{responseData=data});
     if(responseData.success){
      product.image=responseData.image_url;
      console.log(product);
      await fetch('http://localhost:8000/addProduct',{
        method:'POST',
        headers:{
          Accept:'application/json',
          'Content-Type':'application/json',
        },
        body:JSON.stringify(product),
      }).then((resp)=>resp.json()).then((data)=>{
        data.success?alert("Product added Successful"):alert("Failed")
      })
     }
  }

  return (
    <div className='add-product'>
      <div className='add-product-itemfield'>
        <p>Product title</p>
        <input value={produtDetails.name} onChange={chanHandler} type="text" name="name" placeholder='Type here'  />
      </div>
      <div className='add-product-price'>
        <div className='add-product-itemfield'>
            <p>Price</p>
        <input value={produtDetails.old_price} onChange={chanHandler} type="text" name="old_price" placeholder='Old price' />
        </div>
        <div className='add-product-itemfield'>
            <p>Offers Price</p>
        <input value={produtDetails.new_price} onChange={chanHandler} type="text" name="new_price" placeholder='Offers price' />
        </div>
      </div>
      <div className='add-product-itemfield'>
            <p>Product category</p>
            <select value={produtDetails.category} onChange={chanHandler} className='add-product-selector' name='category'>
                <option value="men">Men</option>
                <option value="women">Women</option>
                <option value="kid">Kid</option>
            </select>
        </div>
        <div className='add-product-itemfield'>
            <label htmlFor='file-input'>
             <img src={image?URL.createObjectURL(image):upload_area} alt="" className='addproduct-thumbnail-img' />
            </label>
            <input onChange={imageHandler} type='file' name='image' id='file-input' hidden />
        </div>
        <button onClick={()=>{Add_product()}} className='add-product-btn'>ADD</button>
    </div>
  )
}

export default AddProduct

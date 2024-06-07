import React from 'react'
import './Sidebar.css'
import add_product_icon from '../../assets/cart_product_icon.png'
import { Link } from 'react-router-dom'
import list_product_icon from '../../assets/Product_list_icon.jpg'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link to={'/addproduct'} style={{textDecoration:'none'}}>
      <div className='sidebar-item'>
        <img src={add_product_icon} width="40px" height="30px" alt="" />
        <p>Add product</p>
      </div>
      </Link>
      <Link to={'/listproduct'} style={{textDecoration:'none'}}>
      <div className='sidebar-item'>
        <img src={list_product_icon} width="40px" height="30px" alt="" />
        <p>Product List</p>
      </div>
      </Link>
    </div>
  )
}
export default Sidebar

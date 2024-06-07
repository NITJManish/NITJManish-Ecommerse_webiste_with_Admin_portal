import React, { useContext } from 'react'
import './CartItem.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Asset/cart_cross_icon.png'
const CartItem = () => {
    const {getTotalCartAmount,all_product,cartItems,removeFromCart}=useContext(ShopContext);
  return (
    <div className='cartitem'>
      <div className='cartitem-format-main'>
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr/>
      {all_product.map((e)=>{
        if(cartItems[e.id]>0){
            return <div>
        <div className='cartitem-format cartitem-format-main'>
            <img src={e.image} alt='' className='cartIcon-product-icon'/>
            <p>{e.name}</p>
            <p>${e.new_price}</p>
            <button className='cartitem-quantity'>{cartItems[e.id]}</button>
            <p>{e.new_price*cartItems[e.id]}</p>
            <img className="carticon-remove-icon" src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
        </div>
        <hr/>
      </div>
        }
        return null;
      })}
      <dic className="cartitem-down">
        <div className='cartitem-total'>
            <h1>Cart Total</h1>
            <div>
                <div className='cartitem-total-item'>
                   <p>SubTotal</p>
                   <p>{getTotalCartAmount()}</p>
                </div>
                <hr/>
                <div className='cartitem-total-item'>
                    <p>Shipping free</p>
                    <p>Free</p>
                </div>
                <hr/>
                <div className='cartitem-total-item'>
                    <h3>Total</h3>
                    <h3>${getTotalCartAmount()}</h3>
                </div>
            </div>
            <button>Proceed to checkout</button>
        </div>
        <div className='cartitem-promocode'>
            <p>If you have promocode enter it here </p>
            <div className='cartitem-promobox'>
                <input type="text" placeholder='Enter promocode'/>
                <button>Submit</button>
            </div>
        </div>
      </dic>
    </div>
  )
}

export default CartItem

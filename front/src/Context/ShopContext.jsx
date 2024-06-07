import React, { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
export const ShopContext=createContext(null);

const getDefaultCart=()=>{
    let cart={};
    for(let index=0;index<300+1;index++){
        cart[index]=0;
    }
    return cart
   }

const ShopContextProvider=(props)=>{
    const [all_product,setAll_product]=useState([]);
    const [cartItems,setCartItems]=useState(getDefaultCart());

    useEffect(()=>{
        fetch('http://localhost:8000/allproducts')
        .then((response)=>response.json())
        .then((data)=>{setAll_product(data)});

        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:8000/getcartdata',{
                method:'POST',
                headers:{
                    Accept:'application/json',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:"",
            }).then((response)=>response.json()).then((data)=>{setCartItems(data)});
           }

    },[])

    const addToCart=(ItemId)=>{
       setCartItems((prev)=>({...prev,[ItemId]:prev[ItemId]+1}))
       if(localStorage.getItem('auth-token')){
        fetch('http://localhost:8000/addtocart',{
            method:'POST',
            headers:{
                Accept:'application/json',
                'auth-token':`${localStorage.getItem('auth-token')}`,
                'Content-Type':'application/json',
            },
            body:JSON.stringify({ItemId:ItemId}),
        }).then((response)=>response.json()).then((data)=>{console.log(data)});
       }
    }

    const getTotalCartAmount=()=>{
        let totalAmount=0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo=all_product.find((product)=>(product.id===Number(item)));
                totalAmount +=itemInfo.new_price*cartItems[item];
            }
        }
        return totalAmount;
    }

    const getTotalCartItem=()=>{
        let totalItem=0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                totalItem+=cartItems[item];
            }
        }
        return totalItem;
    }
    
    const removeFromCart=(ItemId)=>{
        setCartItems((prev)=>({...prev,[ItemId]:prev[ItemId]-1}))
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:8000/removefromCart',{
                method:'POST',
                headers:{
                    Accept:'application/json',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({ItemId:ItemId}),
            }).then((response)=>response.json()).then((data)=>{console.log(data)});
           }
     }
    const ContextValue={getTotalCartItem,getTotalCartAmount,all_product,cartItems,addToCart,removeFromCart};
   return (
    <ShopContext.Provider value={ContextValue}>
        {props.children}
    </ShopContext.Provider>
   )
}

export default ShopContextProvider;
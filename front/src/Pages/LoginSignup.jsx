import React from 'react'
import './CSS/loginSignup.css'
import { useState } from 'react'
const LoginSignup = () => {
  const [state,setState]=useState("Login");
  const [formdata,setFormData]=useState({
    username:"",
    email:"",
    password:""
  })

  const changeHandler=(e)=>{
    setFormData({...formdata,[e.target.name]:e.target.value});
  }

  const login=async ()=>{
     console.log("login function executed",formdata);
     let responseData;
     await fetch('http://localhost:8000/login',{
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(formdata),
     }).then((resp)=>resp.json()).then((data)=>{responseData=data});
     if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
     }
     else{
      alert(responseData.errors);
     }
  }


  const signup=async ()=>{
     console.log("sign up function executed",formdata);
     let responseData;
     await fetch('http://localhost:8000/signup',{
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(formdata),
     }).then((resp)=>resp.json()).then((data)=>{responseData=data});
     if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
     }
     else{
      alert(responseData.errors);
     }
  }

  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>{state}</h1>
        <div className='loginsignup-fields'>
         {state==="sign up"? <input name="username" value={formdata.username} onChange={changeHandler} type="text" placeholder='Enter your name'/>:<></>}
          <input name="email" value={formdata.email} onChange={changeHandler} type="email" placeholder='Enter your email'/>
          <input name="password" value={formdata.password} onChange={changeHandler} type="password" placeholder='Enter password'/>
        </div>
        <button onClick={()=>{state==="Login"?login():signup()}}>Continue</button>
       {state==="sign up"? <p className='loginsignup-login'>Already have an account? <span onClick={()=>{setState("Login")}}>Login here</span></p>:
        <p className='loginsignup-login'>Create an account? <span onClick={()=>{setState("sign up")}}>Click here</span></p>}
        <div className='loginsignup-agree'>
          <input type="checkbox" name="" id="" />
          <p>By Continue, I agree to the term of use and privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup

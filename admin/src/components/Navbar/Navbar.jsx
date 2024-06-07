import React from 'react'
import './Navbar.css'
import navLogo from '../../assets/logo_big.png'
import navProfile from '../../assets/nav_profile.png'
const Navbar = () => {
  return (
    <div className='navbar'>
     <img src={navLogo} alt="" className='nav-logo' width="60px" height="40px" />
     <img src={navProfile} alt="" className='nav-profile' width="60px" height="40px"/>
    </div>
  )
}
export default Navbar 
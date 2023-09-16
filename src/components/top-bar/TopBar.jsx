import React from 'react'
import jordanLogo from "../../assets/images/jordan-logo.png"
import "./topBar.css"

const TopBar = () => {
  return (
    <div className='topbar'>
      <div className='topbar__img'>
       <img src={jordanLogo} alt="" />
      </div>

      
         <ul className='topbar__items__list'>
          <li>Find a Store</li>
          <li>Help</li>
          <li>Join Us</li>
          <li>Sign In</li>
         </ul>
      
    </div>
  )
}

export default TopBar
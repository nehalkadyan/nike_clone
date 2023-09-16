import React from 'react'
import {AiFillTwitterCircle, AiFillFacebook, AiFillYoutube, AiFillInstagram } from "react-icons/ai";
import "./footer.css";

const Footer = () => {
  return (
    <div className='footer'>
       <div className='footer__left'>
         <div className='footer__left_first'>
            <ul>
                <li>FIND A STORE</li>
                <li>BECOME A MEMBER</li>
                <li>SEND Us Feedback</li>
                <li>STUDENTS DISCOUNTS</li>  
            </ul>
         </div>

         <div className='footer__left_second'>
            <ul>
                <li>GET HELP</li>
                <li>Order Status</li>
                <li>Delivery</li>
                <li>Returns</li>
                <li>Payment Options</li>
                <li>Inquiries</li>
                <li>Contact Us On All Other Inquiries</li>
            </ul>
         </div>

         <div className='footer__left_third'>
           <ul>
            <li>ABOUT ME</li>
            <li>News</li>
            <li>Careers</li>
            <li>Investors</li>
            <li>Sustainability</li>
           </ul>
         </div>
       </div>

       <div className='footer__right'>
        <ul>
            <li><AiFillTwitterCircle /></li>
            <li><AiFillFacebook /></li> 
            <li><AiFillYoutube /></li>
            <li><AiFillInstagram /></li>
        </ul>
       </div>
    </div>
  )
}

export default Footer
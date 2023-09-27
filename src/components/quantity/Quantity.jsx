import React from 'react'
import {AiOutlinePlus, AiOutlineMinus} from "react-icons/ai";
import "./quantity.css";


const Quantity = ({amount, setIncrease, setDecrease}) => {

    
  return (
    <div className='quantity'>
       <h3>Select Quantity</h3>
       <div className='quantity_buttons'>
        <button onClick={setDecrease}><AiOutlineMinus /></button>
       {amount}
        <button onClick={setIncrease}><AiOutlinePlus /></button>
        </div>
    </div>
  )
}

export default Quantity
import React from 'react'
import "./cart.css"

const SubTotal = () => {
  return (
    <div className='price_card_container'>
               <h3>Summary</h3>
               <div className="">
               <div style={{ display: "flex", justifyContent: "space-between", gap: "3rem"}}>
                <p>subtotal</p>
                <p>Rs. 934.00</p>
               </div>

               <div style={{ display: "flex", justifyContent: "space-between", gap: "3rem"}}>
                <p>Estimated Delivery and Handling</p>
                <p>Rs.1250.00</p>
               </div>

               <div className='total_price' style={{ display: "flex", justifyContent: "space-between", gap: "3rem"}}>
                <p>Total</p>
                <p>Rs.2184.00</p>
               </div>
               </div>
            </div>
  )
}

export default SubTotal
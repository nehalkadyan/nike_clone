import React, { useState } from "react";
import "./cart.css";
import { MdDeleteOutline } from "react-icons/md";
import SubTotal from "./subTotal";
import { useCartContext } from "../../context/cartContext";
import Quantity from "../quantity/Quantity";

const CartItem = ({ id, name, img, price, amount, subtitle }) => {
  const { removeItem, setIncrease, setDecrease } = useCartContext();
  
  // const [value, setValue] = useState(quantity)

  const subTotal = price * amount;
  console.log(img)

  return (
    <div>
      <div className="cart_details_card_container">
        <div className="cart_details_card">
          <div className="cart_details_img">
            <img src={img[0].url} alt="img" />
          </div>

          <div className="cart_details_body">
            <strong>{name}</strong>
            <br />
           

            <div className="quantity_cart">
            <Quantity
              amount={amount}
              setDecrease={() => setDecrease(id)}
              setIncrease={() => setIncrease(id)}
            />
           
            </div>
           

            
          </div>

          <div className="price_details"><p>MRP: Rs. <span>{price}</span> </p>
          
          </div>
          <div className="sub_total">
          <p>Sub Total: <span>{subTotal}</span></p>
          
          <div className="delete_icon">
              <MdDeleteOutline onClick={() => removeItem(id)} />
            </div>
        </div>
        </div>

        
      </div>
    </div>
  );
};

export default CartItem;

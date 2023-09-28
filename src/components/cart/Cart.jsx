import React from "react";
import CartItem from "./CartItem";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";
import "./cart.css";

const Cart = () => {
  const { cart, clearCart, total_price } = useCartContext();
  console.log(cart);

  console.log(cart);
  const shipping_fee = 500;
  return (
    <div className="cart_section">
      <div className="cart_section_container">
        <div>
          <h3>Bag</h3>
          {cart.map((item) => {
            return (
              <CartItem
                id={item.id}
                subtitle={item.subtitle}
                name={item.name}
                img={item.images}
                price={item.price}
                amount={item.amount}
              />
            );
          })}
        </div>
      </div>

      <div className="summary_section">
        <h3>Summary</h3>
        <div className="summary_subtotal">
          <p>Subtotal</p>
          <p>{total_price}</p>
        </div>

        <div className="summary_shipping_fee">
          <p>Estimated Delivery</p>
          <p>{shipping_fee} </p>
        </div>

        <div className="summary_total_fee">
          <p>Total</p>
          <p>{total_price + shipping_fee}</p>
        </div>

        <div className="summary_buttons">
          <button onClick={clearCart}>Clear Cart</button>
          <NavLink className="navlink" to="/sale">
            {" "}
            <button>Continue Shopping</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Cart;

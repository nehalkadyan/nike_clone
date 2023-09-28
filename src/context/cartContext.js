import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "../reducers/cartReducer";

const CartContext = createContext();

// const getLocalCartData = () => {
//   let newCartData = localStorage.getItem("cart");
//   if (newCartData === []) {
//     return [];
//   } else {
//     return JSON.parse(newCartData);
//   }
// };

const initialState = {
  // cart: getLocalCartData(),
  cart: [],
  total_item: "",
  total_price: "",
  shipping_fee: 50000,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, name, price, product, images, amount) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { id, name, price, product, images, amount },
    });
  };

  // Increment and decrement

  const setDecrease = (id) => {
    dispatch({ type: "SET_DECREMENT", payload: id });
  };

  const setIncrease = (id) => {
    dispatch({ type: "SET_INCREMENT", payload: id });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  useEffect(() => {
    dispatch({ type: "CART_ITEM_PRICE_TOTAL" });
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        clearCart,
        setDecrease,
        setIncrease,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };

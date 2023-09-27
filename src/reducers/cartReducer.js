import React from 'react'

const cartReducer = (state, action) => {

    if(action.type === "ADD_TO_CART"){
        let {id, name, price, product, images, amount} = action.payload;
        console.log(product);
        
        let existingProduct = state.cart.find((item) => item.id === id);

        if(existingProduct){
          let updatedProduct = state.cart.map((item) => {
            if(item.id === id){
                let newAmount = item.price + price;
                
                return{
                    ...item,
                    price: newAmount,
                    
                }
              }else{
                return item
              }
            }
          )
          return {
            ...state,
            cart: updatedProduct
          }
            
        }else{
            let cartProduct;

            cartProduct = {
                id: id,
                name: name,
                price: price,
                images : images,
                amount: amount
               
            }
            return{
                ...state,
                cart: [...state.cart, cartProduct],
              };
            }
        }

        if(action.type === "SET_DECREMENT"){
          let updatedData = state.cart.map((item) => {
            console.log(item)
            if(item.id === action.payload){
              let decQuantity = item.amount - 1;

              if(decQuantity <= 1){
                decQuantity = 1;
              }

              return {
                ...item,
                amount : decQuantity,
              }
            }else{
              return item;
            }
          })
          return{
            ...state,
            cart: updatedData
          }
        }

        if(action.type === "SET_INCREMENT"){

          let updatedData = state.cart.map((item) => {
            if(item.id === action.payload){
              let incQuantity = item.amount + 1;

              if(incQuantity >= 10){
                incQuantity = 10;
              }

              return {
                ...item,
                amount : incQuantity,
              }
            }else{
              return item;
            }
          })
          return{
            ...state,
            cart: updatedData
          }
        }
       

    if(action.type === "REMOVE_ITEM"){
        
        
        let updatedCart = state.cart.filter((item) => {
            return item.id !== action.payload;
        })
         
        return{
            ...state,
            cart: updatedCart,
        }
    }

    if(action.type === "CLEAR_CART"){
        
        return{
            ...state,
            cart: []
        }
    }

    if(action.type === "SET_TOTAL_ITEMS"){
      
      let updatedValue = state.cart.reduce((initialVal, currentItem) => {
        let {amount} = currentItem;
        initialVal += amount;
        return initialVal;
    }, 0)
    return{
        ...state,
        total_item: updatedValue
    }
    }

    if(action.type === "SET_TOTAL_AMOUNT"){
      let updatedValue = state.cart.reduce((initialVal, item) => {
        let {price, amount} = item;
        initialVal += price * amount;
        return initialVal;
      }, 0)

      return{
        ...state,
        total_amount: updatedValue
      }
    }

    

    
  return state;
};

export default cartReducer
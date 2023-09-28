import React from 'react'
import "./products.css";
import { useFilterContext } from '../../context/filterContext';
import {NavLink} from "react-router-dom";

const Products = () => {
    const {filter_products} = useFilterContext()
   


  return (
    <div className='products_section'>
  
        <div className="product_card_section">
      {filter_products.map((item) => {
        return (
          <NavLink className="navlink" to ={`/single/${item.id}`}>
          <div className='product_card' key={item.id}>
            <img src={item.images[0].url} alt="product_img" />
            <div className='product_body'>
                <strong>{item.name}</strong>
                <span style={{fontSize: "16px"}}>{item.subtitle}</span>
                <span>{item.category}</span>
                <strong style={{ margin: "1rem 0rem 0rem 1rem" }}>{item.price}</strong>
            </div>
          </div>
          </NavLink>
        
        );
      })}
    </div>
   
    </div>
  )
}

export default Products
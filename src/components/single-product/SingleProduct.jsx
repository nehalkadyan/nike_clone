import React, {useState, useEffect} from 'react'
import "./singleProduct.css";
import SingleProductDetails from './SingleProductDetails';
import {useParams} from "react-router-dom"
import { useProductContext } from '../../context/productContext';

const API = "http://localhost:3031/data";

const SingleProduct = () => {
    const {getSingleProduct, singleProduct} = useProductContext();

    console.log(singleProduct);

    const [quantity, setQuantity] = useState(1);

      
    const { id } = useParams();

    
    
    
    useEffect(() => {
        getSingleProduct(`${API}?id=${id}`);
    }, []);


  return (
    <div className='single_product'>
       
     



       <div>
      {
        singleProduct.map((item) => {
            return <SingleProductDetails  id ={item.id} name={item.name} subtitle={item.subtitle} price ={item.price} description = {item.desc} size = {item.sizes} accordion1 = {item.accordion1} accordion1Body = {item.accordion1Body} accordion2 = {item.accordion2} accordion2Body = {item.accordion2Body} accordion3 = {item.accordion3} accordion3Body = {item.accordion3Body} images = {item.images} imgUrl = {item.url} product = {singleProduct} amount = {quantity} setAmount={setQuantity} singleProduct = {singleProduct}/>
        })
      }
      </div>
      

    </div>
  )
}

export default SingleProduct
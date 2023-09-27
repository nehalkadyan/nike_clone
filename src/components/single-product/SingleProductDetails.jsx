import React, {useState} from 'react';
import "./singleProductDetails.css";
import { Accordion } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../../context/cartContext';
import Quantity from '../quantity/Quantity';


const SingleProductDetails = ({id, name, imgUrl, subtitle, price, description, size, accordion1, accordion1Body, accordion2, accordion2Body, accordion3, accordion3Body, images, product, amount, setAmount, singleProduct}) => {

    
    const {addToCart} = useCartContext()
    const [buttonPressed, setButtonPressed] = useState(false)
    const [mainImage, setMainImage] = useState(images[0])
    const setDecrease = () => {
        amount > 1 ? setAmount(amount - 1) : setAmount(1);
      };

    const setIncrease = () => {
        amount < 10 ? setAmount(amount+1) : setAmount(10)
        }
     
    
    

    
  return (
    <div className='single_product_details'>


        <div className='single_product_image'>
        <img src={mainImage.url}  alt="mainImage" />

        </div>
        <div className='single_product_details_body'>
            <h1>{name}</h1>
            <h4>{subtitle}</h4>
            <h4>Rs. {price}</h4>
            <span>incl. of taxes</span>
            <p>(Also includes all applicable duties)</p>
            
            <div className='single_product_img_container'>
              {
                images.map((item) => {
                    return(
                        <img key={item.id} src={item.url}  alt="img" onMouseEnter={() => setMainImage(item)} />
                    )
                })
              }
            </div>

          
          

            <div className='single_product_size_container'>
                <h3>Select Size</h3>
                 
                 
                <div className='size_card' >
                    {size.map((item) => {

                        return (
                            <div className= { buttonPressed ? "size_button": "size_button"} onClick={() => setButtonPressed(!buttonPressed)}>
                              <div>{item.size}</div>
                            </div>
                        )
                    })}
                </div> 

                 <Quantity amount={amount}
                 setDecrease = {setDecrease}
                 setIncrease={setIncrease}/>
                 
                 
               
            </div>

            <div className='add_to_cart'>
              <NavLink className="navlink" to="/cart"><button onClick={() => addToCart(id, name, price, product, images, amount)}>Add to Bag</button></NavLink>
            </div>

            <div className='description'>
               {description}
            </div>

            <Accordion className='accordion'>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            {accordion1}
                        </Accordion.Header>

                        <Accordion.Body>
                        {accordion1Body}
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                           {accordion2}
                        </Accordion.Header>

                        <Accordion.Body>
                       {accordion2Body}
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                        <Accordion.Header>
                            Reviews
                        </Accordion.Header>

                        <Accordion.Body>
                        Good for walking and running very comfy good fit
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3">
                        <Accordion.Header>
                           {accordion3}
                        </Accordion.Header>
                         
                        <Accordion.Body>
                       {accordion3Body}
                        </Accordion.Body>
                    </Accordion.Item>
                 </Accordion>
        </div>
    </div>
  )
}

export default SingleProductDetails
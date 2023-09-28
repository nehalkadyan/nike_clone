import React from 'react';
import "./sneakerCard.css";

const SneakerCard = ({name, model, cardImage}) => {

    

  return (
    <div className='sneaker_card'>
        <div className='sneaker_card_img'>
       <img src={cardImage} alt="img"/>
       </div>
       <div className= "sneaker_card_body" >
        
        <span>{name}</span>
           <h2>{model}</h2>
         
       
           
          
       </div>
    </div>
  )
}

export default SneakerCard
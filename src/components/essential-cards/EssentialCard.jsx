import React from 'react'
import "./essentialCard.css";

const EssentialCard = ({image, category}) => {
  return (
    <div className = "essential__card">
      <div className='essential__card_img'>
        <img src={image} alt="essential-card-img" />
      </div>

      <div className='essential__card_btn'>
        <button>{category}</button>
      </div>
    </div>
  )
}

export default EssentialCard
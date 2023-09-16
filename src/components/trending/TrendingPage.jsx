import React from 'react'
import "./trendingPage.css";

const TrendingPage = ({image, imp, name, button}) => {
  return (
    <div className='trending__section'>
        

        <div className='large_card'>
           <img src={image} alt="large_img" />
           <div className='large__card_body'>
             <span>{imp}</span>
             <h2>{name}</h2>
             <button>{button}</button>
           </div>
        </div>
    </div>
  )
}

export default TrendingPage

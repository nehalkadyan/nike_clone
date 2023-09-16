import React from "react";
import "./heroSection.css";

const HeroSection = ({
  animatedSpan,
  animatedPara,
  heroPoster,
  title,
  category,
  para,
  button,
}) => {
  return (
    <div className="hero__section">
      <div className="animated__heading">
        <span>{animatedSpan}</span>
        <p>{animatedPara}</p>
      </div>

      

      <div className="hero__Poster">
        <img src={heroPoster} alt="background-image" />
      </div>

      <div className="hero__Card">
        <span>{title}</span>
        <h1>{category}</h1>
        <p>{para}</p>
        <button>{button}</button>
      </div>
    </div>
  );
};

export default HeroSection;

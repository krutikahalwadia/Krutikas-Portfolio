import React from "react";
import "./Card.css";

const Card = ({emoji, heading, detail, color}) => {
  return (
    <div className="card" style={{borderColor: {color}}}> 
      <img src={emoji} alt="" />
      <span>{heading}</span>
      {Array.isArray(detail) ? (
        <ul>
          {detail.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <span>{detail}</span>
      )}
      {/* <button className="c-button">LEARN MORE</button> */}
    </div>
  );
};

export default Card;

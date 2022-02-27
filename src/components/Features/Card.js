import React from "react";

const Card = ({ image, title, description, icon }) => {
  return (
    <>
      <div className="box btn_shadow">
        {/* <img src={image} alt="" /> */}
        <i className={icon}></i>

        <h2>{title}</h2>
        <p>{description}</p>
        <a href="">
          <i className="fas fa-arrow-right action"></i>
        </a>
      </div>
    </>
  );
};

export default Card;

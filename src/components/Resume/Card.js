import React from 'react';

const Card = (props) => {
  const { id, category, year, title, desc, rate } = props.data;
  return (
    <div className="box btn_shadow">
      <div className="title_content d_flex">
        <div className="title">
          <h2>{title}</h2>
          <span>{year}</span>
        </div>
        <div className="rate">
          <button className="btn_shadow" type="button">
            {rate}
          </button>
        </div>
      </div>
      <hr />
      <p>{desc}</p>
    </div>
  );
};

export default Card;

import React, { useState } from "react";

const Card = (props) => {
  const { id, category, totalLike, title, image } = props.project;
  const [modal, setModal] = useState(false);
  const toogleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <div className="box btn_shadow">
        <div className="img">
          <img src={image} alt="" onClick={toogleModal} />
        </div>
        <div className="category d_flex">
          <span onClick={toogleModal}>{category}</span>
          <label>
            <i className="fas fa-heart"></i>
            {totalLike}
          </label>
        </div>
        <div className="title">
          <h2 onClick={toogleModal}>{title}</h2>
          <a href="#popup" className="arrow" onClick={toogleModal}>
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>

      {/*Modal */}
      {modal && (
        <div className="modal">
          <div onClick={toogleModal} className="overlay"></div>
          <div className="modal-content d_flex">
            <div className="modal-img left" left>
              <img src={image} alt="" />
            </div>
            <div className="modal-text right">
              <span>Featured - Design</span>
              <h1>{title}</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Ratione nobis optio, dolor ea molestias ullam sequi omnis libero
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Ratione nobis optio, dolor ea molestias ullam sequi omnis libero
              </p>
              <div className="button f_flex mtop">
                <button className="btn_shadow">
                  LIKE THIS <i className="fas fa-thumbs-up"></i>
                </button>
                <button className="btn_shadow">
                  VIEW PROJECT <i className="fas fa-chevron-right"></i>
                </button>
              </div>
              <button className="close-modal btn_shadow" onClick={toogleModal}>
                <i className="fas fa-times"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;

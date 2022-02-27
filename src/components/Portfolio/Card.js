import React, { useState } from 'react';

const Card = (props) => {
  const { id, category, totalLike, title, image } = props.project;
  const [modal, setModal] = useState(false);
  const toogleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <div
        className="box btn_shadow"
        onClick={toogleModal}
        onKeyPress={toogleModal}
        role="button"
        tabIndex={0}
      >
        <div className="img">
          <img src={image} alt="" />
        </div>
        <div className="category d_flex">
          <span>{category}</span>
          <span>
            <i className="fas fa-heart" />
            {totalLike}
          </span>
        </div>
        <div className="title">
          <h2>{title}</h2>
          <a href="#popup" className="arrow" onClick={toogleModal}>
            <i className="fas fa-arrow-right" />
          </a>
        </div>
      </div>

      {/*Modal */}
      {modal && (
        <div className="modal">
          <div onClick={toogleModal} className="overlay" role="none" />
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
                <button className="btn_shadow" type="button">
                  LIKE THIS <i className="fas fa-thumbs-up" />
                </button>
                <button className="btn_shadow" type="button">
                  VIEW PROJECT <i className="fas fa-chevron-right" />
                </button>
              </div>
              <button
                className="close-modal btn_shadow"
                onClick={toogleModal}
                type="button"
              >
                <i className="fas fa-times" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;

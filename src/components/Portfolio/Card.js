import React, { useState } from 'react';
import styles from './Portfolio.module.css';

const Card = (props) => {
  const { id, category, totalLike, title, image } = props.project;
  const [modal, setModal] = useState(false);
  const toogleModal = () => {
    setModal(!modal);
    const body = document.getElementsByTagName('body');

    body[0].classList.toggle('hideScroll');
  };

  return (
    <>
      <div
        className={styles.card}
        onClick={toogleModal}
        onKeyPress={toogleModal}
        role="button"
        tabIndex={0}
      >
        <div className={styles.img}>
          <img src={image} alt="" />
        </div>
        <div className={styles.category}>
          <span>{category}</span>
          <span>
            <i className="fas fa-heart" />
            {totalLike}
          </span>
        </div>
        <div>
          <h2>{title}</h2>
          <span className={styles.arrow}>
            <i className="fas fa-arrow-right" />
          </span>
        </div>
      </div>

      {/*Modal */}
      {modal && (
        <div className={styles.modal}>
          <div onClick={toogleModal} className={styles.overlay} role="none" />
          <div className={styles.modalContent}>
            <div className={styles.modalImg}>
              <img src={image} alt="" />
            </div>
            <div className={styles.modalText}>
              <span>Featured - Design</span>
              <h1>{title}</h1>
              <p>
                Lorem ipsum dolor sit amet con sectetur, adipisicing elit.
                Ratione nobis optio, dolor ea molestias ullam sequi omnis libero
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Ratione nobis optio, dolor ea molestias ullam sequi omnis libero
              </p>
              <div className={styles.modalActions}>
                <button className={styles.actionBtn} type="button">
                  LIKE THIS <i className="fas fa-thumbs-up" />
                </button>
                <button className={styles.actionBtn} type="button">
                  VIEW PROJECT <i className="fas fa-chevron-right" />
                </button>
              </div>
            </div>
            <button
              className={styles.closeBtn}
              onClick={toogleModal}
              type="button"
            >
              <i className="fas fa-times" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;

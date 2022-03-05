import React, { useState } from 'react';
import styles from './Blog.module.css';
import Modal from '../Modal/Modal';
import ModalCard from './ModalCard';

const Card = (props) => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <Modal
        openModal={modal}
        fnCloseModal={() => setModal(false)}
        style={styles.modalContent}
      >
        <ModalCard />
      </Modal>
      <div
        className={styles.card}
        onClick={() => setModal(true)}
        onKeyPress={() => setModal(true)}
        role="button"
        tabIndex={0}
      >
        <div className={styles.img}>
          <img
            src={`https://picsum.photos/600/400?random=${props.id}`}
            alt=""
          />
        </div>
        <div className={styles.date}>
          <span>17 de Septiembre, 2022</span>
        </div>
        <div className={styles.title}>
          <h2>Digital Marketing for developers</h2>
          <span className={styles.arrow}>
            <i className="fas fa-arrow-right" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Card;

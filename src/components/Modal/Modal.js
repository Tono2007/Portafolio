import React, { useState } from 'react';

import styles from './Modal.module.css';

function Modal(props) {
  const [modal, setModal] = useState(true);
  const toogleModal = () => {
    setModal(!modal);
    const body = document.getElementsByTagName('body');

    /* body[0].classList.toggle('hideScroll'); */
  };
  return (
    modal && (
      <div className={styles.modal}>
        <div onClick={toogleModal} className={styles.overlay} role="none" />
        <div className={`${styles.modalContent} ${props.style}`}>
          {props.children}
          <button
            className={styles.closeBtn}
            onClick={toogleModal}
            type="button"
          >
            <i className="fas fa-times" />
          </button>
        </div>
      </div>
    )
  );
}

export default Modal;

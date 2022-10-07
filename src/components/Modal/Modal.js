import { useState, useEffect } from 'react';

import styles from './Modal.module.css';

function Modal(props) {
  const [modal, setModal] = useState(true);
  const { openModal, fnCloseModal, styleContent, styleOverlay } = props;

  useEffect(() => {
    openModal && openModalHandler();
  }, [openModal]);

  const openModalHandler = () => {
    setModal(!modal);
    const body = document.getElementsByTagName('body');
    body[0].classList.add('hideScroll');
  };
  const closeModalHandler = () => {
    fnCloseModal();
    const body = document.getElementsByTagName('body');
    body[0].classList.remove('hideScroll');
  };

  return (
    openModal && (
      <div className={styles.modal}>
        <div
          onClick={closeModalHandler}
          className={`${styles.overlay} ${styleOverlay}`}
          role="none"
        />
        <div className={`${styles.modalContent} ${styleContent}`}>
          {props.children}
          <div className={styles.btnWrapper}>
            <button
              className={styles.closeBtn}
              onClick={closeModalHandler}
              type="button"
              aria-label="Cerrar modal"
            >
              <i className="fas fa-times" />
            </button>
          </div>
        </div>
      </div>
    )
  );
  // eslint-disable-next-line no-unreachable
  return null;
}

export default Modal;

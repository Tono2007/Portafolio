import { useState, useEffect, memo } from 'react';

import styles from './Modal.module.css';

function Modal(props) {
  const {
    openModal = false,
    fnCloseModal,
    styleContent = '',
    styleOverlay = '',
    children,
  } = props;
  const [modal, setModal] = useState(openModal);

  useEffect(() => {
    if (openModal) openModalHandler();
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

  if (!openModal) return null;

  return (
    openModal && (
      <div className={styles.modal}>
        <div
          onClick={closeModalHandler}
          className={`${styles.overlay} ${styleOverlay}`}
          role="none"
        />
        <div className={`${styles.modalContent} ${styleContent}`}>
          {children}
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
}

export default memo(Modal);

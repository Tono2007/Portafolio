import { useState } from 'react';
import logo1 from '../../assets/logo_fondo_blanco_1.png';
import styles from './Footer.module.css';
import scrollTop from '../../utils/helpers/scrollTop';

import Modal from '../Modal/Modal';
import AboutMe from '../AboutMe/AboutMe';

const Footer = () => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <Modal
        openModal={modal}
        fnCloseModal={() => setModal(false)}
        style={styles.modalContent}
      >
        <AboutMe />
      </Modal>
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className="img">
            <img src={logo1} alt="" />
          </div>
          <p>
            {' '}
            💻 - Construido por{' '}
            <button
              type="button"
              onClick={() => setModal(true)}
              className={styles.userBtn}
            >
              @AntonioAyola{' '}
            </button>{' '}
            con 🖤 en 2022
          </p>
          <button type="button" className={styles.floatBtn} onClick={scrollTop}>
            <i className="fas fa-angle-double-up" />
          </button>
        </div>
      </footer>
    </>
  );
};

export default Footer;

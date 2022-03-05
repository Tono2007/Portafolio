import React from 'react';
import logo1 from '../../assets/logo_fondo_blanco_1.png';
import styles from './Footer.module.css';
import scrollTop from '../../utils/helpers/scrollTop';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className="img">
          <img src={logo1} alt="" />
        </div>
        <p>© 2022 Copyright. All right reserved by Tono</p>
        <button type="button" className={styles.floatBtn} onClick={scrollTop}>
          <i className="fas fa-angle-double-up" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;

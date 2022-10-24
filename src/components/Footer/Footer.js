import { useState, lazy, Suspense } from 'react';
import logo1 from '../../assets/logo_fondo_blanco_1.png';
import line from '../../assets/llline.svg';

import styles from './Footer.module.css';
import scrollTop from '../../utils/helpers/scrollTop';

import Modal from '../Modal/Modal';

const AboutMe = lazy(() => import('../AboutMe/AboutMe'));

const Footer = () => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <Modal
        openModal={modal}
        fnCloseModal={() => setModal(false)}
        styleContent={styles.modalContent}
      >
        <Suspense fallback={<p className="loadingLabel">Cargando...</p>}>
          <AboutMe />
        </Suspense>
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
            con 🖤 en 2022 &#x1F1F2;&#x1F1FD;
          </p>
          <img src={line} alt="" className={styles.svg} />
          <img src={line} alt="" className={styles.svg} />
          <img src={line} alt="" className={styles.svg} />
          <img src={line} alt="" className={styles.svg} />

          <button type="button" className={styles.floatBtn} onClick={scrollTop}>
            <i className="fas fa-angle-double-up" />
          </button>
        </div>
        <p className={styles.visitas}>
          Num. Visitas
          <img
            src="https://counter1.stat.ovh/private/contadorvisitasgratis.php?c=1am2er4yl9uq6du4qfz5hdqc3enw75xt"
            border="0"
            title="contador de visitas"
            alt="contador de visitas"
          />
        </p>
      </footer>
    </>
  );
};

export default Footer;

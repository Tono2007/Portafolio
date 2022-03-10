import { useState, useEffect, useRef } from 'react';
import logo1 from '../../assets/logo_fondo_blanco_4.png';
import styles from './Header.module.css';

import Modal from '../Modal/Modal';
import AboutMe from '../AboutMe/AboutMe';

import scrollTop from '../../utils/helpers/scrollTop';
import useToggle from '../../utils/hooks/useToggle';
import useScrollInto from '../../utils/hooks/useScrollInto';
import useScrollSpy from '../../utils/hooks/useScrollSpy';
import ModalConfig from './ModalConfig';

const Header = () => {
  const [modal, setModal] = useState(false);

  const { open, handleOpen, handleClose, handleToggle } = useToggle();
  const [Mobile, setMobile] = useState(false);
  const [activeNav, setActiveNav] = useState(false);
  const scrollTo = useScrollInto();
  useScrollSpy();

  useEffect(() => {
    function handleScroll() {
      window.scrollY > 100 ? setActiveNav(true) : setActiveNav(false);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toogleMobileNav = () => {
    setMobile(!Mobile);
  };
  const removeMobileNav = () => {
    setMobile(false);
  };

  const handleLink = (section) => {
    removeMobileNav();
    setMobile(false);
    scrollTo(section);
  };

  return (
    <>
      <Modal
        openModal={modal}
        fnCloseModal={() => setModal(false)}
        styleContent={styles.modalContent}
      >
        <AboutMe />
      </Modal>
      <Modal
        openModal={open}
        fnCloseModal={() => handleClose()}
        styleOverlay={styles.modalContentConfigOverlay}
        styleContent={styles.modalContentConfig}
      >
        <ModalConfig />
      </Modal>
      <header className={activeNav ? styles.headerActive : styles.header}>
        <nav className={styles.nav}>
          <button type="button" onClick={scrollTop}>
            <img src={logo1} alt="<AntonioAyola/>" className={styles.logo} />
          </button>
          <ul className={styles.navLinks}>
            <li className="home">
              <a href="#!" onClick={() => handleLink('home')}>
                inicio
              </a>
            </li>
            <li className="features">
              <a href="#!" onClick={() => handleLink('features')}>
                habilidades
              </a>
            </li>
            <li className="portfolio">
              <a href="#!" onClick={() => handleLink('portfolio')}>
                portafolio
              </a>
            </li>
            <li className="about">
              <a href="#!" onClick={() => setModal(true)}>
                SOBRE MI
              </a>
            </li>
            <li className="clients">
              <a href="#!" onClick={() => handleLink('clients')}>
                Recomendaciones
              </a>
            </li>
            <li className="blog">
              <a href="#!" onClick={() => handleLink('blog')}>
                blog
              </a>
            </li>
            <li className="contact">
              <a href="#!" onClick={() => handleLink('contact')}>
                contacto
              </a>
            </li>
            <li>
              <a href="#!" onClick={() => handleOpen()}>
                <i className={styles.cogBtn} />
              </a>
            </li>
            <li>
              <button
                className={styles.homeBtn}
                type="button"
                onClick={() => setMobile(false)}
              >
                APOYAME
              </button>
            </li>
          </ul>
          {Mobile && (
            <ul className={styles.navMobileLinks}>
              <li className="home">
                <a href="#!" onClick={() => handleLink('home')}>
                  inicio
                </a>
              </li>
              <li className="features">
                <a href="#!" onClick={() => handleLink('features')}>
                  habilidades
                </a>
              </li>
              <li className="portfolio">
                <a href="#!" onClick={() => handleLink('portfolio')}>
                  portafolio
                </a>
              </li>
              <li className="about">
                <a href="#!" onClick={() => setModal(true)}>
                  sobre mi
                </a>
              </li>
              <li className="clients">
                <a href="#!" onClick={() => handleLink('clients')}>
                  Recomendaciones
                </a>
              </li>
              <li className="blog">
                <a href="#!" onClick={() => handleLink('blog')}>
                  blog
                </a>
              </li>
              <li className="contact">
                <a href="#!" onClick={() => handleLink('contact')}>
                  contacto
                </a>
              </li>
              <li>
                <a href="#!" onClick={() => handleOpen()}>
                  <i className={styles.cogBtn} />
                </a>
              </li>
              <li>
                <button
                  className={styles.homeBtn}
                  type="button"
                  onClick={() => setMobile(false)}
                >
                  APOYAME
                </button>
              </li>
            </ul>
          )}

          <button
            className={styles.showMobile}
            onClick={toogleMobileNav}
            type="button"
          >
            <i className={Mobile ? styles.closeBtn : styles.openBtn} />
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;

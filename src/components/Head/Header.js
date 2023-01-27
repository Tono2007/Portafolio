import { useState, lazy, Suspense, useEffect } from 'react';

import scrollTop from '../../utils/helpers/scrollTop';
import useToggle from '../../utils/hooks/useToggle';
import useScrollInto from '../../utils/hooks/useScrollInto';
import useScrollSpy from '../../utils/hooks/useScrollSpy';

import logo1 from '../../assets/logo_fondo_blanco_4.webp';
import styles from './Header.module.css';

import Modal from '../Modal/Modal';
import Loader from '../Loader';

const ModalConfig = lazy(() => import('./ModalConfig'));
const AboutMe = lazy(() => import('../AboutMe/AboutMe'));

const Header = () => {
  const [modal, setModal] = useState(false);

  const { open, handleOpen, handleClose, handleToggle } = useToggle();
  const [Mobile, setMobile] = useState(false);
  const [activeNav, setActiveNav] = useState(false);
  const [isReadyForInstall, setIsReadyForInstall] = useState(false);
  const scrollTo = useScrollInto();
  useScrollSpy();

  useEffect(() => {
    function handleScroll() {
      setMobile(false);
      window.scrollY > 100 ? setActiveNav(true) : setActiveNav(false);
    }
    window.addEventListener('scroll', handleScroll);

    function handlePWAInit(event) {
      // Prevent the mini-infobar from appearing on mobile.
      /* event.preventDefault(); */
      console.log('👍', 'beforeinstallprompt', event);
      // Stash the event so it can be triggered later.
      window.deferredPrompt = event;
      // Remove the 'hidden' class from the install button container.
      setIsReadyForInstall(true);
    }

    window.addEventListener('beforeinstallprompt', handlePWAInit);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('beforeinstallprompt', handlePWAInit);
    };
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

  async function downloadApp() {
    console.log('👍', 'butInstall-clicked');
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
      // The deferred prompt isn't available.
      console.log('oops, no prompt event guardado en window');
      return;
    }
    // Show the install prompt.
    promptEvent.prompt();
    // Log the result
    const result = await promptEvent.userChoice;
    console.log('👍', 'userChoice', result);
    // Reset the deferred prompt variable, since
    // prompt() can only be called once.
    window.deferredPrompt = null;
    // Hide the install button.
    setIsReadyForInstall(false);
  }

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Modal openModal={modal} fnCloseModal={() => setModal(false)}>
          <AboutMe />
        </Modal>
        <Modal
          openModal={open}
          fnCloseModal={() => handleClose()}
          styleOverlay={styles.modalContentConfigOverlay}
        >
          <ModalConfig />
        </Modal>
      </Suspense>
      <header className={activeNav ? styles.headerActive : styles.header}>
        <nav className={styles.nav}>
          <button type="button" onClick={scrollTop}>
            <img
              width="200px"
              height="50px"
              src={logo1}
              alt="<AntonioAyola/>"
              className={styles.logo}
            />
          </button>
          <ul className={styles.navLinks}>
            <li className="home">
              <a title="inicio" href="#!" onClick={() => handleLink('home')}>
                inicio
              </a>
            </li>
            <li className="features">
              <a
                title="habilidades"
                href="#!"
                onClick={() => handleLink('features')}
              >
                habilidades
              </a>
            </li>
            <li className="portfolio">
              <a
                title="portafolio"
                href="#!"
                onClick={() => handleLink('portfolio')}
              >
                portafolio
              </a>
            </li>
            <li className="about">
              <a title="SOBRE MI" href="#!" onClick={() => setModal(true)}>
                SOBRE MI
              </a>
            </li>
            <li className="clients">
              <a
                title="Recomendaciones"
                href="#!"
                onClick={() => handleLink('clients')}
              >
                Recomendaciones
              </a>
            </li>
            <li className="blog">
              <a title="blog" href="#!" onClick={() => handleLink('blog')}>
                blog
              </a>
            </li>
            <li className="contact">
              <a
                title="contacto"
                href="#!"
                onClick={() => handleLink('contact')}
              >
                contacto
              </a>
            </li>
            <li>
              <a title="config" href="#!" onClick={() => handleOpen()}>
                <i className={styles.cogBtn} title="Theme Config" />
              </a>
            </li>
            {/*  <li>
              <button
                className={styles.homeBtn}
                type="button"
                onClick={() => setModal(true)}
              >
                APOYAME
              </button>
            </li> */}
            {isReadyForInstall ? (
              <li>
                <button
                  className={styles.homeBtn}
                  type="button"
                  onClick={() => downloadApp(true)}
                >
                  Instalar APP
                </button>
              </li>
            ) : (
              <li>
                <button
                  className={styles.homeBtn}
                  type="button"
                  onClick={() => setModal(true)}
                >
                  VER MAS
                </button>
              </li>
            )}
          </ul>
          {/*  {Mobile && ( */}
          {true && (
            <ul
              className={`${styles.navMobileLinks} ${
                Mobile ? styles.navMobileLinksWidth : ''
              }`}
            >
              <li className="home">
                <a title="inicio" href="#!" onClick={() => handleLink('home')}>
                  inicio
                </a>
              </li>
              <li className="features">
                <a
                  title="habilidades"
                  href="#!"
                  onClick={() => handleLink('features')}
                >
                  habilidades
                </a>
              </li>
              <li className="portfolio">
                <a
                  title="portafolio"
                  href="#!"
                  onClick={() => handleLink('portfolio')}
                >
                  portafolio
                </a>
              </li>
              <li className="about">
                <a
                  title="sobre mi"
                  href="#!"
                  onClick={() => {
                    setMobile(false);
                    setModal(true);
                  }}
                >
                  sobre mi
                </a>
              </li>
              <li className="Recomendaciones">
                <a
                  title="contacto"
                  href="#!"
                  onClick={() => handleLink('clients')}
                >
                  Recomendaciones
                </a>
              </li>
              <li className="blog">
                <a title="blog" href="#!" onClick={() => handleLink('blog')}>
                  blog
                </a>
              </li>
              <li className="contact">
                <a
                  title="contacto"
                  href="#!"
                  onClick={() => handleLink('contact')}
                >
                  contacto
                </a>
              </li>
              <li>
                <a title="config" href="#!" onClick={() => handleOpen()}>
                  <i className={styles.cogBtn} title="Theme Config" />
                </a>
              </li>

              {isReadyForInstall ? (
                <li>
                  <button
                    className={styles.homeBtn}
                    type="button"
                    onClick={() => downloadApp(true)}
                  >
                    Instalar APP
                  </button>
                </li>
              ) : (
                <li>
                  <button
                    className={styles.homeBtn}
                    type="button"
                    onClick={() => {
                      setMobile(false);
                      setModal(true);
                    }}
                  >
                    VER MAS
                  </button>
                </li>
              )}
            </ul>
          )}

          <button
            className={Mobile ? styles.closeBtn : styles.openBtn}
            onClick={toogleMobileNav}
            type="button"
            title="Abrir Menu Lateral"
            name="Abrir Menu Lateral"
          >
            <i
              className={
                Mobile ? styles['btn-close-icon'] : styles['btn-open-icon']
              }
            />
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;

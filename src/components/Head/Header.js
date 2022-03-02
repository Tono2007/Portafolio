import { useState, useEffect, useRef } from 'react';
import logo1 from '../../assets/logo_fondo_blanco_4.png';
import styles from './Header.module.css';

const Header = () => {
  const [Mobile, setMobile] = useState(false);
  const [activeNav, setActiveNav] = useState(false);
  useEffect(() => {
    function handleScroll() {
      window.scrollY > 100 ? setActiveNav(true) : setActiveNav(false);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={activeNav ? styles.headerActive : styles.header}>
      <nav className={styles.nav}>
        <div>
          <img src={logo1} alt="<AntonioAyola/>" className={styles.logo} />
        </div>
        <ul className={styles.navLinks}>
          <li>
            <a href="#home" onClick={() => setMobile(false)}>
              home
            </a>
          </li>
          <li>
            <a href="#features" onClick={() => setMobile(false)}>
              features
            </a>
          </li>
          <li>
            <a href="#portfolio" onClick={() => setMobile(false)}>
              portafolio
            </a>
          </li>
          <li>
            <a href="#resume" onClick={() => setMobile(false)}>
              resume
            </a>
          </li>
          <li>
            <a href="#clients" onClick={() => setMobile(false)}>
              clients
            </a>
          </li>
          <li>
            <a href="#blog" onClick={() => setMobile(false)}>
              blog
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setMobile(false)}>
              contact
            </a>
          </li>
          <li>
            <button
              className={styles.homeBtn}
              type="button"
              onClick={() => setMobile(false)}
            >
              SUPPORT ME
            </button>
          </li>
        </ul>
        {Mobile && (
          <ul className={styles.navMobileLinks}>
            <li>
              <a href="#home" onClick={() => setMobile(false)}>
                home
              </a>
            </li>
            <li>
              <a href="#features" onClick={() => setMobile(false)}>
                features
              </a>
            </li>
            <li>
              <a href="#portfolio" onClick={() => setMobile(false)}>
                portafolio
              </a>
            </li>
            <li>
              <a href="#resume" onClick={() => setMobile(false)}>
                resume
              </a>
            </li>
            <li>
              <a href="#clients" onClick={() => setMobile(false)}>
                clients
              </a>
            </li>
            <li>
              <a href="#blog" onClick={() => setMobile(false)}>
                blog
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setMobile(false)}>
                contact
              </a>
            </li>
            <li>
              <button
                className={styles.homeBtn}
                type="button"
                onClick={() => setMobile(false)}
              >
                SUPPORT ME
              </button>
            </li>
          </ul>
        )}

        <button
          className={styles.showMobile}
          onClick={() => setMobile(!Mobile)}
          type="button"
        >
          <i className={Mobile ? styles.closeBtn : styles.openBtn} />
        </button>
      </nav>
    </header>
  );
};

export default Header;

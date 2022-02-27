import { useState } from 'react';
import './Header.css';
import logo1 from '../../assets/logo_fondo_blanco_4.png';

const Header = () => {
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    header.classList.toggle('active', window.scrollY > 100);
  });

  const [Mobile, setMobile] = useState(false);
  return (
    <header className={Mobile ? 'header headerActive' : 'header'}>
      <div className="container d_flex">
        <div className="logo">
          <img
            src={logo1}
            alt="<AntonioAyola/>"
            style={{ width: 'auto', height: '40px', marginTop: '10px' }}
          />
        </div>
        <div className="navlink">
          <ul className={Mobile ? 'nav-links-mobile' : 'link f_flex uppercase'}>
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
                className="home-btn"
                type="button"
                onClick={() => setMobile(false)}
              >
                SUPPORT ME
              </button>
            </li>
          </ul>
          <button
            className="toggle"
            onClick={() => setMobile(!Mobile)}
            type="button"
          >
            {Mobile ? (
              <i className="fas fa-times close home-btn" />
            ) : (
              <i className="fas fa-bars open " />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

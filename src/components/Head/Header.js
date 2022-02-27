import { useState } from "react";
import "./Header.css";
import logo1 from "../../assets/logo_fondo_blanco_4.png";

const Header = () => {
  window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 100);
  });

  const [Mobile, setMobile] = useState(false);
  return (
    <>
      <header className="header">
        <div className="container d_flex">
          <div className="logo">
            <img
              src={logo1}
              alt="<AntonioAyola/>"
              style={{ width: "auto", height: "40px" }}
            />
          </div>
          <div className="navlink">
            <ul
              className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"}
              onClick={() => setMobile(false)}
            >
              <li>
                <a href="#home">home</a>
              </li>
              <li>
                <a href="#features">features</a>
              </li>
              <li>
                <a href="#portfolio">portafolio</a>
              </li>
              <li>
                <a href="#resume">resume</a>
              </li>
              <li>
                <a href="#clients">clients</a>
              </li>
              <li>
                <a href="#blog">blog</a>
              </li>
              <li>
                <a href="#contact">contact</a>
              </li>
              <li>
                <button className="home-btn">SUPPORT ME</button>
              </li>
            </ul>
            <button className="toggle" onClick={() => setMobile(!Mobile)}>
              {Mobile ? (
                <i className="fas fa-times close home-btn"></i>
              ) : (
                <i className="fas fa-bars open "></i>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

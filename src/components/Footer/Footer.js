import React from 'react';
import logo1 from '../../assets/logo_fondo_blanco_1.png';

const Footer = () => {
  return (
    <footer>
      <div className="container text-center top">
        <div className="img">
          <img src={logo1} alt="" />
        </div>
        <p>© 2022 Copyright. All right reserved by Tono</p>
      </div>
    </footer>
  );
};

export default Footer;

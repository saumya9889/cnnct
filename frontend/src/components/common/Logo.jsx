import React from 'react';
import Logo from '../../assets/images/logo.png';
import LogoVector from '../../assets/images/logoVector.png';

const LogoSection = () => {
  return (
    <div className="logo">
      <img className="vector" src={LogoVector} alt="logo vector" />
      <img className="logoimg" src={Logo} alt="main logo" />
    </div>
  );
};

export default LogoSection;

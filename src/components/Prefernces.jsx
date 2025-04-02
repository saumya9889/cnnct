import React, { useState } from "react";
import PreferencesForm from "./PreferencesForm";
import SignImg from '../assets/images/signup.png';
import Logo from '../assets/images/logo.png';
import LogoVector from '../assets/images/logoVector.png';

export const Preferences = () => {
  return (
    <div className="signup-container">
        <div className="signup-wrapper">
            <div className="signup-page">
      <div className="logo">
        <img className='vector' src={LogoVector} alt="logo" />
        <img className='logoimg' src={Logo} alt="logo" />
      </div>
      <PreferencesForm />
      </div>
      <div className="image-section">
        <img src={SignImg} alt="signup" />
      </div>
    </div>
    </div>
  );
};



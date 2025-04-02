import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import SignImg from '../../../assets/images/signup.png';
import Logo from '../../../assets/images/logo.png';
import LogoVector from '../../../assets/images/logoVector.png';
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <div className="signup-container">
        <div className="signup-wrapper">
          <div className="signup-page">
            <div className="logo">
              <img className='vector' src={LogoVector} alt="logo" />
              <img className='logoimg' src={Logo} alt="logo" />
            </div>
            <div className="form-section">
              <div className='title-wrap'>
                <h1>Sign in</h1>
              </div>
              <form>
                <input
                  type="text"
                  id="Username"
                  name="Username"
                  placeholder='Username'
                />
                
                <div className="password-wrapper">
                  <input className='password-input'
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    placeholder='Password'
                  />
                  <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
                
                <button type="submit" className="login-btn" onClick={() => navigate('/preferences')}>Log in</button>
                <p>Don't have an account? <a href="#" className='signup-link'>Sign up</a></p>
              </form>
              <small>
                This site is protected by reCAPTCHA and the Google <a href="#">Privacy Policy</a> and <a href="#">Terms of Service</a> apply.
              </small>
            </div>
          </div>
          <div className="image-section">
            <img className='right-img' src={SignImg} alt="Person working on laptop" />
          </div>
        </div>
      </div>

      {/* CSS for eye icon positioning */}
      
    </>
  );
};

export default LogIn;
